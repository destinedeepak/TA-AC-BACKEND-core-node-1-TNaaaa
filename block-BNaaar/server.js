var http = require('http');
var url = require('url');

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  let parsedUrl = url.parse(req.url);
  let pathName = parsedUrl.pathname;

  if (req.method === 'GET' && pathName === '/') {
    res.end('Welcome to homepage');
  } else if (req.method === 'GET' && pathName === '/about') {
    res.setHeader('Content-Type','text/html');
    res.write('<h2>this is all about NodeJS</h2>');
    res.end();
  }else if (req.method === 'POST' && pathName === '/about') {
    res.setHeader('Content-Type','application/json');
    res.write(`{message: 'this is a post request'}`);
    res.end();
  }
}

server.listen(5000, () => {
  console.log('Server is listening at 5k');
});
