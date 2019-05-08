var express = require('express');
var cors = require('cors');
var app = express();
var moment = require('moment');
const path = require('path')

app.use(cors());

var bodyParser = require('body-parser');
var mysql = require('mysql');

 // connection configurations
 var dbConn = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: '',
     database: 'nba201819'
 });
 // connect to database
 dbConn.connect(); 


 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
     extended: true
 }));
 // default route
 app.get('/', function (req, res) {
    res.sendFile('index.html', {
        root: path.join(__dirname, './')
    })
 });
 // set port
 app.listen(3005, function () {
     console.log('Node app is running on port 3005');
 });

 app.get('/teams', function (req, res) {
     dbConn.query('SELECT * FROM teams', function (error, results) {
         if (error) throw error;
         return res.send(results);
     });
 });

 app.get('/players', function (req, res) {
     dbConn.query('SELECT * FROM players', function (error, results) {
         if (error) throw error;
         return res.send(results);
     });
 });

 app.get('/playerstats', function (req, res) {
    dbConn.query('SELECT * FROM playerstats', function (error, results) {
        if (error) throw error;
        return res.send(results);
    });
});

app.get('/playerstats/:id', function (req, res) {
    dbConn.query('SELECT * FROM playerstats WHERE ID=" '+ req.params.id + '"', function (error, results) {
        if (error) throw error;
        return res.send( results);
        console.log(req.params.id)
    });
});

app.get('/teamstats', function (req, res) {
    dbConn.query('SELECT * FROM teamstats ', function (error, results) {
        if (error) throw error;
        return res.send( results);
        console.log(req.params.id)
    });
});

app.get('/livegames', function (req, res) {
    var date = new Date()
    var newDate = date.toISOString().slice(0,10)

    var localTime = moment().format('YYYY-MM-DD');
    console.log(localTime)
    dbConn.query('SELECT * FROM games WHERE  DATE2019=" '+ localTime + ' " ', function (error, results) {
        if (error) throw error;
        return res.send( results);
    });
});


 module.exports = app;

