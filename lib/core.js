/*!
 * node-cv
 * Diego Chavez Copyright(c) 2017 
 * @malamen88
 * MIT Licensed
 */

var mat = require('./mat')

module.exports = Core

Core.filter2D = function (source, mask, callback) {

	if(mask[rows]!=mask[cols] || mask[depth]!=1 || source[depth]!=1 || mask[rows]%2 != 1){
		console.log("Error mask not supported yet")
		return false
	}else{
		var xCenter = (mask[rows]-1)/2
		var yCenter = (mask[cols]-1)/2
		for(var i=0; i<source[rows]; i++){
			for(var j=0; j<source[cols]; j++){
				for(var k=0; k<mask[rows]; k++){
					for(var l=0; l<mask[cols]; l++){
						/*
						var xSource = 
						if(xPointer+i)
						mask.at(k,l)
					*/
				}
				}
			}
		}
	}
}

function Core(req) {
    return new Core(req)
}
