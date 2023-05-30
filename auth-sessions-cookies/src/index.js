import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();
app.use(cookieParser());
const oneDay = 1000 * 60 * 60 * 24;

app.use(session({
    secret: 'this-is-my-super-mega-secret-blabla',
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}))



app.listen(8000, () =>{
    console.log("Port listenning in 8000")
});



