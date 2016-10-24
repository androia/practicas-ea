/*$(document).ready(function(){
	function render(){
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = "#336699";
		ctx.fillRect(10, 10, this.width, this.height);
	};
})*/

$(document).ready(function(){
	
	var marcador1 = 0;
	var marcador2 = 0;
	var timer = setInterval(myTimer, 1000);
	
	function myTimer(){
		var d = new Date();
		document.getElementById("demo").innerHTML = d.toLocaleTimeString();
	}
	
	function update(){
		cambiaMarcador();
	}
	
    function render(){
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
		
		/*var img = new Image();
		img.onload = function(){
			var pattern = ctx.createPattern(this, "repeat");
			ctx.rect(0, 0, canvas.width, canvas.width);			
			ctx.fillStyle = pattern;
			ctx.fill();
		};
		img.src = 'img/mesaPingPong2.png'; */
		
		ctx.font="15px Calibri";
		ctx.fillText(marcador1, 90, 10);
		ctx.fillText("St Pauli", 70, 20);
		ctx.fillText(marcador2, 190, 10);
		ctx.fillText("Livorno", 170, 20);
		
		function cambiaMarcador(){
			marcador1++;
			marcador2++;
		}
		
		/*var escudo1 = new Image(); //creates a variable for a new image
		escudo1.src= "img/escudoStPauli.jpg"; // specifies the location of the image
		context.drawImage(escudo1,50,20); // draws the image at the specified x and y location		
		
		var escudo2 = new Image(); //creates a variable for a new image
		escudo2.src= "img/escudoLivorno.jpg"; // specifies the location of the image
		context.drawImage(escudo2,100,20); // draws the image at the specified x and y location*/
		
        //ctx.fillStyle = "#336699";
        
    };
	
    setInterval(render, 100);
});
