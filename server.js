var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
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

app.get('/ui/us.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'us.png'));
});

app.get('/ui/paypal.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'paypal.png'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
