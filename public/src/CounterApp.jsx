
import { useState } from "react";
import ProtoType from "prop-types";




export function CounterApp({value}) {
    
    const [counter,setCounter]=useState(value);

    const HandleAdd=()  =>  {
        setCounter((c) => c + 10)
    };
    const HandleLess=()  =>  {
        setCounter((c) => c - 10)
    };

    const HandleReset=()  =>  {
        setCounter((c) => value)
    };

return (
<>
    <h1>Counter App</h1>
    <h2>{counter}</h2>

    <center>
        <button onClick={HandleAdd}> +1</button>
        <button onClick={HandleLess}> -1</button>
        <button onClick={HandleReset}> Reset</button>
        </center>
    </>
);

}

CounterApp.protoType={

    value: ProtoType.number,
}

