
import { useState } from "react";
import PropTypes from "prop-types";




 export const CounterApp=({value}) =>{
    
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
    <h1>CounterApp</h1>
    <h2>{counter}</h2>

    <center>
        <button onClick={HandleAdd}> +1</button>
        <button onClick={HandleLess}> -1</button>
        <button onClick={HandleReset}> Reset</button>
        </center>
    </>
);

}

CounterApp.propTypes={

    value: PropTypes.number,
}

