/*!
 * node-cv
 * Diego Chavez Copyright(c) 2017 
 * @malamen88
 * MIT Licensed
 */

var mat = require('./mat')

var getPixels = require("get-pixels")

module.exports = IO

IO.open = function (source, depth, callback) {
	getPixels(source, function(err, pixels){
		if(err) {
		    console.log("Bad image path")
		    return
		}

		var cols = pixels.shape.slice()[0]
		var rows = pixels.shape.slice()[1]
		
		if(depth == 3)
			var rmat = mat.RGBMat(cols,rows)
		else if(depth == 1)
			var rmat = mat.BWMat(cols,rows)
		
		for(var i=0; i<cols; i++){
			for(var j=0; j<rows; j++){
				if(depth == 3){
					var scalar = [pixels.get(i,j,0),pixels.get(i,j,1),pixels.get(i,j,2)]
				}else if(depth == 1){
					var scalar = [(pixels.get(i,j,0)+pixels.get(i,j,1)+pixels.get(i,j,2))/3]
				}
				rmat.set(i,j,scalar)
			}
		}
		
		callback(rmat)	

	})
}

function IO(req) {
    return new IO(req)
}



