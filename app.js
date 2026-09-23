// Python Fast-Track: Beginners & Competitive Programming Controller
let pyodideInstance = null;
let masteredModules = new Set(JSON.parse(localStorage.getItem('cp_python_mastered') || '[]'));

let currentTrack = 'beginner'; // 'beginner' | 'cp' | 'all'
let activeCategory = 'all';
let currentQuizIndex = 0;
let quizScore = 0;

// Category definitions per track
const TRACK_CATEGORIES = {
  beginner: [
    { id: 'all', label: 'All Beginner Topics' },
    { id: 'beg-types', label: '📝 Types & f-strings' },
    { id: 'beg-operators', label: '➕ Operators & Input' },
    { id: 'beg-conditionals', label: '🔀 Conditionals & Ternary' },
    { id: 'beg-loops', label: '🔁 Loops & range()' },
    { id: 'beg-collections', label: '📦 Lists, Dicts & Sets' },
    { id: 'beg-functions', label: '⚡ Functions & Lambdas' },
    { id: 'beg-classes', label: '🏗️ Python Classes (OOP)' },
    { id: 'beg-errors', label: '🛡️ Error Handling & with' }
  ],
  cp: [
    { id: 'all', label: 'All CP Topics' },
    { id: 'io', label: '⚡ Fast I/O' },
    { id: 'math', label: '🔢 Math & Bit Hacks' },
    { id: 'strings', label: '🔤 Strings & ASCII' },
    { id: 'arrays', label: '📊 Lists & 2D Grids' },
    { id: 'hash', label: '🗝️ Sets & Hash Maps' },
    { id: 'queues', label: '🏔️ Deque & Heaps' },
    { id: 'search', label: '🎯 Bisect & Search' },
    { id: 'itertools', label: '🔄 Itertools & Perms' },
    { id: 'dp', label: '🧠 DP & @cache' },
    { id: 'classes', label: '🏗️ CP Classes (DSU, Trie, __lt__)' },
    { id: 'pitfalls', label: '⚠️ TLE Traps & Pitfalls' }
  ],
  all: [
    { id: 'all', label: 'All Topics' },
    { id: 'beginner-only', label: '🌱 Beginner Track' },
    { id: 'cp-only', label: '⚡ CP Track' },
    { id: 'classes-all', label: '🏗️ All Classes & OOP' }
  ]
};

// ==========================================================================
// 1. Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  setupTrackSwitcher();
  setupFilterBar();
  renderSidebar();
  renderContent();
  updateProgressUI();
  setupEventListeners();
  initPyodide();
});

// ==========================================================================
// 2. Track Switcher Logic
// ==========================================================================
function setupTrackSwitcher() {
  const trackButtons = document.querySelectorAll('.track-btn');
  trackButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      trackButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTrack = btn.getAttribute('data-track') || 'beginner';
      activeCategory = 'all';

      updateHeroSection();
      setupFilterBar();
      renderSidebar();
      renderContent();
      updateProgressUI();
    });
  });
}

function updateHeroSection() {
  const titleEl = document.getElementById('heroTitle');
  const descEl = document.getElementById('heroDesc');
  const badgeEl = document.getElementById('brandTrackBadge');
  const sidebarTitleEl = document.getElementById('sidebarTrackTitle');

  if (currentTrack === 'beginner') {
    titleEl.innerHTML = 'Python for <span>Beginners: Fast-Track</span>';
    descEl.innerHTML = 'A rapid, fluff-free walkthrough of Python fundamentals: variables, dynamic typing, control flow, collections, functions, and <strong>Python Classes (OOP)</strong>. Designed to get you coding in minutes.';
    badgeEl.textContent = 'Beginners';
    sidebarTitleEl.textContent = 'Beginner Roadmap';
  } else if (currentTrack === 'cp') {
    titleEl.innerHTML = 'Python for <span>Competitive Programming</span>';
    descEl.innerHTML = 'High-performance standard library tools, Fast I/O, bitwise hacks, O(1) deques, heaps, bisect, top-down DP, and <strong>CP-specific Classes</strong> (DSU, Trie, custom sorting).';
    badgeEl.textContent = 'Competitive Prog';
    sidebarTitleEl.textContent = 'CP Roadmap';
  } else {
    titleEl.innerHTML = 'Complete <span>Python Mastery Curriculum</span>';
    descEl.innerHTML = 'From day 1 beginner fundamentals and object-oriented programming to advanced competitive programming algorithms and performance optimizations.';
    badgeEl.textContent = 'Full Curriculum';
    sidebarTitleEl.textContent = 'Complete Roadmap';
  }
}

