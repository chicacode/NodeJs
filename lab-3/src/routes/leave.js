const { Router } = require("express")

Router.get('/leave', (req, res) => {
    res.sendFile(__dirname + '/views/leave-note.html');
})

module.exports = {
    Router
}
