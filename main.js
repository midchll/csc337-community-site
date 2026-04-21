var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Pages
app.get('/communities-page', (req, res) => {
    res.sendFile(__dirname + '/public/pages/communities.html');
});

//Routes
app.use('/communities', require('./src/routes/communities'));


app.listen(8080, function() {
    console.log('Server running on http://localhost:8080');
});
