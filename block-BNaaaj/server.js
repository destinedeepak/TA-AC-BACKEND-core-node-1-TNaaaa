var url = require('url');

const urlString = 'https://airindia.com/fares/calculate?from=delhi&to=detroit';
let parsedUrl = url.parse(urlString,true );

console.log(
    parsedUrl.query,
    parsedUrl.pathname,
    parsedUrl.protocol,
    );
