// ============== Always, associated with packages installed ===========//
var express = require('express');
var session = require('express-session');
var path = require('path');

// ============== Second, invokes the express app ===========//
var app = express();

// ============== use static files?? ===========//
app.use(express.static(__dirname + "/static"));

// ============== use style.css ===========//
app.use(express.static(path.join(__dirname, 'static')));

// ============== Setting up ejs and our views folder ===========//
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


// ============== ROUTES here!!! ===========//

app.get('/', function(request, response){
    





    response.render('index')

});