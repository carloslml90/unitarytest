import React, { StrictMode } from "react";
import  ReactDOM  from "react-dom/client";

import Handsome from "./MyName";
import "./Styles.css"
import { Names } from "./HelloWorldApp";
import { CounterApp } from "./CounterApp";
    





ReactDOM.createRoot(document.getElementById('root')).render(

<React.StrictMode>

    <CounterApp value={1}/>

    </React.StrictMode>

)