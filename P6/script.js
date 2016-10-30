function Game() {
    var canvas = document.getElementById("game");
    this.width = canvas.width;
    this.height = canvas.height;
    this.context = canvas.getContext("2d");
    this.context.fillStyle = "white";
    this.keys = new KeyListener();
    
    this.pala1 = new Pala(5, 0);
    this.pala1.y = this.height/2 - this.pala1.height/2;
    this.marcador1 = new Marcador(this.width/4, 25);
    this.pala2 = new Pala(this.width - 5 - 2, 0);
    this.pala2.y = this.height/2 - this.pala2.height/2;
    this.marcador2 = new Marcador(this.width*3/4, 25);
    
    this.Bola = new Bola();
    this.Bola.x = this.width/2;
    this.Bola.y = this.height/2;
    this.Bola.vy = Math.floor(Math.random()*12 - 6);
    this.Bola.vx = 7 - Math.abs(this.Bola.vy);
}

Game.prototype.draw = function()
{
    this.context.clearRect(0, 0, this.width, this.height);    
    
    this.Bola.draw(this.context);
    
    this.pala1.draw(this.context);
    this.pala2.draw(this.context);
    this.marcador1.draw(this.context);
    this.marcador2.draw(this.context);
};
 
Game.prototype.update = function() 
{
    if (this.paused)
        return;
    
    this.Bola.update();
    this.marcador1.value = this.pala1.score;
    this.marcador2.value = this.pala2.score;
 
    // To which Y direction the Pala is moving
    if (this.keys.isPressed(65)) { // A DOWN
        this.pala1.y = Math.min(this.height - this.pala1.height, this.pala1.y + 4);
    } else if (this.keys.isPressed(81)) { // Q UP
        this.pala1.y = Math.max(0, this.pala1.y - 4);
    }
 
    if (this.keys.isPressed(76)) { // L DOWN
        this.pala2.y = Math.min(this.height - this.pala2.height, this.pala2.y + 4);
    } else if (this.keys.isPressed(80)) { // P UP
        this.pala2.y = Math.max(0, this.pala2.y - 4);
    }
 
    if (this.Bola.vx > 0) {
        if (this.pala2.x <= this.Bola.x + this.Bola.width &&
                this.pala2.x > this.Bola.x - this.Bola.vx + this.Bola.width) {
            var collisionDiff = this.Bola.x + this.Bola.width - this.pala2.x;
            var k = collisionDiff/this.Bola.vx;
            var y = this.Bola.vy*k + (this.Bola.y - this.Bola.vy);
            if (y >= this.pala2.y && y + this.Bola.height <= this.pala2.y + this.pala2.height) {
                // collides with right Pala
                this.Bola.x = this.pala2.x - this.Bola.width;
                this.Bola.y = Math.floor(this.Bola.y - this.Bola.vy + this.Bola.vy*k);
                this.Bola.vx = -this.Bola.vx;
            }
        }
    } else {
        if (this.pala1.x + this.pala1.width >= this.Bola.x) {
            var collisionDiff = this.pala1.x + this.pala1.width - this.Bola.x;
            var k = collisionDiff/-this.Bola.vx;
            var y = this.Bola.vy*k + (this.Bola.y - this.Bola.vy);
            if (y >= this.pala1.y && y + this.Bola.height <= this.pala1.y + this.pala1.height) {
                // collides with the left Pala
                this.Bola.x = this.pala1.x + this.pala1.width;
                this.Bola.y = Math.floor(this.Bola.y - this.Bola.vy + this.Bola.vy*k);
                this.Bola.vx = -this.Bola.vx;
            }
        }
    }
 
    // Top and bottom collision
    if ((this.Bola.vy < 0 && this.Bola.y < 0) ||
            (this.Bola.vy > 0 && this.Bola.y + this.Bola.height > this.height)) {
        this.Bola.vy = -this.Bola.vy;
    }
    
    if (this.Bola.x >= this.width)
        this.score(this.pala1);
    else if (this.Bola.x + this.Bola.width <= 0)
        this.score(this.pala2);
};

Game.prototype.score = function(p)
{
    // player scores
    p.score++;
    var player = p == this.pala1 ? 0 : 1;
 
    // set Bola position
    this.Bola.x = this.width/2;
    this.Bola.y = p.y + p.height/2;
 
    // set Bola velocity
    this.Bola.vy = Math.floor(Math.random()*12 - 6);
    this.Bola.vx = 7 - Math.abs(this.Bola.vy);
    if (player == 1)
        this.Bola.vx *= -1;
};


//Pala
function Pala(x,y) {
    this.x = x;
    this.y = y;
    this.width = 5;
    this.height = 52;
    this.score = 0;
}

Pala.prototype.draw = function(p)
{
    p.fillRect(this.x, this.y, this.width, this.height);
};


//Bola
function Bola() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.width = 4;
    this.height = 4;
}
 
Bola.prototype.update = function()
{
    this.x += this.vx;
    this.y += this.vy;
};
 
Bola.prototype.draw = function(p)
{
    p.fillRect(this.x, this.y, this.width, this.height);
};


//MARCADORES
function Marcador(x, y) {
    this.x = x;
    this.y = y;
    this.value = 0;
}
 
Marcador.prototype.draw = function(p)
{
    p.fillText(this.value, this.x, this.y);
};


// KEY LISTENER
function KeyListener() {
    this.pressedKeys = [];
 
    this.keydown = function(e) {
        this.pressedKeys[e.keyCode] = true;
    };
 
    this.keyup = function(e) {
        this.pressedKeys[e.keyCode] = false;
    };
 
    document.addEventListener("keydown", this.keydown.bind(this));
    document.addEventListener("keyup", this.keyup.bind(this));
}
 
KeyListener.prototype.isPressed = function(key)
{
    return this.pressedKeys[key] ? true : false;
};
 
KeyListener.prototype.addKeyPressListener = function(keyCode, callback)
{
    document.addEventListener("keypress", function(e) {
        if (e.keyCode == keyCode)
            callback(e);
    });
};


//Inicializamos el juego
var game = new Game();
 
function MainLoop() {
    game.update();
    game.draw();    
    setTimeout(MainLoop, 30);
}
 
MainLoop();
