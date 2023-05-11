const { Router } = require("express")

Router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
})

module.exports = {
    Router
}