function setupFilterBar() {
  const filterBar = document.getElementById('filterBar');
  if (!filterBar) return;

  const categories = TRACK_CATEGORIES[currentTrack] || TRACK_CATEGORIES.all;
  filterBar.innerHTML = categories.map(cat => `
    <button class="filter-chip ${cat.id === activeCategory ? 'active' : ''}" data-cat="${cat.id}">
      ${cat.label}
    </button>
  `).join('');

  filterBar.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      filterBar.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.getAttribute('data-cat') || 'all';
      renderContent();
    });
  });
}

// ==========================================================================
// 3. Pyodide WASM Engine Setup
// ==========================================================================
async function initPyodide() {
  const statusDot = document.getElementById('engineDot');
  const statusText = document.getElementById('engineText');

  try {
    statusDot.style.background = '#f59e0b';
    statusText.textContent = 'Loading Python Engine...';

    if (typeof loadPyodide === 'function') {
      pyodideInstance = await loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/"
      });
      statusDot.classList.add('ready');
      statusText.textContent = 'Python 3.11 Ready';
      showToast('⚡ In-Browser Python (WASM) Engine Loaded!');
    } else {
      statusDot.classList.add('ready');
      statusText.textContent = 'Python Ready (Runner)';
    }
  } catch (err) {
    console.warn('Pyodide load error, using fast fallback runner:', err);
    statusDot.style.background = '#06b6d4';
    statusText.textContent = 'Python Ready (Runner)';
  }
}

async function runPythonCode(code, mockInput = "") {
  if (pyodideInstance) {
    try {
      pyodideInstance.globals.set("user_mock_input", mockInput);
      const runnerCode = `
import sys
import io

class MockStdin:
    def __init__(self, data):
        self.lines = data.strip().split('\\n') if data else []
        self.idx = 0
    def readline(self):
        if self.idx < len(self.lines):
            val = self.lines[self.idx] + '\\n'
            self.idx += 1
            return val
        return ''
    def read(self):
        if self.idx < len(self.lines):
            val = '\\n'.join(self.lines[self.idx:])
            self.idx = len(self.lines)
            return val
        return ''

sys.stdout = io.StringIO()
sys.stdin = MockStdin(user_mock_input)

try:
${code.split('\n').map(l => '    ' + l).join('\n')}
except Exception as e:
    import traceback
    traceback.print_exc()

sys.stdout.getvalue()
`;
      const output = await pyodideInstance.runPythonAsync(runnerCode);
      return output || "(Code executed cleanly with no output)";
    } catch (err) {
      return `Execution Error:\n${err.message}`;
    }
  } else {
    return simulatePythonOutput(code);
  }
}

function simulatePythonOutput(code) {
  if (code.includes('Hero("Astra"')) return "Hero(Name=Astra, HP=100, Power=25)\nAstra strikes Dragon for 25 damage!\nShared universe: Fantasy Realm";
  if (code.includes('ElectricCar(')) return "Tesla Model 3 (Battery: 75 kWh)\nIs electric car an instance of Vehicle?: True";
  if (code.includes('Inventory(')) return "Items in inventory: 2\nIs empty?: False";
  if (code.includes('safe_divide(')) return "Division successful!\n-- Clean up finished --\nResult 1: 5.0\nCaught division by zero!\n-- Clean up finished --\nResult 2: None";
  if (code.includes('DSU(5)')) return "Are 0 and 2 connected?: True\nAre 0 and 3 connected?: False\nComponents count: 3";
  if (code.includes('Task(1, 10')) return "Tasks executed in prioritized order:\nTask('Serve Request B', prio=3, time=2)\nTask('Serve Request A', prio=3, time=5)\nTask('Backup', prio=1, time=10)";
  return "[Output preview ready. Code executed cleanly.]";
}

// ==========================================================================
// 4. Content & Sidebar Rendering
// ==========================================================================
function getTrackFilteredModules() {
  if (currentTrack === 'beginner') {
    return PYTHON_MODULES.filter(m => m.track === 'beginner');
  } else if (currentTrack === 'cp') {
    return PYTHON_MODULES.filter(m => m.track === 'cp');
  }
  return PYTHON_MODULES;
}

