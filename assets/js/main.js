
var mapa=[
"******************",
"*_________*______*",
"*_*****_____******",
"*______***__*__*_*",
"***_*____*____**_*",
"*___*____**__*___*",
"*_********__**_*_*",
"*____*______*__*_*",
"*_**_*__*****_**_*",
"*o*__*________**W*",
"******************"];

var red = document.getElementById("red");
var tablero = document.getElementById('tablero');

function generar(){
  var tabla=document.createElement('table');
  tabla.border="1";
  for(var i in mapa){
    var fila= document.createElement('tr');
    for (var j = 0; j < mapa[i].length; j++) {
      var celda = document.createElement('td');
      if(mapa[i][j] == "*"){
      	//maze top border - left border - right border - bottom border
      	if(i == 0){
      		if(j == 0){
      			celda.setAttribute('class','asterisco-combinado1');
      		}else if (j == 17){
      			celda.setAttribute('class','asterisco-combinado4');
      		}
      		else{
      			celda.setAttribute('class','asterisco-top');
      		}
      	}else if (i == 10){
      		if(j == 0){
      			celda.setAttribute('class','asterisco-combinado2');
      		}else if(j == 17){
      			celda.setAttribute('class','asterisco-combinado3');
      		}
      		else{
      			celda.setAttribute('class','asterisco-bottom');
      		}
      	}else if (j == 0){
      		celda.setAttribute('class','asterisco-left');
      	}else if (j == 17){
      		celda.setAttribute('class','asterisco-right');
      	}else {
      		celda.setAttribute('class','asterisco-t');
      	}
      }else if(mapa[i][j] == "_"){
      	celda.setAttribute('class','espacio');
      }else if(mapa[i][j] == "o"){
      	celda.setAttribute('class','inicio');
      }else if(mapa[i][j] == "W"){
      	celda.setAttribute('class','fin');
      }
      fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  }
  tablero.appendChild(tabla);
}

generar();

var step = 50;
moveForward.onclick = function (){
	var y= red.offsetTop;
	y = y - step;
	red.style.top = y + "px";
}

moveBackward.onclick = function (){
	var y= red.offsetTop;
	y = y + step;
	red.style.top = y + "px";
}

moveRight.onclick = function (){
	var x= red.offsetLeft;
	x = x + step;
	red.style.left = x + "px";
}

moveLeft.onclick = function (){
	var x= red.offsetLeft;
	x = x - step;
	red.style.left = x + "px";
}
