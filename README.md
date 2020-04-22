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
    ```shell
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


