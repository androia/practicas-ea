/**
 * Created by andre on 22/11/2016.
 */

var game = new Phaser.Game(500, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {
    game.load.spritesheet('b1', 'img/b1.png', 64, 64);
    game.load.spritesheet('b2', 'img/b2.png', 64, 64);
    game.load.spritesheet('b3', 'img/b3.png', 64, 64);
    game.load.spritesheet('b4', 'img/b4.png', 64, 64);
    game.load.spritesheet('b5', 'img/b5.png', 64, 64);
    game.load.spritesheet('b6', 'img/b6.png', 64, 64);
    game.load.spritesheet('b7', 'img/b7.png', 64, 64);
    game.load.spritesheet('b8', 'img/b8.png', 64, 64);
    game.load.spritesheet('b9', 'img/b9.png', 64, 64);
    game.load.spritesheet('b0', 'img/b0.png', 64, 64);
    game.load.spritesheet('bsum', 'img/bsum.png', 64, 64);
    game.load.spritesheet('bres', 'img/bres.png', 64, 64);
    game.load.spritesheet('bmult', 'img/bmult.png', 64, 64);
    game.load.spritesheet('bdiv', 'img/bdiv.png', 64, 64);
    game.load.spritesheet('berase', 'img/berase.png', 64, 64);
    game.load.spritesheet('bigual', 'img/bigual.png', 64, 64);
}

var b1, b2, b3, b4, b5, b6, b7, b8, b9, b0, bsum, bres, bmult, bdiv, berase, bigual;
var x = '';
var text;
var numIni = 0.0;
var operador;
var xGuardar;

function create() {

    var style = { font: "60px Calibri", fill: "#ffffff", align: "center" };
    text = game.add.text(50, 50, x, style);

    b7 = game.add.button(50, 150, 'b7', actionOnClick, {keyname:'7'});
    b8 = game.add.button(150, 150, 'b8', actionOnClick, {keyname:'8'});
    b9 = game.add.button(250, 150, 'b9', actionOnClick, {keyname:'9'});

    b4 = game.add.button(50, 250, 'b4', actionOnClick, {keyname:'4'});
    b5 = game.add.button(150, 250, 'b5', actionOnClick, {keyname:'5'});
    b6 = game.add.button(250, 250, 'b6', actionOnClick, {keyname:'6'});

    b1 = game.add.button(50, 350, 'b1', actionOnClick, {keyname:'1'});
    b2 = game.add.button(150, 350, 'b2', actionOnClick, {keyname:'2'});
    b3 = game.add.button(250, 350, 'b3', actionOnClick, {keyname:'3'});

    b0 = game.add.button(50, 450, 'b0', actionOnClick, {keyname:'0'});
    bigual = game.add.button(150, 450, 'bigual', igualOnClick, {keyname:'='});
    berase = game.add.button(250, 450, 'berase', eraseOnClick, {keyname:'C'});

    bdiv = game.add.button(350, 150, 'bdiv', operadorOnClick, {keyname:'/'});
    bmult = game.add.button(350, 250, 'bmult', operadorOnClick, {keyname:'*'});
    bres = game.add.button(350, 350, 'bres', operadorOnClick, {keyname:'-'});
    bsum = game.add.button(350, 450, 'bsum', operadorOnClick, {keyname:'+'});
}

function actionOnClick() {
    /*var style = { font: "60px Calibri", fill: "#ffffff", align: "center" };
    text = game.add.text(50, 50, x, style);*/
    text.destroy();
    x += this.keyname;
    //x = t.toString();
    create();

    /*if(operador == '+'){
        xGuardar = x;
        numIni += parseFloat(xGuardar);
        console.log("numIni: " + numIni);
        //Eliminar el texto = text.destroy();
        //console.log("x primero es: " + x);
        //console.log("t primero es: " + t);
        x = '';
        t = '';
        //console.log("x final es: " + x);
        //console.log("t final es: " + t);
    } else if(operador == '-' ){
        xGuardar = x;
        numIni -= parseFloat(xGuardar);
        console.log("numIni: " + numIni);
        //Eliminar el texto = text.destroy();
        x = '';
        t = '';
    } else if(operador == '*'){
        xGuardar = x;
        numIni *= parseFloat(xGuardar);
        console.log("numIni: " + numIni);
        //Eliminar el texto = text.destroy();
        x = '';
        t = '';
    } else if(operador == '/'){
        xGuardar = x;
        numIni /= parseFloat(xGuardar);
        console.log("numIni: " + numIni);
        //Eliminar el texto = text.destroy();
        x = '';
        t = '';
    } else if(operador == 'C'){
        //Eliminar el texto = text.destroy();
        x = '';
        t = '';
    } else if(operador == '=' ){

    } else{
        text.destroy();
        xGuardar = x;
        t += this.keyname;
        x = t.toString();
        text = game.add.text(50, 50, x, style);
    }*/
}

function igualOnClick(){
    switch (operador){
        case "+":
            numIni = parseFloat(xGuardar) + parseFloat(x);
            break;
        case "-":
            numIni = parseFloat(xGuardar) - parseFloat(x);
            break;
        case "*":
            numIni = parseFloat(xGuardar) * parseFloat(x);
            break;
        case "/":
            numIni = parseFloat(xGuardar) / parseFloat(x);
            break;
    }
    x = numIni.toString();
    text.destroy();
    create();
    xGuardar = "";
}

function eraseOnClick(){
    //Esborrem el contingut de x, perquè al cridar a 'create()' no ens escrigui res i alhora, destruim el text.
    x = "";
    text.destroy();
    //text = game.add.text(50, 50, "", style);
    create();
    xGuardar = "";
}

function operadorOnClick(){
    //Guardem l'operador que hem seleccionat.
    operador = this.keyname.toString();
    //console.log("operador: " + operador);

    xGuardar = x;
    //console.log("xGuardar: " + xGuardar);
    x = "";
    text.destroy();
    create();
}
