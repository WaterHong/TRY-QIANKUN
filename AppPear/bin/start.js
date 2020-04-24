const shelljs = require("shelljs");

shelljs.exec(
    `webpack-dev-server --config ./webpack.config.js --hot --mode development`
);