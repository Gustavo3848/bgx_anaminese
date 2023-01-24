const express = require('express');
const app = express();
const session = require('express-session');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const anamineseRoute = require('./routes/anaminese.js');
const auth = require('./config/auth');
//Session
app.use(session({
    secret: "Obrigado Deus",
    cookie: { maxAge: 60000000 }
}))

app.use(function (req, res, next) {
    res.locals.user = req.session.user || undefined
    next();
})
//Express Layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

//Public Static
app.use('/static', express.static('public'));
app.use('/node_modules', express.static('node_modules'));
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.render("./login/login.ejs")
});

app.get('/login', (req, res) => {
    res.render("./login/login.ejs")
})
app.post('/login/auth', (req, res) => {
    const username = req.body.user
    const password = req.body.password

})

app.use('/anaminese',anamineseRoute);
app.use(auth)
const port = 3000;

app.listen(port, function () {
    console.log("Servidor rodando...")
});

