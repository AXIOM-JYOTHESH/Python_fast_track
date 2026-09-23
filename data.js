// Python Fast-Track Dataset: Beginner Fundamentals & Competitive Programming
const PYTHON_MODULES = [
  // =========================================================================
  // TRACK 1: PYTHON FOR BEGINNERS (Quick Walkthrough & Fundamentals)
  // =========================================================================
  {
    id: "beg-1",
    track: "beginner",
    trackName: "Python for Beginners",
    title: "B1. Variables, Data Types & Print Formatting",
    category: "beg-types",
    readTime: "2 min",
    summary: "Python is dynamically typed. Learn variables, the 5 core primitive types, and clean f-string formatting.",
    snippets: [
      {
        title: "Variables & Primitive Types",
        desc: "No variable declaration keywords needed (no let, var, or int). Python automatically infers data types.",
        code: `# Primitive Types
age = 21                  # int (integers of arbitrary size)
pi = 3.14159              # float (decimal floating point)
name = "Antigravity"       # str (unicode string)
is_active = True          # bool (True or False - Capitalized!)
result = None             # NoneType (represents absence of value, like null)

# Checking types at runtime:
print(type(age))          # <class 'int'>
print(type(name))         # <class 'str'>
print(f"Name: {name}, Active: {is_active}")`,
        runnable: true,
        tip: "Booleans in Python MUST be capitalized: True and False (not true / false)."
      },
      {
        title: "Modern String Formatting (f-strings)",
        desc: "Formatted string literals (f-strings) are the cleanest and fastest way to format text in Python 3.6+.",
        code: `score = 98.4567
username = "CodeMaster"

# 1. Basic embedding
print(f"Player: {username} | Score: {score}")

# 2. Rounding floats inside f-strings: {:.2f}
print(f"Rounded Score: {score:.2f}")

# 3. Expressions and padding inside {}:
print(f"Next Year Score: {score + 10}")
print(f"{username:>15} -> Right aligned with 15 spaces")
print(f"Binary representation of 42: {42:08b}")`,
        runnable: true,
        tip: "You can write any valid Python expression inside {expression} in an f-string."
      }
    ]
  },
  {
    id: "beg-2",
    track: "beginner",
    trackName: "Python for Beginners",
    title: "B2. Operators, Math & User Input",
    category: "beg-operators",
    readTime: "2 min",
    summary: "Arithmetic, comparison, logical operators, type casting, and reading console input.",
    snippets: [
      {
        title: "Arithmetic & Logic Operators",
        desc: "Python has both true division (/) and floor division (//). Exponentiation uses ** instead of ^.",
        code: `a = 15
b = 4

print("Addition (+):", a + b)           # 19
print("True Division (/):", a / b)      # 3.75 (always returns float)
print("Floor Division (//):", a // b)   # 3 (chops off fractional part)
print("Modulo (%):", a % b)             # 3 (remainder)
print("Power (**):", a ** 2)            # 225 (15^2)

# Logical Operators use plain English words: and, or, not
x, y = True, False
print("x and y:", x and y)              # False
print("x or y:", x or y)                # True
print("not x:", not x)                  # False`,
        runnable: true,
        tip: "^ is bitwise XOR in Python, NOT exponentiation! Use ** for power (e.g. 2**10)."
      },
      {
        title: "Console Input & Type Casting",
        desc: "input() ALWAYS returns a string. You must explicitly cast it to int() or float() for math.",
        code: `# Simulated input reading pattern
raw_text = "42"              # What input() returns
user_num = int(raw_text)     # Convert string to integer
user_float = float("3.14")   # Convert string to float

print("Casted int + 10:", user_num + 10)
print("Casted float * 2:", user_float * 2)

# Multiple values from one line:
line = "10 20 30"
x, y, z = map(int, line.split())
print(f"Unpacked variables: x={x}, y={y}, z={z}")`,
        runnable: true,
        tip: "Always wrap input() with int(input()) when expecting numbers."
      }
    ]
  },
  {
    id: "beg-3",
    track: "beginner",
    trackName: "Python for Beginners",
    title: "B3. Conditionals & Control Flow",
    category: "beg-conditionals",
    readTime: "2 min",
    summary: "Decision making with if, elif, else, truthy/falsy evaluation, and one-line ternary operators.",
    snippets: [
      {
        title: "if / elif / else & Truthy Values",
        desc: "Indentation defines blocks (typically 4 spaces). Zero, empty collections, and None evaluate to False.",
        code: `score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print("Assigned Grade:", grade)

# Truthy / Falsy in Python:
# Falsy: 0, 0.0, "", [], {}, set(), None, False
# Truthy: Everything else!
items = []
if not items:
    print("List is empty! (No need to write len(items) == 0)")`,
        runnable: true,
        tip: "Prefer 'if not my_list:' over 'if len(my_list) == 0:'. It is cleaner and more idiomatic Python."
      },
      {
        title: "Ternary Conditional (Inline If-Else)",
        desc: "Evaluate expressions conditionally in a single readable line: value_if_true if condition else value_if_false.",
        code: `age = 20
status = "Adult" if age >= 18 else "Minor"
print("User status:", status)

# Chained comparisons work naturally in Python!
x = 15
if 10 <= x <= 20:
    print("x is comfortably between 10 and 20!")`,
        runnable: true,
        tip: "Python allows mathematical range comparisons like '10 <= x <= 20' without needing 'x >= 10 and x <= 20'."
      }
    ]
  },
  {
    id: "beg-4",
    track: "beginner",
    trackName: "Python for Beginners",
    title: "B4. Loops: For, While & range()",
    category: "beg-loops",
    readTime: "2 min",
    summary: "Iterating with range(), while loops, break, continue, and the unique for-else construct.",
    snippets: [
      {
        title: "for Loop with range() & Iterables",
        desc: "range(start, stop, step) generates numbers on the fly without storing them in memory. stop is exclusive.",
        code: `# range(stop) -> 0, 1, 2, 3, 4
print("range(5):", list(range(5)))

# range(start, stop, step)
print("Even numbers from 2 to 10:", list(range(2, 11, 2)))
print("Countdown:", list(range(5, 0, -1)))

# Iterating over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print("Fruit:", fruit)

# Iterating with index using enumerate():
for idx, fruit in enumerate(fruits, start=1):
    print(f"#{idx}: {fruit}")`,
        runnable: true,
        tip: "Always use enumerate(iterable) instead of 'for i in range(len(arr)):' when you need both index and item."
      },
      {
        title: "while Loops & break / continue / else",
        desc: "while loops execute while a condition is True. The 'else' block executes only if the loop finished without a 'break'.",
        code: `count = 0
while count < 3:
    print(f"Count is {count}")
    count += 1

# Search pattern using for...else
target = 7
numbers = [1, 3, 5, 7, 9]

for n in numbers:
    if n == target:
        print(f"Found target: {target}!")
        break
else:
    print("Target was not found in the list.")`,
        runnable: true,
        tip: "The loop 'else' block is great for search loops: it runs only if NO 'break' occurred."
      }
    ]
  },
  {
    id: "beg-5",
    track: "beginner",
    trackName: "Python for Beginners",
    title: "B5. Core Collections (Lists, Tuples, Dictionaries, Sets)",
    category: "beg-collections",
    readTime: "3 min",
    summary: "The 4 essential built-in data structures every Python programmer uses daily.",
    snippets: [
      {
        title: "Lists & Tuples (Sequences)",
        desc: "Lists are mutable (changeable). Tuples are immutable (read-only, hashable, faster).",
        code: `# 1. LISTS (Mutable)
nums = [10, 20, 30]
nums.append(40)          # Add to end: [10, 20, 30, 40]
nums.insert(1, 15)       # Insert at index 1: [10, 15, 20, 30, 40]
popped = nums.pop()      # Remove and return last element (40)
print("List after operations:", nums)
print("Length:", len(nums))

# 2. TUPLES (Immutable)
point = (4, 9)
# point[0] = 5  <- ERROR! Tuples cannot be modified.

# Tuple unpacking:
x, y = point
print(f"Unpacked Coordinates: x={x}, y={y}")`,
        runnable: true,
        tip: "Use tuples for fixed collections of values (like coordinates (x, y) or graph edges (u, v, weight))."
      },
      {
        title: "Dictionaries & Sets (Hash Maps & Unique Sets)",
        desc: "Dictionaries store key-value pairs in O(1). Sets store unique values and eliminate duplicates instantly.",
        code: `# 1. DICTIONARIES (Key-Value)
user = {"name": "Alice", "role": "Admin", "level": 5}
print("Access by key:", user["name"])

# Safe access with .get() (avoids KeyError):
print("Points:", user.get("points", 0)) # Default 0 if key not found

# Iterating keys and values:
for key, val in user.items():
    print(f"{key} -> {val}")

# 2. SETS (Unique unordered values)
tags = {"python", "coding", "python", "algorithms"}
print("Unique set:", tags) # {"python", "coding", "algorithms"}
tags.add("beginners")
print("Is 'python' in tags?:", "python" in tags) # O(1) instant lookup!`,
        runnable: true,
        tip: "Checking 'x in set' is O(1) average time, while 'x in list' is O(N) linear time."
      }
    ]
  },
  {
    id: "beg-6",
    track: "beginner",
    trackName: "Python for Beginners",
    title: "B6. Functions, Lambdas & Scope",
    category: "beg-functions",
    readTime: "2 min",
    summary: "Writing clean, reusable code with def, default arguments, *args, **kwargs, and lambda functions.",
    snippets: [
      {
        title: "Defining Functions & Default Arguments",
        desc: "Functions are defined with def. You can return multiple values simultaneously (returned as a tuple).",
        code: `def calculate_stats(numbers):
    total = sum(numbers)
    count = len(numbers)
    avg = total / count if count > 0 else 0
    return total, avg # Returns a tuple (total, avg)

t, a = calculate_stats([10, 20, 30, 40])
print(f"Total: {t}, Average: {a}")

# Function with default parameters:
def greet(name, prefix="Hello"):
    return f"{prefix}, {name}!"

print(greet("Bob"))
print(greet("Charlie", prefix="Welcome"))`,
        runnable: true,
        tip: "Default arguments are evaluated once at definition time. Never use mutable defaults like def f(lst=[])."
      },
      {
        title: "*args, **kwargs & One-Line Lambdas",
        desc: "*args accepts arbitrary positional arguments. **kwargs accepts arbitrary keyword arguments. lambdas are anonymous single-expression functions.",
        code: `# *args gathers extra arguments into a tuple
def multiply_all(*args):
    result = 1
    for num in args:
        result *= num
    return result

print("Product of 2, 3, 4, 5:", multiply_all(2, 3, 4, 5))

# One-liner Lambda Functions
square = lambda x: x * x
print("Square of 6:", square(6))

# Lambda in sorting:
pairs = [(1, 'one'), (3, 'three'), (2, 'two')]
pairs.sort(key=lambda item: item[0])
print("Sorted pairs:", pairs)`,
        runnable: true,
        tip: "Use lambdas primarily for quick sort keys or short transformations."
      }
    ]
  },
  {
    id: "beg-7",
    track: "beginner",
    trackName: "Python for Beginners",
    title: "B7. Python Classes & OOP Fundamentals",
    category: "beg-classes",
    readTime: "4 min",
    summary: "The full beginner walkthrough of Object-Oriented Programming: classes, objects, __init__, self, methods, and inheritance.",
    snippets: [
      {
        title: "Class Basics: __init__ and self",
        desc: "A Class is a blueprint. An Object is an instance of that blueprint. __init__ is the constructor, and self refers to the current instance.",
        code: `class Hero:
    # Class attribute (shared by all instances)
    universe = "Fantasy Realm"

    # Constructor: initializes instance attributes
    def __init__(self, name, hp, attack_power):
        self.name = name                 # Instance attribute
        self.hp = hp                     # Instance attribute
        self.attack_power = attack_power

    # Instance method
    def attack(self, target_name):
        return f"{self.name} strikes {target_name} for {self.attack_power} damage!"

    # String representation (readable print)
    def __str__(self):
        return f"Hero(Name={self.name}, HP={self.hp}, Power={self.attack_power})"

# Creating objects (instances):
hero1 = Hero("Astra", 100, 25)
hero2 = Hero("Kael", 80, 40)

print(hero1)
print(hero1.attack("Dragon"))
print(f"Shared universe: {hero1.universe}")`,
        runnable: true,
        tip: "Every instance method in a Python class must take 'self' as its first parameter."
      },
      {
        title: "Class Inheritance & super()",
        desc: "Inheritance lets a child class acquire attributes and methods from a parent class, avoiding duplicate code.",
        code: `class Vehicle:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def get_info(self):
        return f"{self.brand} {self.model}"

# Subclass (Child) inheriting from Vehicle (Parent)
class ElectricCar(Vehicle):
    def __init__(self, brand, model, battery_kwh):
        # Call parent's constructor using super()
        super().__init__(brand, model)
        self.battery_kwh = battery_kwh

    # Overriding or extending method
    def get_info(self):
        parent_info = super().get_info()
        return f"{parent_info} (Battery: {self.battery_kwh} kWh)"

tesla = ElectricCar("Tesla", "Model 3", 75)
print(tesla.get_info())
print("Is electric car an instance of Vehicle?:", isinstance(tesla, Vehicle))`,
        runnable: true,
        tip: "super().__init__(...) delegates initialization to the parent class, ensuring base attributes are set properly."
      },
      {
        title: "Magic (Dunder) Methods Explained",
        desc: "Methods with double underscores (__str__, __len__, __eq__) let your custom classes integrate with Python's built-in syntax.",
        code: `class Inventory:
    def __init__(self, owner):
        self.owner = owner
        self.items = []

    def add_item(self, item):
        self.items.append(item)

    # Enables len(inventory_obj)
    def __len__(self):
        return len(self.items)

    # Enables obj1 == obj2
    def __eq__(self, other):
        return isinstance(other, Inventory) and self.items == other.items

inv1 = Inventory("Alex")
inv1.add_item("Health Potion")
inv1.add_item("Iron Sword")

print(f"Items in inventory: {len(inv1)}") # calls __len__!
print("Is empty?:", len(inv1) == 0)`,
        runnable: true,
        tip: "Implementing __len__ and __eq__ allows your objects to feel like native Python collections."
      }
    ]
  },
  {
    id: "beg-8",
    track: "beginner",
    trackName: "Python for Beginners",
    title: "B8. Error Handling & Safe File Operations",
    category: "beg-errors",
    readTime: "2 min",
    summary: "Catching exceptions with try-except-finally, and using with statements for automatic cleanup.",
    snippets: [
      {
        title: "try / except / else / finally",
        desc: "Gracefully recover from runtime errors like ZeroDivisionError, ValueError, or KeyError without crashing.",
        code: `def safe_divide(a, b):
    try:
        res = a / b
    except ZeroDivisionError:
        print("Caught division by zero!")
        return None
    except TypeError as err:
        print(f"Type error occurred: {err}")
        return None
    else:
        # Runs ONLY if no exception occurred in try block
        print("Division successful!")
        return res
    finally:
        # ALWAYS runs, no matter what
        print("-- Clean up finished --")

print("Result 1:", safe_divide(10, 2))
print("Result 2:", safe_divide(10, 0))`,
        runnable: true,
        tip: "Always catch specific exceptions (e.g. ValueError) rather than a bare 'except:' which can hide bugs."
      },
      {
        title: "The 'with' Statement (Context Managers)",
        desc: "The 'with' statement ensures resources (files, locks, connections) are automatically closed even if an exception occurs.",
        code: `# Writing and reading demonstration
# 'with open(...)' automatically handles closing the file
sample_text = "Python beginner speedrun complete!"

# Simulated file context manager pattern:
class DummyContext:
    def __enter__(self):
        print("[Context] Resource opened safely")
        return self
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("[Context] Resource automatically closed")

with DummyContext():
    print("Executing operations inside safe block")`,
        runnable: true,
        tip: "In real file I/O, always use 'with open('file.txt', 'r') as f:' to prevent memory leaks and file lock issues."
      }
    ]
  },

  // =========================================================================
  // TRACK 2: PYTHON FOR COMPETITIVE PROGRAMMING (High-Performance & Algorithms)
  // =========================================================================
  {
    id: "cp-1",
    track: "cp",
    trackName: "Competitive Programming",
    title: "1. Fast I/O & CP Template",
    category: "io",
    readTime: "2 min",
    summary: "Essential boilerplate to avoid Time Limit Exceeded (TLE) on input-heavy problems (Codeforces, LeetCode, AtCoder).",
    snippets: [
      {
        title: "Lightning-Fast Input Reading",
        desc: "sys.stdin.readline is 4-10x faster than input(). strip() removes trailing newline.",
        code: `import sys

# Fast line reader
input = sys.stdin.readline

# Read single values
n = int(input())
s = input().strip()

# Read multiple integers on one line: e.g. "3 5 12" -> [3, 5, 12]
a, b, c = map(int, input().split())
arr = list(map(int, input().split()))

# Print for demonstration
print(f"n={n}, s='{s}', a={a}, arr={arr}")`,
        runnable: true,
        mockInput: "5\nhello\n10 20 30\n1 2 3 4 5",
        tip: "In Codeforces, if there are 10^5 integers, always use sys.stdin.read().split() to read all tokens at once in O(1) bulk."
      },
      {
        title: "Bulk Token Reading (Ultimate Fast I/O)",
        desc: "Read the entire input stream into memory at once. The fastest way possible in Python.",
        code: `import sys

def solve():
    # Read all tokens at once (space/newline separated)
    data = sys.stdin.read().split()
    if not data:
        return
    
    # Iterator over tokens
    it = iter(data)
    t = int(next(it))  # number of testcases
    
    for _ in range(t):
        n = int(next(it))
        arr = [int(next(it)) for _ in range(n)]
        print(f"Testcase sum: {sum(arr)}")

# Simulating with demo string:
print("Bulk reading pattern ready for 10^6 tokens.")`,
        runnable: true,
        tip: "This prevents repeated syscalls and will pass strict 1.0s time limits in Python."
      },
      {
        title: "Increase Recursion Limit & Fast Output",
        desc: "Default recursion limit in Python is only 1,000! Depth-First Search (DFS) on trees will crash without this.",
        code: `import sys

# Increase recursion depth for deep DFS (default is 1000)
sys.setrecursionlimit(300_000)

# Fast output for printing 10^5 lines
# sys.stdout.write is faster than repeated print()
# Or collect results and '\\n'.join(results)
results = [str(i * 2) for i in range(5)]
sys.stdout.write('\\n'.join(results) + '\\n')`,
        runnable: true,
        tip: "Never forget sys.setrecursionlimit(300_000) before any recursive DFS, or you will get a mysterious Runtime Error."
      }
    ]
  },
  {
    id: "cp-2",
    track: "cp",
    trackName: "Competitive Programming",
    title: "2. Math & Bit Manipulation Hacks",
    category: "math",
    readTime: "3 min",
    summary: "Arbitrary precision integers, O(log N) modular exponentiation, GCD, and O(1) bitwise operations.",
    snippets: [
      {
        title: "Modulo Power & Math Built-ins",
        desc: "Python natively supports arbitrarily large integers. pow(base, exp, mod) is built-in and computes modular exponentiation in O(log exp).",
        code: `import math

# Modular exponentiation: (base ** exp) % MOD in O(log exp)
MOD = 10**9 + 7
ans = pow(2, 100, MOD)
print("2^100 % (10^9 + 7) =", ans)

# Modular inverse (Fermat's Little Theorem): pow(a, MOD - 2, MOD)
inv = pow(3, MOD - 2, MOD)
print("(1/3) mod MOD =", inv)

# Built-in math utilities
print("GCD(24, 36):", math.gcd(24, 36))
print("LCM(12, 15):", math.lcm(12, 15))
print("Integer Square Root:", math.isqrt(27)) # 5 (exact floor, no float error)
print("Combinations nCr(5, 2):", math.comb(5, 2)) # 10`,
        runnable: true,
        tip: "Always use math.isqrt(n) instead of int(n**0.5) to avoid IEEE-754 precision loss on numbers >= 2^53."
      },
      {
        title: "Bit Manipulation Speedrun",
        desc: "Bitwise operators run in single CPU cycles: AND (&), OR (|), XOR (^), NOT (~), Left Shift (<<), Right Shift (>>).",
        code: `x = 42 # Binary: 101010

# 1. Count set bits (popcount) - Python 3.10+
print("Number of 1-bits in 42:", x.bit_count()) # 3

# 2. Check if k-th bit is set (0-indexed)
k = 3
is_set = (x >> k) & 1
print(f"Is {k}-th bit set?:", bool(is_set))

# 3. Set, clear, and toggle k-th bit
set_bit   = x | (1 << 1)     # Turn ON bit 1
clear_bit = x & ~(1 << 3)    # Turn OFF bit 3
flip_bit  = x ^ (1 << 0)     # TOGGLE bit 0

# 4. Lowest set bit (LSB) trick (used in Fenwick Tree / BIT)
lsb = x & (-x)
print("Lowest set bit of 42:", lsb, f"({bin(lsb)})")

# 5. Check if power of 2
is_power_of_2 = (x > 0) and (x & (x - 1)) == 0
print("Is 42 power of 2?:", is_power_of_2)
print("Is 64 power of 2?:", (64 & 63) == 0)`,
        runnable: true,
        tip: "x & (-x) isolates the lowest set bit. x & (x - 1) removes the lowest set bit."
      }
    ]
  },
  {
    id: "cp-3",
    track: "cp",
    trackName: "Competitive Programming",
    title: "3. Strings & ASCII Tricks",
    category: "strings",
    readTime: "2 min",
    summary: "Slicing, ASCII arithmetic, avoiding the O(N^2) string builder trap, and frequent string operations.",
    snippets: [
      {
        title: "ASCII Math & Character Mapping",
        desc: "ord() turns character to ASCII int. chr() turns ASCII int to character. Extremely common for alphabet frequency tables.",
        code: `# 0-indexed alphabet integer (0 to 25)
char = 'g'
index = ord(char) - ord('a')
print(f"'{char}' index in alphabet:", index)

# Convert integer back to character
char_back = chr(ord('a') + index)
print("Back to character:", char_back)

# Frequency table for 26 lowercase English letters:
freq = [0] * 26
for c in "competitiveprogramming":
    freq[ord(c) - ord('a')] += 1
print("Frequency of 'p':", freq[ord('p') - ord('a')])`,
        runnable: true,
        tip: "Using a fixed-size list [0]*26 with ord(c) - ord('a') is significantly faster than dict for alphabet counts in tight loops."
      },
      {
        title: "String Slicing & The Joining Rule",
        desc: "Strings in Python are immutable! Never do s += char in a loop (O(N^2) TLE). Always append to a list and ''.join() at the end (O(N)).",
        code: `s = "codeforces"

# Slicing syntax: s[start:stop:step]
print("Reverse string:", s[::-1])
print("First 4 chars:", s[:4])
print("Last 3 chars:", s[-3:])
print("Every 2nd char:", s[::2])

# FAST string concatenation:
chars = []
for i in range(5):
    chars.append(chr(ord('a') + i))
result = "".join(chars) # O(N)
print("Joined string:", result)

# Useful checks
print("Is digit:", "12345".isdigit())
print("Count 'o':", s.count('o'))`,
        runnable: true,
        tip: "s[::-1] creates a reversed copy in C-speed. It works on lists too: arr[::-1]."
      }
    ]
  },
  {
    id: "cp-4",
    track: "cp",
    trackName: "Competitive Programming",
    title: "4. Lists, 2D Grids & Multi-Key Sorting",
    category: "arrays",
    readTime: "3 min",
    summary: "The infamous 2D grid allocation bug, lambda sorting with multiple criteria, and list comprehensions.",
    snippets: [
      {
        title: "2D Grid Initialization (Deadly Pitfall vs Correct)",
        desc: "Using [[0] * C] * R duplicates the same row pointer R times! Modifying one cell modifies every row! Always use a list comprehension.",
        code: `R, C = 3, 4

# ❌ WRONG (Aliasing Bug! Modifying grid[0][0] alters ALL rows):
# bad_grid = [[0] * C] * R

# ✅ CORRECT: Independent row objects
grid = [[0] * C for _ in range(R)]

grid[0][0] = 99
print("Correct 2D Grid:")
for row in grid:
    print(row)`,
        runnable: true,
        tip: "Always remember: [[0] * cols for _ in range(rows)]."
      },
      {
        title: "Custom Multi-Key Sorting with Lambda",
        desc: "Python's Timsort is stable O(N log N). Use key=lambda to sort by multiple priorities (e.g. descending by score, then ascending by name).",
        code: `# List of contestants: (score, penalty, name)
contestants = [
    (100, 45, "Alice"),
    (200, 80, "Bob"),
    (200, 50, "Charlie"), # Same score as Bob, but lower penalty!
    (150, 60, "David")
]

# Sort rules:
# 1. Higher score first (-score)
# 2. Lower penalty first (+penalty)
# 3. Alphabetical name (+name)
contestants.sort(key=lambda x: (-x[0], x[1], x[2]))

print("Ranked Leaderboard:")
for rank, c in enumerate(contestants, 1):
    print(f"#{rank}: {c[2]} (Score: {c[0]}, Penalty: {c[1]})")`,
        runnable: true,
        tip: "In Python, negate numeric keys (-x[0]) for descending order. Strings cannot be negated, so rely on Timsort's stability or custom class __lt__."
      },
      {
        title: "List Comprehension & 2D Flattening",
        desc: "List comprehensions run in optimized C bytecode and are much faster than manual for-loops.",
        code: `nums = [1, 2, 3, 4, 5, 6, 7, 8]

# Filter & Map in one line:
evens_squared = [x**2 for x in nums if x % 2 == 0]
print("Evens squared:", evens_squared)

# Flatten a 2D matrix into 1D:
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [val for row in matrix for val in row]
print("Flattened:", flattened)

# Transpose matrix (swap rows and cols):
transposed = [list(col) for col in zip(*matrix)]
print("Transposed:")
for row in transposed:
    print(row)`,
        runnable: true,
        tip: "zip(*matrix) unzips rows into columns! Super useful for grid problems."
      }
    ]
  },
  {
    id: "cp-5",
    track: "cp",
    trackName: "Competitive Programming",
    title: "5. Sets, Hash Maps, Counter & defaultdict",
    category: "hash",
    readTime: "3 min",
    summary: "O(1) lookups, counting frequencies without boilerplate, and group-by patterns.",
    snippets: [
      {
        title: "collections.Counter (Frequency Map)",
        desc: "Counter tallies elements instantly. It behaves like a dictionary with default value 0 and provides most_common().",
        code: `from collections import Counter

words = ["apple", "banana", "apple", "orange", "banana", "apple"]
counts = Counter(words)

print("Count of 'apple':", counts["apple"])
print("Count of missing 'grape':", counts["grape"]) # 0, no KeyError!

# Get top K frequent elements:
print("Top 2 most common:", counts.most_common(2))

# Counter arithmetic:
c1 = Counter(a=3, b=1)
c2 = Counter(a=1, b=2)
print("c1 + c2:", c1 + c2)
print("c1 - c2:", c1 - c2) # only positive counts kept`,
        runnable: true,
        tip: "Counter(nums) solves LeetCode 'Top K Frequent Elements' in 2 lines."
      },
      {
        title: "collections.defaultdict (Adjacency Lists & Groups)",
        desc: "Avoid KeyError and tedious 'if key not in d: d[key] = []'. Perfect for graph adjacency lists.",
        code: `from collections import defaultdict

# 1. Graph representation (Adjacency List)
adj = defaultdict(list)
edges = [(1, 2), (1, 3), (2, 4), (3, 4)]
for u, v in edges:
    adj[u].append(v)
    adj[v].append(u) # undirected

print("Neighbors of node 1:", adj[1])
print("Neighbors of unused node 99:", adj[99]) # empty list [] automatically!

# 2. Grouping anagrams or elements
groups = defaultdict(list)
for word in ["eat", "tea", "tan", "ate", "nat", "bat"]:
    key = "".join(sorted(word))
    groups[key].append(word)

print("Anagram groups:", list(groups.values()))`,
        runnable: true,
        tip: "defaultdict(int) initializes missing keys to 0. defaultdict(set) initializes to set()."
      },
      {
        title: "Set Operations in CP",
        desc: "Hash sets provide O(1) average lookup, insertion, and deletion. Built-in set operators compute intersections and unions.",
        code: `setA = {1, 2, 3, 4, 5}
setB = {4, 5, 6, 7, 8}

# Set operators
print("Intersection (AND):", setA & setB) # {4, 5}
print("Union (OR):", setA | setB)         # {1, 2, 3, 4, 5, 6, 7, 8}
print("Difference (A - B):", setA - setB) # {1, 2, 3}
print("Symmetric Diff (XOR):", setA ^ setB) # in A or B, but not both

# Safe removal without KeyError:
setA.discard(999) # Won't crash if 999 not present! (remove() would raise KeyError)`,
        runnable: true,
        tip: "Always use .discard(x) instead of .remove(x) if you aren't 100% sure the item exists."
      }
    ]
  },
  {
    id: "cp-6",
    track: "cp",
    trackName: "Competitive Programming",
    title: "6. Queues & Heaps (deque & heapq)",
    category: "queues",
    readTime: "3 min",
    summary: "O(1) double-ended queue for BFS, and priority queues (min-heap & max-heap tricks).",
    snippets: [
      {
        title: "collections.deque for BFS (O(1) Popleft)",
        desc: "NEVER use list.pop(0) for a queue! list.pop(0) is O(N) and causes TLE. deque.popleft() is O(1).",
        code: `from collections import deque

# BFS Queue pattern
q = deque([1])
q.append(2)     # Push right O(1)
q.append(3)
q.appendleft(0) # Push left O(1)

print("Deque state:", q)
first = q.popleft() # Pop left O(1) - essential for BFS
last = q.pop()      # Pop right O(1)
print(f"Popped first: {first}, Popped last: {last}")
print("Remaining:", q)

# Sliding window / fixed size queue
fixed_q = deque(maxlen=3)
for i in range(5):
    fixed_q.append(i)
print("Maxlen=3 queue automatically drops oldest:", list(fixed_q))`,
        runnable: true,
        tip: "In BFS with levels, use 'for _ in range(len(q)):' to process one entire depth level at a time."
      },
      {
        title: "heapq: Min-Heap & Max-Heap",
        desc: "Python's heapq is a min-heap by default. Push and pop in O(log N). To simulate a max-heap, negate values.",
        code: `import heapq

# 1. Min-Heap
min_heap = []
for val in [5, 1, 8, 3, 2]:
    heapq.heappush(min_heap, val)

print("Smallest element (peek):", min_heap[0])
print("Popping elements in ascending order:")
while min_heap:
    print(heapq.heappop(min_heap), end=" ")
print()

# 2. Turn existing list into heap in O(N) linear time:
nums = [9, 4, 7, 1, 3]
heapq.heapify(nums) # O(N) in-place
print("Heapified:", nums)

# 3. Max-Heap Trick: Store negative values
max_heap = []
for val in [10, 50, 20, 40]:
    heapq.heappush(max_heap, -val)

largest = -heapq.heappop(max_heap)
print("Popped largest from max-heap:", largest) # 50`,
        runnable: true,
        tip: "heapq.heappushpop(heap, item) pushes then pops in a single efficient O(log N) step."
      }
    ]
  },
  {
    id: "cp-7",
    track: "cp",
    trackName: "Competitive Programming",
    title: "7. Binary Search (bisect)",
    category: "search",
    readTime: "2 min",
    summary: "Lower bound, upper bound, and insertion position in O(log N) without writing boilerplate.",
    snippets: [
      {
        title: "bisect_left & bisect_right (Lower & Upper Bound)",
        desc: "Works on sorted lists. bisect_left returns first index where val could be inserted (>= val). bisect_right returns index after last occurrence (> val).",
        code: `import bisect

# Sorted list
arr = [10, 20, 20, 20, 30, 40]

# bisect_left: Equivalent to C++ lower_bound (first index >= x)
idx_left = bisect.bisect_left(arr, 20)
print("bisect_left for 20:", idx_left) # Index 1

# bisect_right: Equivalent to C++ upper_bound (first index > x)
idx_right = bisect.bisect_right(arr, 20)
print("bisect_right for 20:", idx_right) # Index 4

# Count occurrences of x in sorted array in O(log N):
count_20 = bisect.bisect_right(arr, 20) - bisect.bisect_left(arr, 20)
print("Occurrences of 20:", count_20) # 4 - 1 = 3

# Check if element exists in sorted array in O(log N):
def binary_search_exists(sorted_arr, target):
    idx = bisect.bisect_left(sorted_arr, target)
    return idx < len(sorted_arr) and sorted_arr[idx] == target

print("Does 30 exist?:", binary_search_exists(arr, 30))
print("Does 25 exist?:", binary_search_exists(arr, 25))`,
        runnable: true,
        tip: "In Python 3.10+, bisect_left(arr, x, key=lambda item: item[0]) allows binary searching on lists of tuples or objects!"
      }
    ]
  },
  {
    id: "cp-8",
    track: "cp",
    trackName: "Competitive Programming",
    title: "8. Itertools & Functional Combinatorics",
    category: "itertools",
    readTime: "2 min",
    summary: "Generating permutations, combinations, cartesian products, and prefix sums with zero loops.",
    snippets: [
      {
        title: "Combinatorics & Prefix Sums",
        desc: "itertools handles permutations, combinations, and cumulative prefix sums at C-level speed.",
        code: `import itertools

items = ['A', 'B', 'C']

# 1. Permutations: all ordered arrangements
perms = list(itertools.permutations(items, 2))
print("Permutations of 2:", perms)

# 2. Combinations: unordered subsets
combs = list(itertools.combinations(items, 2))
print("Combinations of 2:", combs)

# 3. Cartesian Product (nested loop replacement):
# Equivalent to: for x in [0, 1]: for y in ['a', 'b']
product = list(itertools.product([0, 1], ['a', 'b']))
print("Product:", product)

# 4. Prefix Sums in 1 line:
arr = [3, 1, 4, 1, 5, 9]
prefix = list(itertools.accumulate(arr)) # [3, 4, 8, 9, 14, 23]
print("Original:", arr)
print("Prefix sums:", prefix)`,
        runnable: true,
        tip: "accumulate(arr, initial=0) includes the leading 0, making 1-indexed range sum queries prefix[R] - prefix[L-1] trivial."
      }
    ]
  },
  {
    id: "cp-9",
    track: "cp",
    trackName: "Competitive Programming",
    title: "9. DP & Top-Down Memoization (@cache)",
    category: "dp",
    readTime: "2 min",
    summary: "Turn exponential recursion into polynomial dynamic programming with a single decorator.",
    snippets: [
      {
        title: "Instant DP with functools.cache",
        desc: "@cache automatically memoizes all function arguments in a hash table. Converts O(2^N) Fibonacci or Knapsack into O(N).",
        code: `from functools import cache
import sys
sys.setrecursionlimit(2000)

@cache
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

print("Fibonacci(50):", fib(50))

# Classic 0/1 Knapsack top-down:
weights = [2, 3, 4, 5]
values = [3, 4, 5, 6]
W = 8

@cache
def knapsack(idx, remaining_weight):
    if idx == len(weights) or remaining_weight <= 0:
        return 0
    # Option 1: Skip item
    ans = knapsack(idx + 1, remaining_weight)
    # Option 2: Take item (if fits)
    if weights[idx] <= remaining_weight:
        ans = max(ans, values[idx] + knapsack(idx + 1, remaining_weight - weights[idx]))
    return ans

print("Max Knapsack value:", knapsack(0, W))`,
        runnable: true,
        tip: "In Python 3.9+, @cache is preferred over @lru_cache(maxsize=None) as it has lower overhead."
      }
    ]
  },
  {
    id: "cp-10",
    track: "cp",
    trackName: "Competitive Programming",
    title: "10. Python Classes & OOP for Competitive Programming",
    category: "classes",
    readTime: "4 min",
    summary: "Mastering classes specifically for CP: custom __lt__ for priority queues, dataclasses, Union-Find (DSU), and Trie.",
    snippets: [
      {
        title: "Custom Priority Queue Order via __lt__",
        desc: "By implementing __lt__ (less than), you can define exact sorting and heap behavior for complex objects.",
        code: `import heapq

class Task:
    def __init__(self, priority, timestamp, name):
        self.priority = priority
        self.timestamp = timestamp
        self.name = name

    def __lt__(self, other):
        # Rule: Higher priority first (-). If equal, earlier timestamp first (+).
        if self.priority != other.priority:
            return self.priority > other.priority  # Higher priority considered 'smaller' for min-heap
        return self.timestamp < other.timestamp

    def __repr__(self):
        return f"Task('{self.name}', prio={self.priority}, time={self.timestamp})"

# Put into heapq
tasks = [
    Task(1, 10, "Backup"),
    Task(3, 5,  "Serve Request A"),
    Task(3, 2,  "Serve Request B"), # Same priority 3, but earlier timestamp 2!
]
heapq.heapify(tasks)

print("Tasks executed in prioritized order:")
while tasks:
    print(heapq.heappop(tasks))`,
        runnable: true,
        tip: "Defining __lt__ is the cleanest way to insert complex multi-attribute states into Dijkstra or A* priority queues."
      },
      {
        title: "@dataclass(order=True) - Fast OOP Boilerplate",
        desc: "Available in standard library dataclasses. Eliminates __init__ boilerplate and auto-generates comparison methods.",
        code: `from dataclasses import dataclass, field
import heapq

@dataclass(order=True)
class Item:
    # order=True compares attributes in order of definition: priority, then name
    priority: int
    name: str = field(compare=False) # Exclude name from comparison

heap = []
heapq.heappush(heap, Item(2, "Medium Task"))
heapq.heappush(heap, Item(1, "Critical Bug"))
heapq.heappush(heap, Item(3, "Documentation"))

print("Popping dataclass items:")
while heap:
    print(heapq.heappop(heap))`,
        runnable: true,
        tip: "field(compare=False) is crucial if your item contains non-comparable values (like dictionaries or graph nodes)."
      },
      {
        title: "Union-Find (Disjoint Set Union - DSU) Class",
        desc: "The standard CP class for Kruskal's MST, cycle detection, and dynamic connectivity in O(α(N)) near-constant time.",
        code: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.size = [1] * n
        self.num_components = n

    def find(self, i):
        # Path compression
        if self.parent[i] == i:
            return i
        self.parent[i] = self.find(self.parent[i])
        return self.parent[i]

    def union(self, i, j):
        root_i = self.find(i)
        root_j = self.find(j)
        if root_i == root_j:
            return False # Already in same set (Cycle detected!)
        
        # Union by size
        if self.size[root_i] < self.size[root_j]:
            root_i, root_j = root_j, root_i
        self.parent[root_j] = root_i
        self.size[root_i] += self.size[root_j]
        self.num_components -= 1
        return True

# Test DSU: 5 nodes (0 to 4)
dsu = DSU(5)
dsu.union(0, 1)
dsu.union(1, 2)
print("Are 0 and 2 connected?:", dsu.find(0) == dsu.find(2)) # True
print("Are 0 and 3 connected?:", dsu.find(0) == dsu.find(3)) # False
print("Components count:", dsu.num_components) # 3`,
        runnable: true,
        tip: "Memorize this DSU template. It appears in graph problems constantly."
      },
      {
        title: "Trie (Prefix Tree) Class",
        desc: "Efficient string prefix storage and search in O(L) where L is word length.",
        code: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        curr = self.root
        for char in word:
            if char not in curr.children:
                curr.children[char] = TrieNode()
            curr = curr.children[char]
        curr.is_end_of_word = True

    def search(self, word: str) -> bool:
        curr = self.root
        for char in word:
            if char not in curr.children:
                return False
            curr = curr.children[char]
        return curr.is_end_of_word

    def starts_with(self, prefix: str) -> bool:
        curr = self.root
        for char in prefix:
            if char not in curr.children:
                return False
            curr = curr.children[char]
        return True

trie = Trie()
for w in ["apple", "app", "application"]:
    trie.insert(w)

print("Search 'app':", trie.search("app"))       # True
print("Search 'appl':", trie.search("appl"))     # False
print("Starts with 'app':", trie.starts_with("app")) # True`,
        runnable: true,
        tip: "For Bitwise XOR maximum queries, use a Binary Trie with 0 and 1 branches!"
      }
    ]
  },
  {
    id: "cp-11",
    track: "cp",
    trackName: "Competitive Programming",
    title: "11. CP Pitfalls & TLE Traps Hall of Fame",
    category: "pitfalls",
    readTime: "3 min",
    summary: "The top bugs that cause Time Limit Exceeded (TLE) or Wrong Answer (WA) in competitive programming with Python.",
    snippets: [
      {
        title: "Trap 1: Negative Floor Division //",
        desc: "In Python, -3 // 2 evaluates to -2 (flooring towards negative infinity), whereas C++/Java round towards zero (-1).",
        code: `# Floor division rounds DOWN towards -infinity:
print("-3 // 2 =", -3 // 2)      # -2 in Python!

# To get C++/Java style truncation towards zero:
def int_div(a, b):
    return int(a / b)

print("Truncation towards zero int(-3 / 2):", int_div(-3, 2)) # -1`,
        runnable: true,
        tip: "Be careful with binary search mid calculation when negative numbers are involved: use (low + high) // 2 vs int((low + high) / 2)."
      },
      {
        title: "Trap 2: list.pop(0) vs collections.deque",
        desc: "Popping from the front of a Python list shifts all N elements in memory (O(N)). Doing this N times is O(N^2) = TLE.",
        code: `import time
from collections import deque

# Demo on small scale:
arr = list(range(10000))
dq = deque(range(10000))

# list.pop(0): O(N) per pop
t0 = time.perf_counter()
for _ in range(5000):
    arr.pop(0)
t_list = time.perf_counter() - t0

# deque.popleft(): O(1) per pop
t0 = time.perf_counter()
for _ in range(5000):
    dq.popleft()
t_deque = time.perf_counter() - t0

print(f"5,000 list.pop(0) took:    {t_list*1000:.2f} ms")
print(f"5,000 deque.popleft() took: {t_deque*1000:.2f} ms")
print(f"deque was ~{int(t_list / max(t_deque, 1e-9))}x faster!")`,
        runnable: true,
        tip: "Rule of thumb: If you ever need FIFO queue operations, ALWAYS import deque."
      },
      {
        title: "Trap 3: Mutable Default Arguments",
        desc: "Default arguments are evaluated ONCE at function definition time, NOT at each call! Reusing them shares state across test cases.",
        code: `# ❌ WRONG: Shared list persists across calls!
def append_wrong(x, acc=[]):
    acc.append(x)
    return acc

print("Call 1:", append_wrong(1)) # [1]
print("Call 2:", append_wrong(2)) # [1, 2] <- UNEXPECTED BUG!

# ✅ CORRECT: Default to None
def append_correct(x, acc=None):
    if acc is None:
        acc = []
    acc.append(x)
    return acc

print("Correct 1:", append_correct(1)) # [1]
print("Correct 2:", append_correct(2)) # [2]`,
        runnable: true,
        tip: "Always use acc=None for mutable parameters in recursive or helper functions."
      }
    ]
  }
];

