
// ============== Always, associated with packages installed ===========//
var express = require('express');
var session = require('express-session');
var path = require('path');
var bodyParser = require("body-parser");







// ============== Second, invokes the express app ===========//
var app = express();

// ============== use static files?? ===========//
app.use(express.static(__dirname + "/static"));

// ============== use style.css ===========//
app.use(express.static(path.join(__dirname, 'static')));

// ============== Setting up ejs and our views folder ===========//
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
    // this piece of code needs to be here!!!




// ============== ROUTES here!!! ===========//

app.get('/', function(request, response){
    response.render('index')

});

var user = {};

app.post('/process', function(request, response){
    user['firstName'] = request.body.firstName,
    user['lastName'] = request.body.lastName,
    user['location'] = request.body.location,
    user['language'] = request.body.language,
    user['comment'] = request.body.comment

    response.redirect('/results')
    console.log("somone just hit submit" + user)
});


app.get('/results', function(request, response){
    response.render('results', user)
    console.log("The RESULTS page is on display")
});


app.post('/back', function(request, response){
    response.redirect('/')
    console.log('BACK button has been hit')

});




app.listen(8000, function(){
    console.log('running SurveyForm project on PORT 8000');

});