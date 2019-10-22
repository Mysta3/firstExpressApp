var express = require('express'); //includes express package
var app = express();


//CREATE ROUTES

// when you go to '/' receive message "Hey!"


// '/by' receive "bye"

// 'dog' receive "Meow!"


//Tell express to listen for request (start server)
//choose a port/IP to listen on.
// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("server had started!");
// })   <-- use when developing in cloud

app.listen(3000, function(){
    console.log("server has started! Port 3000!");
})