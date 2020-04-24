import * as React from "react";
import { render } from "react-dom";
//import { createBrowserHistory } from "history";
//import "./Router.js"

//const history = createBrowserHistory();

render(
    <div>
        <header>wx-uni</header>
        <a onClick={()=>{
            //history.push("/apple");
            history.pushState(null, "/apple", "/apple");
        }}>apple</a>
        <br />
        <a onClick={()=>{
            //history.push("/pear");
            history.pushState(null, "/pear", "/pear");
        }}>pear</a>

        <section id="apps-container"></section>
    </div>,
    document.getElementById("main-container")
);
