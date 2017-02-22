/*!
 * node-cv
 * Diego Chavez Copyright(c) 2017 
 * @malamen88
 * MIT Licensed
 */

'use strict'

/**
 * Internal module dependencies.
 * @private
 */

var _mat = require('./lib/mat')
var _io = require('./lib/io')
var _core = require('./lib/core')


/**
 * Module exports.
 * @public
 */

module.exports = CV

// libmat //
CV.RGBMat = _mat.RGBMat
CV.RGBDMat = _mat.RGBDMat
CV.BWMat = _mat.BWMat
CV.at = _mat.at
CV.set = _mat.set

// libio //
CV.open = _io.open

// libcore //

CV.filter2D = _core.filter2D




function CV(req) {
    return new CV(req)
}

