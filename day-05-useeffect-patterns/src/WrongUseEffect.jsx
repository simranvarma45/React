import { useEffect,useState } from "react";
export function WrongUseEffect(){
    const [count,setCount] = useState(0);

    useEffect(()=>{
        setCount(prev=>prev+1);
    },[count]);

    return(
        <>
        <h2>Count : {count}</h2>
        </>
    )
}