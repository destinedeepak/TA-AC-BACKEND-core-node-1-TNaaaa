var http = require('http');
var fs = require('fs');
var url = require('url');

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req, res);
}

server.listen(5000, () => {
  console.log('Server is listening at 5000');
});

const server1 = http.createServer(handleRequest1);

function handleRequest1(req, res) {
  res.end(`My first server in NodeJS`);
}

server1.listen(5100, () => {
  console.log('Server is listening at 5100');
});

const server2 = http.createServer(handleRequest2);

function handleRequest2(req, res) {
  console.log(req.headers);
  res.end(req.headers['user-agent']);
}

server2.listen(5500, () => {
  console.log('Server is listening at 5500');
});

const server3 = http.createServer(handleRequest3);

function handleRequest3(req, res) {
  console.log(req.url, req.method);
  res.write(req.url);
  res.write(req.method);
  res.end();
}

server3.listen(5566, () => {
  console.log('Server is listening at 5566');
});

const server4 = http.createServer(handleRequest4);

function handleRequest4(req, res) {
  res.statusCode = 202;
  res.end();
}

server4.listen(3333, () => {
  console.log('Server is listening at 3333');
});

const server5 = http.createServer(handleRequest5);

function handleRequest5(req, res) {
  // res.setHeader('Content-type','text/html');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<h3>Welcome to altcampus</h3>`);
}

server5.listen(8000, () => {
  console.log('Server is listening at 8000');
});

const server6 = http.createServer(handleRequest6);

function handleRequest6(req, res) {
  console.log(req.method);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h2>posted for first time</h2>');
}

server6.listen(5050, () => {
  console.log('Server is listening at 5050');
});

const server7 = http.createServer(handleRequest7);

function handleRequest7(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.end('My name is Deepak');
  }
  if (req.method === 'GET' && req.url === '/about') {
    res.writeHead(205, { 'Content-type': 'text/html' });
    res.end('<h2>My name is Deepak</h2>');
  } else {
      res.statusCode = 404;
      res.end('Error 404')
  }
}

server7.listen(2345, () => {
  console.log('Server is listening at 2345');
});

const server8 = http.createServer(handleRequest8);

function handleRequest8(req, res) {
  if(req.method === 'GET'){
      res.setHeader('Content-Type','text/html');
      fs.createReadStream('./form.html').pipe(res);
  }
  if(req.method === 'POST'){
    res.setHeader('Content-Type','text/plain');
    res.end('Posted for the second time');
}
}

server8.listen(2346, () => {
  console.log('Server is listening at 2346');
});

const server9 = http.createServer(handleRequest9);

function handleRequest9(req, res) {
 const parsedUrl = url.parse(req.url);
 console.log(req.url);
 console.log(parsedUrl.pathname);
 
 res.end()
}

server9.listen(2347, () => {
  console.log('Server is listening at 2347');
});
