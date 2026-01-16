import { useEffect, useState } from "react";

export function CorrectUseEffect() {
  const [count, setCount] = useState(0);

  //  Side effect: syncing with external system (browser tab title)
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // Side effect: external timer
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    // cleanup
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
