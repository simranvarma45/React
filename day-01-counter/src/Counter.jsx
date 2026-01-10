import { useState } from "react";

export function MyCounter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(prev => prev + 1);
    }

    function decrement() {
        setCount(prev => (prev > 0 ? prev - 1 : 0));
    }
    function twice() {
        setCount(prev => (prev <= 8 ? prev + 2 : prev));
        // setCount(count=>count+1);
        // setCount(count=>count+1);
    }
    function reset() {
        setCount(0);
    }


    return (
        <>
            <h2>Count : {count}</h2>
            <br />
            <div style={{ display: 'flex', gap: '15px' }}>
                <button onClick={increment}>
                    +1
                </button>
                <button onClick={decrement} disabled={count === 0}>
                    -1
                </button>
                <button onClick={twice} disabled={count >= 9}>
                    +2
                </button>
                <button onClick={reset}>
                    Reset
                </button>
            </div>
            {count === 10 && <p> Count reached 10</p>}

        </>

    )
}