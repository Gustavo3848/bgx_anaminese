const express = require('express');
const app = express();
const path = require('path')
const http = require('http');
const session = require('express-session');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const anamineseRoute = require('./routes/anaminese.js');
const authRoute = require('./routes/auth.js');

const auth = require('./config/auth');
const bcrypt = require("bcryptjs")
//Session
app.use(session({
    secret: "Obrigado Deus",
    cookie: { maxAge: 60000000 }
}))

app.use(function (req, res, next) {
    res.locals.user = req.session.user || undefined
    res.locals.id = req.session.userID || undefined
    next();
})
//Express Layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

//Public Static
app.use('/static',express.static('./public'));
app.use('/node_modules', express.static('node_modules'));
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.render("./login/login.ejs")
});

app.get('/login', (req, res) => {
    res.render("./login/login.ejs")
})
app.use('/login', authRoute)

app.use('/anaminese', auth, anamineseRoute);
app.use(auth)
const port = 3302;

var server = http.createServer(app);
server.listen(port);

