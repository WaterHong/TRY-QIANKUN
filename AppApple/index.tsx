import * as React from "react";
import ReactDOM, { render } from "react-dom";
import './public-path';

function RenderApple(props) {
    const { container } = props;
    render(
        <div>
            Hi, apple
        </div>,
        container ? container.querySelector('#apple-container') : document.querySelector('#apple-container')
    )
};

if (!window.__POWERED_BY_QIANKUN__) {
    console.log("koko");
    RenderApple({});
}

export async function bootstrap() {
    console.log('[react16] react app bootstraped');
}

export async function mount(props) {
    console.log('[AppApple] props from main framework', props);
    RenderApple(props);
}

export async function unmount() {
    console.log('[AppApple] unmount from main framework');
    ReactDOM.unmountComponentAtNode(document.getElementById('apple-container'));
}

export async function update(props) {
    console.log('update props', props);
}
