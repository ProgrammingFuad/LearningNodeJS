var express= require('express'),
mongoose = require('mongoose');

//connection string to our database
var db = mongoose.connect('mongodb://localhost/bookAPI');


var Book = require('./models/bookModel');
//Create an instance of express
var app= express();

// Sets up a port, if our environment doesnt have one, we use port 3000
var port = process.env.PORT || 3000;


var bookRouter = express.Router();

//Set up routers
//req is the request coming in from the client, res is the response were gonna send back
bookRouter.route('/Books')
  .get(function(req,res){
    Book.find(function(err,books){
      if(err)
        console.log(err)
      else
        res.json(books)
    });
  })

app.use('/api',bookRouter);


//Setting up our handler
//First paramter is a slash which is the root fo our site
//second paramter is a callback, anytime something htis the root slash the callback function will be executed
//@req is the request sent by the client
//@res is the response we are going to send back
app.get('/', function(req,res){
  res.send('Welcome to my API');
});



app.listen(port, function(){
  console.log("Gulp is Running on PORT"+port);
});
