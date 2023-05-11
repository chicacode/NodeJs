const { Router } = require("express")

Router.get('/read', (req, res) => {
    res.sendFile(__dirname + '/views/read-notes.html');
})

module.exports = {
    Router
}
