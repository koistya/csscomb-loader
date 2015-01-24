# CSScomb Loader for Webpack

> Format CSS coding style with [CSScomb](http://csscomb.com/) and [Webpack](http://webpack.github.io/).

*If you have any difficulties with the output of this plugin, please use the
[CSScomb tracker](https://github.com/csscomb/csscomb.js/issues).*

## How to Install

[![NPM](https://nodei.co/npm/csscomb-loader.png?compact=true)](https://www.npmjs.org/package/csscomb-loader)

```sh
npm install csscomb-loader --save-dev
```

## How to Use

**Option 1**: Via command line:

```shell
webpack ./src/app.js ./build/app.js --module-bind 'css=style!css!csscomb'
```

**Option 2**: Configuration file:

```js
module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        path: './build'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css!csscomb' }
        ]
    }
};
```

### License

[MIT](./LICENSE.txt) (c) Konstantin Tarkus ([@koistya](https://twitter.com/koistya))
