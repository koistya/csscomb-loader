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

## Reference Articles

 * [Sorting CSS properties, the better way](http://www.smashingmagazine.com/2012/10/02/csscomb-tool-sort-css-properties/) by Vyacheslav Oliyanchuk
 * [Reduce file size with CSS Sorting](http://peteschuster.com/2014/12/reduce-file-size-css-sorting/) by Pete Schuster

## License

[MIT](./LICENSE.txt) (c) Konstantin Tarkus ([@koistya](https://twitter.com/koistya))
