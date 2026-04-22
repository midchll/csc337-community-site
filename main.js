var express = require('express');
const path = require('path');
const { connectDB } = require('./src/db/mongo');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// putting all static files in public/
app.use(express.static(path.join(__dirname, 'public')));

// Connecting to db instance, server only starts listening if mongo connects
async function startServer() {
    await connectDB();
    app.listen(8080, function() {
        console.log('Server running on http://localhost:8080');
    });
}

//Pages
// Temporarily setting communities.html to root since no auth yet
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/pages/communities.html');
});
/* ^^^
app.get('/communities-page', (req, res) => {
    res.sendFile(__dirname + '/public/pages/communities.html');
});
*/

//Routes
app.use('/communities', require('./src/routes/communities'));

startServer();