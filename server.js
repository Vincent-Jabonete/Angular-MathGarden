// Install express
const express = require ('express') // express is a module that works with Node.js (Handles URL)
const path = require ('path') // the location of the files

const app = express(); //call the express 

//server only the static files form the dist directory
app.use(express.static(__dirname + '/dist/Angular-MathGarden'));

//to view the all html content in our app
app.get('/*' ,function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/Angular-MathGarden/index.html'));
});

//Start app by listening default heroku port
app.listen(process.env.PORT || 8080, () => {
    console.log("Express Server Listening to the PORT")
});





