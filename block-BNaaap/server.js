let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res){
    console.log(req.method)
    res.statusCode = 201;
    res.setHeader('Content-Type','text/html')
    res.end('Welcome!')
}

server.listen(3000, ()=>{
    console.log('Server is listening at 3000')
})