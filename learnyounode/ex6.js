//ex6.js
//uses the lsmodule to filter a directory by extension

var lsmodule = require('./lsmodule')

lsmodule(process.argv[2], process.argv[3], function (err, data) {
    if (err) {
	console.log('There was a problem somehwere :/')
    }
    else {
	for (var i = 0; i < data.length; i++) {
	    console.log(data[i])
	}
    }
})
