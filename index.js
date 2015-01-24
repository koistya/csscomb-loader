/*
 * CSScomb Loader for Webpack
 * Copyright (c) 2015 Konstantin Tarkus <hello@tarkus.me>
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var CssComb = require('csscomb');
var loaderUtils = require('loader-utils');

var csscomb = new CssComb();
var config = CssComb.getConfig('csscomb');

csscomb.configure(config);

module.exports = function(source) {

  if (this.cacheable) {
    this.cacheable();
  }

  var file = loaderUtils.getRemainingRequest(this);

  // TODO: Read the params and configure CSScomb
  // var params = loaderUtils.parseQuery(this.query);

  var syntax = file.split('.').pop();
  var processed = csscomb.processString(source, { syntax: syntax });

  this.callback(null, processed);
};
