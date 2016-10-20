var Item = function Item(imagen, titol, raza, color, localitzacio){
    this.image = imagen;
    this.title = titol;
    this.race = raza;
    this.color = color;
    this.location = localitzacio;
};

// Get random price in range min, max
/*Item.prototype.getPrice = function(){
    var min = 100;
    var max = 1000;
    return (Math.random() * (max - min) + min).toFixed(2);
}*/

exports.Item = Item;