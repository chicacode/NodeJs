const http = require('http');
const router  = require('./router');


const server = http.createServer(router.handleRequest)

server.listen(8000, () => {
    console.log("Server running in port 8000!")
})