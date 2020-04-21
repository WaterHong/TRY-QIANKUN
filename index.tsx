import * as React from "react";
import { render } from "react-dom";
import { createBrowserHistory } from "history";
import "./Router.js"

const history = createBrowserHistory();

render(
    <div>
        <header>wx-uni</header>
        <p onClick={()=>{
            history.push("/app1");
        }}>apple</p>
        <p onClick={()=>{
            history.push("/app2");
        }}>pear</p>

        <section id="apps-container"></section>
        <section id="apps2-container"></section>
    </div>,
    document.getElementById("main-container")
);
