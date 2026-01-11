# Day 02 – React Hooks & Props

Today’s focus was understanding **how React thinks**, not just making things work.

## What I built
A counter app with reusable button components that:
- Updates the document title based on count
- Shows warning messages when nearing limits
- Uses props to control behavior and UI
- Enforces limits via disabled states

## Concepts covered

### 1. Props (Data Flow)
- Passed data and functions from parent to child components
- Learned that:
  - Props are passed as **key–value pairs**
  - Order does NOT matter, names DO
  - Child components receive props via destructuring
- Understood one-way data flow (parent → child)

### 2. useState
- Used state for values that change over time (`count`)
- Learned why normal variables don’t trigger re-renders
- Used functional updates (`prev => prev + 1`) to avoid stale values

### 3. useEffect
- Used `useEffect` for **side effects**, not rendering logic
- Implemented:
  - Updating `document.title` when count changes
  - Syncing warning messages with state changes

### 4. State vs Derived Values
- Learned the difference between:
  - **State** → data that must be remembered
  - **Derived values** → data that can be calculated from state
- Intentionally stored `warning` in state to practice `useEffect`
  (documented clearly in code comments)

### 5. UX & Clean Code
- Disabled buttons at logical boundaries
- Kept UI and logic separated
- Used reusable components instead of duplicating buttons

## Key takeaway
React is not about writing JSX —  
it’s about **thinking in state, effects, and data flow**.

Small components, but deeper clarity.

---

Next up: rendering from arrays, keys, and lifting state.
