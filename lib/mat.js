/*!
 * node-cv
 * Diego Chavez Copyright(c) 2017 
 * @malamen88
 * MIT Licensed
 */


module.exports = Mat



Mat.RGBDMat = function (rows, cols) {

 	var rMat = new Mat(rows, cols, 4);
 	return rMat
 }

Mat.RGBMat = function (rows, cols) {

 	var rMat = new Mat(rows, cols, 3);
 	return rMat
 }

Mat.BWMat = function (rows, cols) {

 	var rMat = new Mat(rows, cols, 1);
 	return rMat
 }

Mat.prototype.at = function (row, col) {

 	return this['raw'][row][col]
 }

Mat.prototype.set = function (row, col, elem) {

	if(this.depth==elem.length){
		this['raw'][row][col] = elem
 		return true
	}else{
		return false
	}
 	
 }


 /* Private functions */

function Mat(rows, cols, depth) {

    this.rows = rows;
    this.cols = cols;
    this.depth = depth;
 	this.raw =  emptyMat(rows, cols, depth)

}

function emptyMat(rows, cols, depth){

 	var pixel = new Array(depth)
 	var col = new Array(cols)
 	for (var i = 0; i < cols; i++){
 		col[i] = pixel
 	}
 	var mat = new Array(rows)
 	for (var j = 0; j < rows; j++){
 		mat[j] = col
 	}
 	return mat

 }