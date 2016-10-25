var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg').pool;

var config = {
    user: 'rajkumbhar',
    database: 'rajkumbhar',
    host: 'db-imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
}

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('/test-db',function (req, res){
    // make a select request 
    // create a responce with the result
    pool.query('select * from resume', function (err, result)
    {
        if (err)
        {
            res.status(500).send(err.toString());
        }
        else
        {
            res.send(JSON.stringify(result));
        }
    });
});

app.get('/ui/index.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/cover.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'cover.jpg'));
});

app.get('/ui/logo.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'logo.png'));
});

app.get('/ui/adidas.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'adidas.png'));
});

app.get('/ui/apple.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'apple.png'));
});

app.get('/ui/amazon.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'amazon.png'));
});

app.get('/ui/p&g.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'p&g.png'));
});

app.get('/ui/paypal.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'paypal.png'));
});

app.get('/ui/r1.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'r1.png'));
});

app.get('/ui/3d.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '3d.png'));
});

app.get('/ui/1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '1.jpg'));
});

app.get('/ui/2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '2.jpg'));
});

app.get('/ui/3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '3.jpg'));
});

app.get('/ui/4.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '4.jpg'));
});

app.get('/ui/5.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '5.jpg'));
});

app.get('/login/login.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'login', 'login.html'));
});

app.get('/login/login.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'login', 'login.css'));
});

app.get('/login/loginbg1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'login', 'loginbg1.jpg'));
});

app.get('/login/logo.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'login', 'logo.png'));
});

app.get('/signup/signup.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'signup', 'signup.css'));
});

app.get('/signup/signup.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'signup', 'signup.html'));
});

app.get('/signup/signup.php', function (req, res) {
  res.sendFile(path.join(__dirname, 'signup', 'signup.php'));
});

app.get('/signup/loginbg.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'signup', 'loginbg.jpg'));
});

app.get('/signup/logo.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'signup', 'logo.png'));
});

app.get('/ui/soon.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'soon.html'));
});

app.get('/ui/twitter.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'twitter.png'));
});

app.get('/ui/facebook.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'facebook.png'));
});

app.get('/ui/linkedin.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'linkedin.png'));
});

app.get('/ui/googleplus.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'googleplus.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});



