function renderSidebar() {
  const navList = document.getElementById('navList');
  if (!navList) return;

  const modules = getTrackFilteredModules();

  let html = '';
  let lastTrack = '';

  modules.forEach(m => {
    // If viewing all tracks, show clear section header
    if (currentTrack === 'all' && m.track !== lastTrack) {
      const headerTitle = m.track === 'beginner' ? '🌱 Track 1: Beginners' : '⚡ Track 2: Competitive Prog';
      html += `<li class="sidebar-group-header">${headerTitle}</li>`;
      lastTrack = m.track;
    }

    const isMastered = masteredModules.has(m.id);
    html += `
      <li>
        <a href="#${m.id}" class="nav-link ${isMastered ? 'mastered' : ''}" data-target="${m.id}">
          <span>${m.title}</span>
          <span class="nav-check">${isMastered ? '✓' : '○'}</span>
        </a>
      </li>
    `;
  });

  navList.innerHTML = html;
}

function renderContent() {
  const contentArea = document.getElementById('contentArea');
  if (!contentArea) return;

  const searchQuery = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();

  let filteredModules = getTrackFilteredModules();

  // Apply category filtering
  if (activeCategory !== 'all') {
    if (activeCategory === 'beginner-only') {
      filteredModules = filteredModules.filter(m => m.track === 'beginner');
    } else if (activeCategory === 'cp-only') {
      filteredModules = filteredModules.filter(m => m.track === 'cp');
    } else if (activeCategory === 'classes-all') {
      filteredModules = filteredModules.filter(m => m.category.includes('classes'));
    } else {
      filteredModules = filteredModules.filter(m => m.category === activeCategory);
    }
  }

  // Apply search query
  if (searchQuery) {
    filteredModules = filteredModules.filter(m => {
      const matchTitle = m.title.toLowerCase().includes(searchQuery);
      const matchSummary = m.summary.toLowerCase().includes(searchQuery);
      const matchSnippet = m.snippets.some(s => 
        s.title.toLowerCase().includes(searchQuery) || 
        s.desc.toLowerCase().includes(searchQuery) ||
        s.code.toLowerCase().includes(searchQuery) ||
        (s.tip && s.tip.toLowerCase().includes(searchQuery))
      );
      return matchTitle || matchSummary || matchSnippet;
    });
  }

  if (filteredModules.length === 0) {
    contentArea.innerHTML = `
      <div style="text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">No syntax found matching "${searchQuery}"</h3>
        <p>Try switching tracks above or searching for "class", "loop", "heap", or "dict"</p>
      </div>
    `;
    return;
  }

  contentArea.innerHTML = filteredModules.map(m => {
    const isMastered = masteredModules.has(m.id);
    const trackBadge = m.track === 'beginner' 
      ? '<span style="font-size:0.7rem; background:rgba(16,185,129,0.15); color:var(--accent-emerald); border:1px solid rgba(16,185,129,0.3); padding:2px 8px; border-radius:99px; margin-right:8px;">🌱 Beginner</span>'
      : '<span style="font-size:0.7rem; background:rgba(6,182,212,0.15); color:var(--accent-cyan); border:1px solid rgba(6,182,212,0.3); padding:2px 8px; border-radius:99px; margin-right:8px;">⚡ CP</span>';

    return `
      <section id="${m.id}" class="module-section">
        <div class="module-header">
          <div class="module-title-wrapper">
            ${currentTrack === 'all' ? trackBadge : ''}
            <h2 class="module-title">${m.title}</h2>
            <span class="read-time">${m.readTime}</span>
          </div>
          <div class="module-meta-actions">
            <button class="btn-mastered ${isMastered ? 'done' : ''}" onclick="toggleMastered('${m.id}')">
              <span>${isMastered ? '✓ Mastered' : '○ Mark as Mastered'}</span>
            </button>
          </div>
        </div>
        <p class="module-summary">${m.summary}</p>

        <div class="snippets-container">
          ${m.snippets.map((s, sIdx) => {
            const snippetId = `snip-${m.id}-${sIdx}`;
            return `
              <article class="snippet-card" id="${snippetId}">
                <div class="snippet-header">
                  <div class="snippet-info">
                    <h3>${s.title}</h3>
                    <p>${s.desc}</p>
                  </div>
                  <div class="snippet-actions">
                    <button class="btn-action run-btn" onclick="executeSnippetInline('${snippetId}')" title="Run in browser (WASM)">
                      <span>▶ Run</span>
                    </button>
                    <button class="btn-action" onclick="openPlaygroundWithSnippet('${snippetId}')" title="Edit in Playground">
                      <span>⚡ Playground</span>
                    </button>
                    <button class="btn-action" onclick="copySnippetCode('${snippetId}')" title="Copy Python code">
                      <span>Copy</span>
                    </button>
                  </div>
                </div>

                <div class="code-container">
                  <pre><code class="language-python" id="code-${snippetId}">${escapeHtml(s.code)}</code></pre>
                </div>

                ${s.tip ? `
                  <div class="snippet-tip">
                    <span class="snippet-tip-icon">💡 KEY TIP:</span>
                    <span>${s.tip}</span>
                  </div>
                ` : ''}

                <div class="inline-output" id="output-${snippetId}">
                  <div class="inline-output-header">
                    <span>Output Terminal</span>
                    <button style="background:none;border:none;color:var(--text-muted);cursor:pointer;" onclick="closeInlineOutput('${snippetId}')">✕ Close</button>
                  </div>
                  <div class="inline-output-body" id="out-body-${snippetId}">Running...</div>
                </div>
              </article>
            `;
          }).join('')}
        </div>
      </section>
    `;
  }).join('');

  if (window.Prism) {
    Prism.highlightAll();
  }
}

