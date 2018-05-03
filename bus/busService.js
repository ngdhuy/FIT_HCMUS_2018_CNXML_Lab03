var app = require('http')
var url = require('url')
var query = require('querystring')

var port = 3001

app.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    
}).listen(port, (err) => {
    if(err != null)
        console.log('==> Error: ' + err)
    else
        console.log('Server is starting at port ' + port)
})