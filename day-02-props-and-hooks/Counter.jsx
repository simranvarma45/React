import { useEffect, useState } from "react";
import { Button } from "./Button";

export function MyCounter() {
    const [count, setCount] = useState(0);
    // Learning note: `warning` is stored in state to practice `useEffect`.
   // Normally, this should be a derived value from `count`.
    const [warning, setWarning] = useState("");

    useEffect(() => {
        document.title = `Count : ${count}`;
        setWarning((count === 10 ? "you've reached the limit" : (count === 8) ? "you are too close to the limit" : ""))
    }, [count]);
    function increment() {
        setCount(prev => prev + 1);
    }
    function decrement() {
        setCount(prev => (prev > 0 ? prev - 1 : 0));
    }
    function reset() {
        setCount(0);
    }
    function addFive() {
        setCount(prev => (prev <= 5 ? prev + 5 : prev));
    }


    return (
        <div style={{ display: "flex",flexDirection:"column", gap: "20px" }}>
            {warning && <p style={{color:"red"}}>{warning}</p>}
            <h2>Count : {count}</h2>
            <Button label="+1" onClick={increment} disabled={count === 10} />
            <Button label="-1" onClick={decrement} disabled={count === 0} />
            <Button label="Reset" onClick={reset} disabled={count === 0} />
            <Button label="+5" onClick={addFive} disabled={count > 5} />
        </div>

    );
}