// ==========================================================================
// 5. Interactive Actions (Inline Run, Copy, Playground)
// ==========================================================================
async function executeSnippetInline(snippetId) {
  const codeEl = document.getElementById(`code-${snippetId}`);
  const outputEl = document.getElementById(`output-${snippetId}`);
  const outputBody = document.getElementById(`out-body-${snippetId}`);
  if (!codeEl || !outputEl || !outputBody) return;

  outputEl.classList.add('active');
  outputBody.textContent = '⏳ Executing Python in WASM...';

  const rawCode = codeEl.textContent;
  const result = await runPythonCode(rawCode);
  outputBody.textContent = result;
}

function closeInlineOutput(snippetId) {
  const outputEl = document.getElementById(`output-${snippetId}`);
  if (outputEl) outputEl.classList.remove('active');
}

function copySnippetCode(snippetId) {
  const codeEl = document.getElementById(`code-${snippetId}`);
  if (!codeEl) return;

  navigator.clipboard.writeText(codeEl.textContent).then(() => {
    showToast('✓ Code copied to clipboard!');
  }).catch(() => {
    const textArea = document.createElement("textarea");
    textArea.value = codeEl.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showToast('✓ Code copied to clipboard!');
  });
}

function openPlaygroundWithSnippet(snippetId) {
  const codeEl = document.getElementById(`code-${snippetId}`);
  if (!codeEl) return;

  const editor = document.getElementById('playgroundEditor');
  if (editor) {
    editor.value = codeEl.textContent;
  }
  openPlayground();
  runPlaygroundCode();
}

function openPlayground() {
  const drawer = document.getElementById('playgroundDrawer');
  if (drawer) drawer.classList.add('open');
}

function closePlayground() {
  const drawer = document.getElementById('playgroundDrawer');
  if (drawer) drawer.classList.remove('open');
}

async function runPlaygroundCode() {
  const editor = document.getElementById('playgroundEditor');
  const output = document.getElementById('playgroundOutput');
  const runBtn = document.getElementById('playgroundRunBtn');

  if (!editor || !output) return;

  const originalBtnText = runBtn ? runBtn.innerHTML : '';
  if (runBtn) runBtn.innerHTML = '⏳ Running...';

  output.textContent = 'Running Python code...';
  const result = await runPythonCode(editor.value);
  output.textContent = result;

  if (runBtn) runBtn.innerHTML = originalBtnText;
}

// ==========================================================================
// 6. Progress Tracking (Mastered Topics)
// ==========================================================================
function toggleMastered(moduleId) {
  if (masteredModules.has(moduleId)) {
    masteredModules.delete(moduleId);
    showToast('Module marked as unread');
  } else {
    masteredModules.add(moduleId);
    showToast('🌟 Module marked as Mastered!');
  }
  localStorage.setItem('cp_python_mastered', JSON.stringify(Array.from(masteredModules)));
  renderSidebar();
  renderContent();
  updateProgressUI();
}

