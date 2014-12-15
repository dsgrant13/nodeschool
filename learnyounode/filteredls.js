//filteredls.js
//Prints out the files of a specified directory that match a specified extension

var fs = require('fs')
var path = require('path')

var directory = process.argv[2]
var extension = '.' + process.argv[3]

fs.readdir(directory, function filterExt(err, files) {
    filtered = files.filter(function extMatches(file) {
	return path.extname(file) === extension
	})
    for (var i = 0; i < filtered.length; i++) {
	console.log(filtered[i])
    }
})

