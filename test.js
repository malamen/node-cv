/*!
 * node-cv
 * Diego Chavez Copyright(c) 2017 
 * @malamen88
 * MIT Licensed
 */

 // Test file //

 var CV = require('./index')

 var a = CV.RGBMat(3,3)
 console.log(a.at(1,1))

 CV.open('lena.jpg', 1, function(img){
 	console.log(img);
 })
 
