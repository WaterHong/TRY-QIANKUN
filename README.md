## qiankun 调研 (https://qiankun.umijs.org/) 

### 🤔 working on it

```shell
$ npm install
$ npm run main:start
$ cd AppApple
$ npm run start
$ cd ../AppPear
$ npm run start
```

### 4.21
今天初步试了一下Qiankun，参照快速上手 （ https://qiankun.umijs.org/zh/guide/getting-started.html ）大致可以跑起来，过程中主要遇到了两个问题:

- 跨域
  
    解决方法： webpack中设置可跨域
    ```javascript
    devServer: {
        publicPath: "/",
        port: 8881,
        hot: true,
        disableHostCheck: true,
        headers:{
            'Access-Control-Allow-Origin': '*' //重要！！
        }
    }
    ```

- Uncaught Error: application 'AppApple' died in status SKIP_BECAUSE_BROKEN: Target container is not a DOM element.


### 4.24

- Uncaught Error: application 'AppApple' died in status SKIP_BECAUSE_BROKEN: Target container is not a DOM element.
 
    解决办法： 

    ```javascript
    //error，不能直接挂在这个节点上
    render(
        <div>
            Hi, apple
        </div>,
        document.getElementById("apple-container")
    );

    //success，要用生命周期中mount传入的container下找到指定的DOM节点
    export async function mount(props) {
        console.log('[AppApple] props from main framework', props);
        const { container } = props;
        render(
            <div>
                Hi, apple
            </div>,
            container ? container.querySelector('#apple-container') : document.querySelector('#apple-container')
        );
    }
    ```

- 子路由刷新后 cannot GET /apple
  