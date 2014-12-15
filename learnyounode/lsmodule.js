//lsmodule.js
//Modularized version of the filtered ls problem in nodeschool

var fs = require('fs')
var path = require('path')

function filterExt(dir, ext, callback) {
    ext = '.' + ext
    files = fs.readdir(dir, function(err, data) {
	if (err) {
	    return callback(err, data)
	}
	filtered = data.filter(function (file) {
	    return path.extname(file) === ext
	})
	return callback(null, filtered)
    })
}

module.exports = filterExt







