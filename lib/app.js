let fs = require('fs'),
    http = require('http'),
    path = require('path'),
    mime = require('mime'),
    cache ={};

function send404 (res){
    res.writeHead(404,{'Content-Type' : 'text/plain'});
    res.write('Error 404 :page not found');
    res.end();
}

function sendFile (res,filePath,fileContents){
    res.writeHead(200,{'Content-Type' : mime.getType(path.basename(filePath))});
    res.write(fileContents);
    res.end();

}
function serveStatic(response, cache, absPath) {
    if (cache[absPath]) {
        console.log(cache);
    sendFile(response, absPath, cache[absPath]);
    } else {
    fs.exists(absPath, function(exists) {
    if (exists) {
    fs.readFile(absPath, function(err, data) {
    if (err) {
    send404(response);
    } else {
    cache[absPath] = data;
    sendFile(response, absPath, data);
    }
    });
    } else {
    send404(response);
    }
    });
    }
    }



////////
//http server
/////////

var server = http.createServer(function(request, response) {
    var filePath = false;
    if (request.url == '/') {
    filePath = 'public/index.html';
    } else {
    filePath = 'public' + request.url;
    }
    var absPath = './' + filePath;
serveStatic(response, cache, absPath);
});

server.listen(3000,()=>{
    console.group("server listening at port 3000");
});

var chatServer = require('./lib/chatServer.js');
chatServer.listen(server);