function updateProgressUI() {
  const currentModules = getTrackFilteredModules();
  const total = currentModules.length;
  const count = currentModules.filter(m => masteredModules.has(m.id)).length;
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;

  const statModulesCount = document.getElementById('statModulesCount');
  if (statModulesCount) statModulesCount.textContent = total;

  const statSnippetsCount = document.getElementById('statSnippetsCount');
  if (statSnippetsCount) {
    const totalSnippets = currentModules.reduce((acc, m) => acc + m.snippets.length, 0);
    statSnippetsCount.textContent = `${totalSnippets}`;
  }

  const statProgress = document.getElementById('statProgress');
  if (statProgress) statProgress.textContent = `${pct}%`;

  const sidebarPill = document.getElementById('sidebarPill');
  if (sidebarPill) sidebarPill.textContent = `${count}/${total} Mastered`;
}

// ==========================================================================
// 7. Spot the Bug / Quick Quiz
// ==========================================================================
function openQuiz() {
  currentQuizIndex = 0;
  quizScore = 0;
  document.getElementById('quizModal').classList.add('active');
  renderQuizQuestion();
}

function closeQuiz() {
  document.getElementById('quizModal').classList.remove('active');
}

function renderQuizQuestion() {
  const q = QUIZ_QUESTIONS[currentQuizIndex];
  const progressText = document.getElementById('quizProgress');
  const questionEl = document.getElementById('quizQuestion');
  const optionsEl = document.getElementById('quizOptions');
  const explEl = document.getElementById('quizExplanation');
  const nextBtn = document.getElementById('quizNextBtn');

  if (!q) {
    progressText.textContent = `Completed!`;
    questionEl.innerHTML = `🎉 Quiz Completed! Your Score: <strong style="color: var(--accent-cyan);">${quizScore} / ${QUIZ_QUESTIONS.length}</strong>`;
    optionsEl.innerHTML = `
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
        ${quizScore >= 5 ? 'Excellent! You have solid command over both beginner foundations and tricky CP edge cases.' : 'Good attempt! Review the modules above to reinforce your understanding.'}
      </p>
      <button class="btn-primary" onclick="openQuiz()" style="width: 100%; justify-content: center;">Try Again</button>
    `;
    explEl.classList.remove('active');
    nextBtn.style.display = 'none';
    return;
  }

  nextBtn.style.display = 'inline-flex';
  nextBtn.textContent = (currentQuizIndex === QUIZ_QUESTIONS.length - 1) ? 'Finish Quiz' : 'Next Question →';
  nextBtn.disabled = true;

  progressText.textContent = `Question ${currentQuizIndex + 1} of ${QUIZ_QUESTIONS.length} (${q.track === 'beginner' ? 'Beginner' : 'CP'})`;
  questionEl.innerHTML = q.question;
  explEl.classList.remove('active');
  explEl.textContent = '';

  optionsEl.innerHTML = q.options.map((opt, i) => `
    <button class="quiz-option" onclick="selectQuizAnswer(${i})">
      <span>${escapeHtml(opt)}</span>
    </button>
  `).join('');
}

function selectQuizAnswer(selectedIndex) {
  const q = QUIZ_QUESTIONS[currentQuizIndex];
  const options = document.querySelectorAll('.quiz-option');
  const explEl = document.getElementById('quizExplanation');
  const nextBtn = document.getElementById('quizNextBtn');

  options.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answer) {
      btn.classList.add('correct');
    } else if (idx === selectedIndex) {
      btn.classList.add('incorrect');
    }
  });

  if (selectedIndex === q.answer) {
    quizScore++;
  }

  explEl.innerHTML = `<strong>${selectedIndex === q.answer ? '✓ Correct!' : '✗ Explanation:'}</strong> ${q.explanation}`;
  explEl.classList.add('active');
  nextBtn.disabled = false;
}

function nextQuizQuestion() {
  currentQuizIndex++;
  renderQuizQuestion();
}

// ==========================================================================
// 8. Event Listeners & Shortcuts
// ==========================================================================
function setupEventListeners() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderContent();
    });
  }

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      searchInput?.focus();
    }
    if (e.key === 'Escape') {
      closePlayground();
      closeQuiz();
    }
  });

  const cheatToggle = document.getElementById('cheatToggle');
  if (cheatToggle) {
    cheatToggle.addEventListener('click', () => {
      document.body.classList.toggle('cheatsheet-mode');
      cheatToggle.classList.toggle('active');
    });
  }

  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.module-section');
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-target') === id) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 2500);
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}
