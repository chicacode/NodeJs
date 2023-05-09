const handleRequest = (req, res) => {
    switch(req.url){
        case '/':
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.write(`
            <html>
            <head><title>Hello Node!</title></head>
                <body>
                <div>
                    <h1>Hello Node Geri</h1>
                    <a href="http://localhost:8000/read-message">Read Message</a>
                    <a href="http://localhost:8000/write-message">Write Message</a>
                </div>
                </body>
            </html>
        `)
            res.end();
            break;
        case '/read-message':

        break;

        case '/write-message':

        break;
            default:
                console.log('handle all other requests');
        
    }
}

module.exports = {
    handleRequest
};