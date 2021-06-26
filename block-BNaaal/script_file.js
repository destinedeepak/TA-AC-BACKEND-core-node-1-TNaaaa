var http = require('http');

var server = http.createServer(handleServer);

function handleServer(req, res){
    res.end('Welcome!')
}

server.listen(4000, ()=>{
    console.log('Server is listening on 4000');
})