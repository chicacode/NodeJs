const fs = require('fs');
const { parse } = require('querystring');

const handleRequest = (req, res) => {
    switch (req.url) {
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
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write('Read Message');
            res.end();
            break;
        case '/write-message':
            if (req.method === 'POST') {

                let body = [];
                console.log('Before on')
                req.on('data', chunk => {
                    console.log('chunk', chunk)
                    body.push(chunk)
                });

                req.on('end', () => {
                    const  parsedBody  = Buffer.concat(body).toString();
                    console.log('message', parsedBody)

                    const message = parsedBody.split("=")[1]

                    fs.writeFile('message.txt', message, error => {
                        if (error) {
                            res.writeHead(500, { 'Content-type': 'text/plain' })
                            res.write('Error writing File! Error server 500')
                            res.setHeader('Location', '/')
                            res.end()
                        } else {
                            res.writeHead(200, { 'Content-type': 'text/html' })
                            res.write(`
                                <h1>
                                Message written to File!
                                Thank you!
                                </h1>
                            `)
                            res.end()
                        }
                    })
                })
            } else {
                res.writeHead(200, { 'Content-type': 'text/html' })
                res.write(`
                        <html>
                             <head><title>Hello Node!</title></head>
                            <body>
                                <div>
                                   <h1>Welcome to Form. Post Request</h1>
                                   <form method='post'>
                                   <label>Please, enter a message</label></br>
                                   <input type="text" name="message placeholder="write a message"/></br></br>
                                   <input type="submit" value="Submit" style='border: 1px solid blue; border-radius: 8px' />
                                   </form>
                                </div>
                            </body>
                        </html>
                `)

                res.end();
            }

            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('Opp! Page Not Found. Error 404');
            res.end();
    }
}

module.exports = {
    handleRequest
};