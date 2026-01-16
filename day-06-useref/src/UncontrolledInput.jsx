import { useRef } from "react";
export function UncontrolledInput(){
    const inputRef = useRef(null);
    function handleSubmit(){
        console.log(inputRef.current.value);

    }
    return(
        <>
        <h3>Uncontrolled Input</h3>
        <input ref={inputRef} />
        <button onClick={handleSubmit}>Submit</button>
        
        </>
    )

}