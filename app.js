var express = require('express'); //includes express package
var app = express();


//CREATE ROUTES

// when you go to '/' receive message "Hey!"
app.get('/', function(req,res){
    res.send("<h1>Hello!</>");
});

// '/by' receive "bye"
app.get('/bye', function(req,res){
    res.send("<h2>Good bye!</h2>");
});

// 'dog' receive "Meow!"
app.get('/dog', function(req,res){
    res.send("<h1>MEOW!!</h1>");
});


//Tell express to listen for request (start server)
//choose a port/IP to listen on.
// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("server had started!");
// })   <-- use when developing in cloud

app.listen(3000, function(){
    console.log("server has started! Port 3000!");
})