const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const app = express();
const PORT = 4000;
// cookie parser middleware
app.use(cookieParser());
// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//serving public file

// Creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;
//session middleware
app.use(sessions({
    secret: 'this-is-my-super-mega-secret-blabla',
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}))



const myusername = "user1";
const mypassword = "password";
// a variable to save a session
var session;

app.use(express.static(__dirname + '/views'))
// console.log(__dirname)


//Add Routes
app.get('/', (req, res) =>{
    session = req?.session;
    if(session.userid){
        res.send("Welcome User <a href=\'/logout'>click to logout</a>")
    }else{
        res.sendFile('/views/index.html',{root:__dirname})
    }
});

app.post('/user', (req, res) => {
    if(req.body.username == myusername && req.body.password == mypassword){
        console.log("entra en IF POST")
        session = req.session;
        session.userid = req.body.username;
        console.log(req.session);
        res.send(`Hey there, Welcome! <a href=\'/logout'>click to logout</a>`);
    }else{
        console.log("entra en ELSE")
        res.send("Invalid username or password, try again!")
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});


app.listen(PORT, () =>{
    console.log(`Server is runnng on PORT: ${PORT}`)
});



