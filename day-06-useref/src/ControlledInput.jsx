import { useState } from "react";
export function ControlledInput(){
    const [name,setName] = useState("");
    return (
        <>
        <h3>Controlled Input</h3>
        <input type="text" value={name}  onChange={(e)=>setName(e.target.value)}/>
        <p>Name : {name}</p>
        
        </>
    )
}