const QUIZ_QUESTIONS = [
  {
    track: "beginner",
    question: "In Python, which parameter is required as the first argument for all standard instance methods inside a class?",
    options: [
      "this",
      "self",
      "cls",
      "instance"
    ],
    answer: 1,
    explanation: "Python explicitly passes the instance reference to instance methods as the first parameter, conventionally named `self`."
  },
  {
    track: "beginner",
    question: "What is the key difference between a Python List and a Python Tuple?",
    options: [
      "Tuples can only store numbers",
      "Lists are immutable, whereas Tuples are mutable",
      "Lists are mutable, whereas Tuples are immutable",
      "Tuples cannot be indexed"
    ],
    answer: 2,
    explanation: "Lists can be modified after creation (`mutable`), whereas Tuples cannot be changed once defined (`immutable`)."
  },
  {
    track: "cp",
    question: "What is the time complexity of `list.pop(0)` in Python?",
    options: [
      "O(1)",
      "O(log N)",
      "O(N)",
      "O(N log N)"
    ],
    answer: 2,
    explanation: "`list.pop(0)` requires shifting all remaining N-1 elements to the left by one position, making it O(N). Use `collections.deque.popleft()` for O(1)."
  },
  {
    track: "cp",
    question: "What will `grid = [[0] * 3] * 3; grid[0][0] = 5; print(grid[1][0])` output?",
    options: [
      "0",
      "5",
      "IndexError",
      "None"
    ],
    answer: 1,
    explanation: "`* 3` replicates the outer list reference. All rows point to the exact same list object in memory, so altering row 0 alters every row! Correct way: `[[0] * 3 for _ in range(3)]`."
  },
  {
    track: "cp",
    question: "How does Python compute `-7 // 2`?",
    options: [
      "-3",
      "-4",
      "-3.5",
      "Throws ArithmeticError"
    ],
    answer: 1,
    explanation: "Python's `//` operator performs floor division (rounding down towards negative infinity). Since -3.5 rounds down, the result is `-4`. In C++/Java it truncates towards zero (-3)."
  },
  {
    track: "cp",
    question: "Which function from the `bisect` module is equivalent to C++'s `std::lower_bound`?",
    options: [
      "bisect.bisect_right",
      "bisect.insort",
      "bisect.bisect_left",
      "bisect.lower"
    ],
    answer: 2,
    explanation: "`bisect_left(arr, x)` returns the first index where element is `>= x`, which is identical to `std::lower_bound` in C++."
  },
  {
    track: "cp",
    question: "Which dunder method should you implement in a custom class to control its ordering in `heapq` and `sort()`?",
    options: [
      "__cmp__(self, other)",
      "__lt__(self, other)",
      "__eq__(self, other)",
      "__hash__(self)"
    ],
    answer: 1,
    explanation: "Python 3 uses `__lt__` (less-than) for heap comparisons (`heapq`) and list sorting (`sort()`)."
  }
];
