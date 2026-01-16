import { useRef } from "react";

export function FocusInput(){
    const inputRef = useRef(null);

    function handleFocus(){
        inputRef.current.focus(); // Putting the cursor inside this input now
    }

    return(
        <>
            <input ref={inputRef} />
            <button onFocus={handleFocus}>Focus Input</button>
        </>
    )
}