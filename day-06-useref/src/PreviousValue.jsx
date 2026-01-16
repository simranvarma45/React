import {useState,useEffect,useRef} from "react";
export function PreviousValue(){
    const [count,setCount]=useState(0);
    const prevCountRef = useRef(null);

    useEffect(()=>{
        prevCountRef.current = count;
    },[count]);

    return(
        <>
        <p>Current : {count}</p>
        <p>Previous : {prevCountRef.current}</p>
        <button onClick={()=>{setCount(prev=>prev+1)}}>Increment</button>
       
        </>
    );
    
}