# Day 3 – React Lists, Keys & Todo Basics

Today was focused on understanding how React renders lists and how improper handling of data can lead to subtle UI bugs.

Along with concepts, I built a basic **Todo app** to apply everything practically.

---

## 🧠 What I Learned

### 1️⃣ Rendering Lists in React
- React can directly render arrays of JSX.
- `.map()` is the idiomatic and declarative way to render lists.

❌ `forEach` doesn’t work because it returns nothing  
❌ `for` loops are possible but not idiomatic in React  
✅ `map` returns a new array of JSX elements

---

### 2️⃣ Keys in React
- Keys help React identify **which element changed, added, or removed**
- They allow React to update the UI efficiently

❌ Using index as key can cause:
- Incorrect re-renders
- UI mismatches
- Unpredictable behavior when items are added/removed

✅ Always use a **stable, unique id** as key

---

### 3️⃣ Immutability & Array Updates
- Mutating arrays (`push`, `splice`) changes the original reference
- This breaks React’s reconciliation logic

✅ Correct patterns:
- **Add item:** `setTodos(prev => [...prev, newTodo])`
- **Delete item:** `setTodos(prev => prev.filter(todo => todo.id !== id))`

---

### 4️⃣ Todo App (Hands-on Practice)
Implemented:
- Adding todos
- Rendering todos using `.map()`
- Deleting todos using `.filter()`
- Proper key usage

The logic is implemented and working.
Some edge-case clarity will be refined next revision — intentionally focusing on understanding over speed.

---

## 🔑 Key Takeaway
Most React UI issues come from:
- Mutating state
- Wrong key usage
- Treating derived values as state

Fixing these fundamentals early prevents complex bugs later.

---

Day 3 complete. Fundamentals > shortcuts.
