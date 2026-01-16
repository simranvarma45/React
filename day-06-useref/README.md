# Day 6 – useRef & Previous Value Detection

## Goal of Day 6

Understand **when NOT to use state**, how to interact with **DOM elements safely**, and how `useRef` helps store values **without triggering re-renders**.

This day focuses on clearing a very common confusion:

>  Not everything belongs in state

---

## 🔹 What is `useRef`?

`useRef` is a React hook that provides a **mutable container** whose value persists across renders **without causing re-renders**.

```js
const ref = useRef(initialValue);
```

Key properties:

* `ref.current` can be read & updated
* Updating it does **not** re-render the component
* Perfect for storing:

  * DOM references
  * Previous values
  * Timers / intervals
  * Non-UI data

---

## 🔹 useState vs useRef (Mental Model)

| useState         | useRef                  |
| ---------------- | ----------------------- |
| Causes re-render | Does NOT re-render      |
| Used for UI      | Used for memory         |
| Tracked by React | Ignored by render cycle |

👉 Rule of thumb:

* **UI changes → useState**
* **Memory / DOM / previous values → useRef**

---

## 🔹 Example 1: Focusing an Input (DOM access)

DOM elements are **uncontrolled** and exist outside React’s state system.


  Correct usage of `useRef`
  No unnecessary state

---

### Controlled Input (React controls value)

```jsx
const [value, setValue] = useState("");
<input value={value} onChange={(e) => setValue(e.target.value)} />
```

### Uncontrolled Input (DOM controls value)

```jsx
const inputRef = useRef();
<input ref={inputRef} />
```

 Use controlled inputs when UI must react to changes
 Use uncontrolled inputs when you just need the value once (submit, focus, etc.)

---

 
```

### Why does `prevCountRef` hold the OLD value?

Render flow:

1. Component renders with new `count`
2. JSX is painted
3. `useEffect` runs **after render**
4. Ref is updated for **next render**

That’s why it always stores the previous value.

---

## When NOT to use `useRef`

* For UI rendering
* For values shown on screen
* For derived values

If changing it should update UI → **state is required**

---

##  Key Learnings

* `useRef` ≠ state
* DOM elements should not be stored in state
* Previous values are a ref problem, not a state problem
* React render cycle understanding matters more than syntax

---

##  Takeaway

> If it affects UI → state
> If it affects logic or memory → ref

Day 6 done 
