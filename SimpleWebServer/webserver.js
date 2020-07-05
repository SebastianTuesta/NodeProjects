// Importing library
var http = require('http');
var url = require("url");

// Global variables
var __serverport__ = 8000;

dynamic_pageloading = (request, response) => {
    var pathname = url.parse(request.url).pathname;

    response.writeHead(200,
        {"Content-Type": "text/html"}
    );

    response.write("<h1>First Server Side WebPage.</h1>");
    (pathname == "/" || pathname == "/home") 
        ? response.write(`<p>Welcome Home Page</p>`) 
        : response.write(`<p>This is ${pathname}</p>`);
    response.end();
}

var server = http.createServer(dynamic_pageloading).listen(__serverport__);