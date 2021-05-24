// Load the express module and store it in the variable express (Where do you think this comes from?)
let express = require('express');

// invoke express and store the result in the variable app
let app = express();

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 

app.set('view engine', 'ejs');

// "/cats" url
app.get("/cats", function (request, response){
    //render view file
    response.render('cat');
})
app.get("/cuddles", function (request, response){
    var profile = [
        {name: "Major", food: "Cat Food", age: 3, spots: "plate"}, 
        {name: "Alpha", food: "Fish", age: 2, spots: "outside the house"},
        {name: "Cutie", food: "Chicken", age: 3, spots: "bed"}
    ];
    response.render('details', {cats: profile});
})


// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
    console.log("listening on port 8000");
})