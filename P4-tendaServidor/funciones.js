var tot = 0;
var nId = 1;

/*function Comprar(descript, precio){
	var espacio = document.getElementById("total");
	var parrafo = document.createElement("p");
	var contenido = document.createTextNode(descript + " " + precio + "€"); //X texto corresponde a X parrafo
	parrafo.appendChild(contenido); 
	espacio.appendChild(parrafo);
	tot += parseFloat(precio);
	document.getElementById("suma").innerHTML = "Total " + tot.toFixed(2) + "€"; //para 2 decimales (toFixed)
}*/

function Comprar(descript, precio){
	var espacio = document.getElementById("total");
	var parrafo = document.createElement("p");
	/*Para tener una ID única cada vez!*/
	parrafo.setAttribute("id", nId); /*ID 1, ID 2, ID 3...*/
	anclaN=document.createElement("a");
	/*La # es para que salga la mano*/
	anclaN.setAttribute("href","#");
	anclaN.setAttribute("title","X");
	anclaN.setAttribute("onClick","Borrar("+nId+")");
	
	var ids = document.getElementById(nId);	
	var contenido = document.createTextNode(descript + " " + precio + "€"); //X texto corresponde a X parrafo
	parrafo.appendChild(contenido); 
	espacio.appendChild(parrafo);
	
	var boton = document.createElement("input");
	boton.setAttribute("type", "button");
	boton.setAttribute("value", "Borrar");
	boton.setAttribute("id", "b" + nId);
	boton.setAttribute("onclick", "Borrar("+nId+", "+precio+");");
	espacio.appendChild(boton);
	
	tot += parseFloat(precio);
	document.getElementById("suma").innerHTML = "Total " + tot.toFixed(2) + "€"; //para 2 decimales (toFixed)
	nId++;
}

function Borrar(nId, pre){
	var borrar = document.getElementById(nId);
	borrar.parentNode.removeChild(borrar);
	var borrar1 = document.getElementById('b' + nId);
	borrar1.parentNode.removeChild(borrar1);
	tot -= pre;
	document.getElementById("suma").innerHTML = "Total " + tot.toFixed(2) + "€"; //para 2 decimales (toFixed)
}

	