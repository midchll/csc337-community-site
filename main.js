var express = require('express');
const path = require('path');
const session = require('express-session');
const { connectDB } = require('./src/db/mongo');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// putting all static files in public/
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'take-it-to-the-grave',
    resave: false,
    saveUninitialized: false
}));

// Connecting to db instance, server only starts listening if mongo connects
async function startServer() {
    await connectDB();
    app.listen(8080, function() {
        console.log('Server running on http://localhost:8080');
    });
}

// Get details of logged in user
app.get("/session", (req, res) => {
    if (req.session.user) {
        res.json( req.session );
    } else {
        res.status(401).json({});
    }
})

//Pages
app.get('/', (req, res) => {
    // Setting the root to login, existing sessions redirect to communities
    if (req.session.user) return res.redirect('/communitiespage');
    else return res.redirect('/login');
    //res.sendFile(__dirname + '/public/pages/login.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/pages/login.html');
})

app.get('/communitiespage', (req, res) => {
    res.sendFile(__dirname + '/public/pages/communities.html');
});



//Routes
app.use('/communities', require('./src/routes/communities'));
app.use('/auth', require('./src/routes/auth'));

startServer();