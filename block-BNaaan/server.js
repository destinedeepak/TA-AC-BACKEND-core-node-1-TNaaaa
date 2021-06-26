let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res){
    console.log('method: ' + req.method,' url: ' + req.url)
    console.log(req.headers)
    res.end('Welcome!')
}

server.listen(3000, ()=>{
    console.log('Server is listening at 3000')
})