import * as React from "react";
import ReactDOM, { render } from "react-dom";

render(
    <div>
        Hi, apple
    </div>,
    document.getElementById("apple-container")
);

export async function bootstrap() {
    console.log('[react16] react app bootstraped');
}

export async function mount(props) {
    console.log('[AppApple] props from main framework', props);
    render(props);
}

export async function unmount() {
    console.log('[AppApple] unmount from main framework');
    ReactDOM.unmountComponentAtNode(document.getElementById('apple-container'));
}

export async function update(props) {
    console.log('update props', props);
}