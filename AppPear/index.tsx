import * as React from "react";
import ReactDOM, { render } from "react-dom";

function RenderPear(props) {
    const { container } = props;
    render(
        <div>
            Hi, pear
        </div>,
        container ? container.querySelector('#pear-container') : document.querySelector('#pear-container')
    )
};

export async function bootstrap() {
    console.log('[react16] react app bootstraped');
}

export async function mount(props) {
    console.log('[AppPear] props from main framework', props);
    RenderPear(props);
}

export async function unmount() {
    console.log('[AppPear] unmount from main framework');
    ReactDOM.unmountComponentAtNode(document.getElementById('pear-container'));
}