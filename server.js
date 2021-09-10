const express = require('express');
//const bodyParser = require('body-parser');
const ChatRoutes = require('./api/routes/ChatRoutes');
// cors = Cross-Origin Resource Sharing
const cors = require('cors')

//create new application
const app = express();

//specify a port and pass it via an environment variable, or predefine it
const port = process.env.PORT || 3000;

const session = require("express-session");

//routes get added-> we create our API route

app.use(cors());
app.use(express.urlencoded({extended: true}));
//middleware-> JSON wird in ein JS Objekt umgewandelt
app.use(express.json());
app.use('/api/v1/chats', ChatRoutes);

// Routen werden automatisch dazugef.

app.use(
    session({
        secret: "key",
        resave: true,
        saveUninitialized: true,})
);

app.get("/", (req, res) => {
    req.session.isAuth = true;
    console.log(req.session);
    res.send("Hello")
});



// Start Server listening on Port ${port}
// if we have an error we send an error message to our terminal
app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`Server listening at http://localhost:${port}`);
            }
});