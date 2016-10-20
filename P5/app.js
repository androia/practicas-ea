var express = require('express');
var Item = require('./Item.js').Item;
var app = express();

// Configure jade to be our rendering engine
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// Enable boostrap from npm as a served static directory
app.use("/libs",express.static('node_modules/bootstrap/dist'));

// Our CSS and JS files
app.use("/public",express.static('public'));



// Use 500px API to get random pictures for our products
/*var API500px = require('500px');
var api500px = new API500px("YecP85RjzG08DN0MqvgFa0N780dNaDmJX6iTPbYp");
var pics = [];
api500px.photos.getPopular({'sort': 'created_at', 'rpp': '10','image_size':200},  function(error, results) {
    // Do something
    pics = results.photos.map(function(a){
        // Compose object to be used in show items template
        return new Item(a.image_url);
    });
});*/

var pics = [
    new Item("public/img/aHe45yi.jpg", "Pastor Alemany", "MARRÓ", "Andorra"),
    new Item("public/img/gato-y-fondo-negro-1807.jpg", "Manx", "NEGRE", "Girona"),
    new Item("public/img/644189_angliyskiy-buldog_buldog_sobaka_chrnyiy-fon_5223x3482_www.Gde-Fon.com.jpg", "BullDog", "MARRÓ", "Estimem", "Abrera"),
    new Item("public/img/298995-alexfas01.jpg", "Golden Retriever", "MARRÓ", "Cuidem"),
    new Item("public/img/Cats_Black_background_498711.jpg", "Siberiano", "MARRÓ", "Estimem"),
    new Item("public/img/dog_puppy_black_baby_1174_1920x1080.jpg", "Labrador", "NEGRE", "Cuidem"),
    new Item("public/img/eyes-black-dogs-funny-monochrome-black-background-200896.jpg", "Weimaraner", "GRIS", "Estimem"),
    new Item("public/img/Black-cat-green-eyes-black-background_2560x1440.jpg", "Chartreux", "GRIS", "Cuidem"),
    new Item("public/img/fon-chernyy-schenok-drug-sobaka.jpg", "Bòxer", "MARRÓ", "Un somriure")
];

// Render frontpage
app.get('/', function (req, res) {
    res.render('portada',{
        pics: pics
    });
});


// Server start
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});