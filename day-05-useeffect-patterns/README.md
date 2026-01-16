### What I learned
- useEffect runs AFTER render, not during render
- Updating a dependency inside useEffect can cause infinite loops
- useEffect is for side effects, not state derivation
- Derived values should be calculated during render
- State inside useEffect must have an external trigger or exit condition

---

# Day 5 – useEffect (Mental Model > Syntax)

Today was about understanding **when and why to use `useEffect`**, not just how to write it.

## Key Learnings

### 1. What `useEffect` really is
`useEffect` runs **after render** and is meant for **side effects** — things that React does not control.

Examples:
- Browser APIs (`document.title`)
- Timers (`setInterval`, `setTimeout`)
- Event listeners
- API calls
- Subscriptions

---

### 2. Wrong useEffect (Infinite Loop)
Updating a state inside an effect **that depends on the same state** causes an infinite render loop.

```js
useEffect(() => {
  setCount(count + 1);
}, [count]);
