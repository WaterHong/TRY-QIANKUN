import * as React from "react";
import ReactDOM, { render } from "react-dom";

render(
    <div>
        Hi, pear
    </div>,
    document.getElementById("pear-container")
);

export async function bootstrap() {
    console.log('[react16] react app bootstraped');
}

export async function mount(props) {
    console.log('[AppPear] props from main framework', props);
    render(props);
}

export async function unmount() {
    console.log('[AppPear] unmount from main framework');
    ReactDOM.unmountComponentAtNode(document.getElementById('pear-container'));
}