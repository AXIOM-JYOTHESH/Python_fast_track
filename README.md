# 🐍 Python Fast-Track: Beginners to Competitive Programming

> A high-density, interactive learning platform designed to teach all essential Python syntax in record time—from core beginner fundamentals and Object-Oriented Programming (OOP) to high-performance competitive programming algorithms (LeetCode, Codeforces, AtCoder).

![Python Version](https://img.shields.io/badge/Python-3.10%2B-blue?logo=python)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Complete-emerald)

---

## ⚡ Key Highlights

- **Dual-Track Roadmap**:
  - **🌱 Track 1: Python for Beginners (8 Modules)**: Variables, primitive types, operators, truthy/falsy logic, loops with `range()`, lists, tuples, dicts, sets, functions, and **Python Classes & OOP** (`__init__`, `self`, methods, inheritance, `super()`, dunder methods).
  - **⚡ Track 2: Competitive Programming (11 Modules)**: Lightning Fast I/O (`sys.stdin.readline`), bitwise operations (`x.bit_count()`, `x & (-x)`), 2D grid allocation gotchas, multi-key sorting, `collections.deque` (O(1) BFS), `heapq`, `bisect`, `itertools`, `@functools.cache`, **CP Classes (DSU, Trie, `__lt__` for priority queues)**, and TLE traps.
- **In-Browser Python Execution (WebAssembly)**:
  - Powered by **Pyodide (Python 3.11 in WASM)**.
  - Run, modify, and experiment with any code snippet directly inside the browser with zero installation!
- **Interactive Python Scratchpad / Playground**:
  - Dockable drawer for testing custom logic, edge cases, and problem templates in real-time.
- **Cheatsheet Mode**:
  - 1-click toggle to collapse into an ultra-dense, multi-column reference view.
- **Spot-the-Bug & CP Knowledge Challenge**:
  - Interactive quiz testing tricky Python edge cases and gotchas.
- **Instant Search (`Ctrl + K`)**:
  - Jump directly to any function, keyword, or algorithm in milliseconds.
- **Sleek Cyber-Dark Theme**:
  - Designed with obsidian dark mode, glassmorphic cards, and JetBrains Mono typography.

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/AXIOM-JYOTHESH/Python_fast_track.git
cd Python_fast_track
```

### 2. Run Locally
Because this project is built with vanilla HTML5, CSS, and modern JavaScript, you don't need any complex build tools or `npm install`.

Simply launch Python's built-in HTTP server:
```bash
python -m http.server 3000
```

Open your browser and navigate to:
```
http://localhost:3000
```

*(Alternatively, you can open `index.html` directly in any modern browser!)*

---

## 📂 Project Structure

```
├── index.html        # Semantic application shell, SEO meta tags, WASM loader
├── styles.css        # Cyber-dark design system, responsive layout, animations
├── data.js           # 19 curated learning modules, runnable snippets, tips & quiz
├── app.js            # Controller: search, track switching, Pyodide WASM runner, quiz
└── README.md         # Project documentation
```

---

## 📚 Curriculum Breakdown

### Track 1: Python for Beginners
1. **B1. Variables, Data Types & Print Formatting**: Dynamic typing, primitive types, runtime checks (`type()`), and modern f-strings (`{score:.2f}`).
2. **B2. Operators, Math & User Input**: Arithmetic, logical operators (`and`, `or`, `not`), type casting, and console input reading.
3. **B3. Conditionals & Control Flow**: `if`, `elif`, `else`, truthy & falsy values, and one-line ternary expressions.
4. **B4. Loops: For, While & range()**: `range(start, stop, step)`, `enumerate()`, `while`, `break`, `continue`, and loop `else`.
5. **B5. Core Collections**: Lists, immutable tuples, hash-map dictionaries, and unique sets with O(1) lookups.
6. **B6. Functions, Lambdas & Scope**: `def`, default arguments, tuple returns, `*args`, and `lambda` expressions.
7. **B7. Python Classes & OOP Fundamentals**: Blueprints vs Instances, `__init__`, `self`, instance methods, inheritance with `super()`, and magic methods (`__str__`, `__len__`, `__eq__`).
8. **B8. Error Handling & Safe File Operations**: `try...except...else...finally` and the `with` context manager.

### Track 2: Competitive Programming
1. **Fast I/O & Template**: `sys.stdin.readline`, bulk token reading, `sys.setrecursionlimit(300_000)`.
2. **Math & Bit Hacks**: `pow(b, e, mod)` in O(log exp), `isqrt`, bitwise single-cycle tricks (`x.bit_count()`, `x & (-x)` LSB).
3. **Strings & ASCII**: `ord()` / `chr()` frequency tables, `s[::-1]`, avoiding O(N²) string building.
4. **Lists, 2D Grids & Multi-Key Sorting**: Fixing the `[[0]*C]*R` shallow copy reference bug, multi-key lambda sorting `(-x[0], x[1])`, 2D grid transpositions.
5. **Sets & Hash Maps**: `Counter` with `most_common()`, `defaultdict(list)` for graph adjacency lists.
6. **Queues & Heaps**: O(1) BFS `popleft()`, Min-Heap / Max-Heap tricks, `heapify()` in O(N).
7. **Binary Search**: `bisect_left` (C++ `lower_bound`) and `bisect_right` (C++ `upper_bound`).
8. **Itertools**: `permutations`, `combinations`, and O(N) prefix sums with `accumulate`.
9. **Top-Down DP**: `@functools.cache` for instant memoization.
10. **Python Classes for CP**: Custom priority queues via `__lt__`, `@dataclass(order=True)`, Disjoint Set Union (DSU / Union-Find), and Trie (Prefix Tree).
11. **CP Pitfalls & TLE Traps**: Negative floor division `-3 // 2 == -2`, mutable default arguments `def f(x=[])`, and `list.pop(0)` TLE.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
