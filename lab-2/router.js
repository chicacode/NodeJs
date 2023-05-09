const handleRequest = (req, res) => {
    switch(req.url){
        case '/':
            res.writeHead(200, { 'Content-type': 'text/plain' });
            res.write('Hello Geri Node')
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