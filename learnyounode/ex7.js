//ex7.js
//performs an http GET request with a url provided as a command line argument

var http = require('http')
var url = process.argv[2]

http.get(url, function(response) {
    response.on("error", function(err) {
	console.error(err)
    })
    response.on("data", function(data) {
	console.log(data.toString())
    })
})





