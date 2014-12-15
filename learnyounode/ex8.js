//ex8.js
//perform an http GET request. Collect all data from the server, then print to stdout the number of characters and the complete String of characters sent

var http = require('http')

complete_str = ''

http.get(process.argv[2], function(response) {
    response.setEncoding('utf8')
    response.on("error", console.error)
    response.on("data", function(data) {
	complete_str += data
    })
    response.on("end", function() {
	console.log(complete_str.length)
	console.log(complete_str)
    })
})
	
