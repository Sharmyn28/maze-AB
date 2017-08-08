
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

//var red = document.getElementById("red");
var tablero = document.getElementById('tablero');
var x;
var y;

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
      	var t = document.createTextNode(" ");
      	celda.appendChild(t);  
      }else if(mapa[i][j] == "o"){
      	celda.setAttribute('class','inicio');
      	y = i;
      	x = j;
      }else if(mapa[i][j] == "W"){
      	celda.setAttribute('class','fin');
      }
      celda.setAttribute("id", i +","+ j);
      fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  }
  tablero.appendChild(tabla);
}

generar();

var step = 50;
var step1 = 36;


//Posiciones iniciales
	y = 9;
	x = 1;
	var position1 = y+","+x;
	var newPosition;
	var celdaFinal = mapa[9][16];

moveForward.onclick = function (){
	/*var y= red.offsetTop;
	if(y >= 225){
		y = y - step;
		red.style.top = y + "px";
	}else{
		red.style.top = y + "px";
	}*/
	//var angryBird = document.createElement("img");
	
	//mapa[y-1][x].appendChild(angryBird);

	if(mapa[(y -1)][x] != "*" && celdaFinal != mapa[(y - 1)][x]){
		newPosition = (y-1)+","+x;
		/*angryBird.setAttribute("src", "assets/img/red.png");
		angryBird.setAttribute("id","red");		
		document.getElementById(newPosition).appendChild(angryBird);
		var red = document.getElementById("red");*/
		/*document.write('<img src="assets/img/red.png" id="red">');
		document.getElementById(newPosition);*/


		//document.getElementById(newPosition).rows[0].innerHTML =
		console.log(newPosition);
		//console.log(angryBird);
		document.getElementById(newPosition).innerHTML = "O";
		//document.getElementById(newPosition).innerHTML = red;
		y--;
	}else if(celdaFinal == mapa[(y -1)][x]){
		swal({
		  title: "Congrats!",
		  text: "You make it through the maze.",
		  imageUrl: "assets/img/giphy.gif"
		});
    	console.log(mapa[(y -1)][x]);
	}
}

moveBackward.onclick = function (){
	/*var y= red.offsetTop;
	if(y <= 525){
		y = y + step;
		red.style.top = y + "px";
	}else{
		red.style.top = y + "px";
	}*/
	if(mapa[(y +1)][x] != "*" && celdaFinal != mapa[(y +1)][x]){
		var newPosition = (y+1)+","+x;
		console.log(newPosition);
		document.getElementById(newPosition).innerHTML = "O";
		y++;
	}
	else if(celdaFinal == mapa[(y +1)][x]){
		swal({
		  title: "Congrats!",
		  text: "You make it through the maze.",
		  imageUrl: "assets/img/red1.gif"
		});
    	console.log(mapa[(y +1)][x]);
	}
}

moveRight.onclick = function (){
	/*var x= red.offsetLeft;
	if(x <= 775){
		x = x + step1;
		red.style.left = x + "px";
	}else{
		red.style.left = x + "px";
	}*/
	if(mapa[y][(x+1)] != "*" && celdaFinal != mapa[y][x+1]){
		var newPosition = y+","+(x+1);
		console.log(newPosition);
		document.getElementById(newPosition).innerHTML = "O";
		x++;
	}else if(celdaFinal == mapa[y][x+1]){
		swal({
		  title: "Congrats!",
		  text: "You make it through the maze.",
		  imageUrl: "assets/img/piggyGif.gif"
		});
    	console.log(mapa[y][x+1]);
	}
}

moveLeft.onclick = function (){
	/*var x= red.offsetLeft;
	if(x >= 261){
		x = x - step1;
		red.style.left = x + "px";
	}else{
		red.style.left = x + "px";
	}*/
	if(mapa[y][x-1] != "*" && celdaFinal != mapa[y][x-1]){
		var newPosition = y+","+(x-1);
		console.log(newPosition);
		document.getElementById(newPosition).innerHTML = "O";
		x--;
	}else if(celdaFinal == mapa[y][x-1]){
		swal({
		  title: "Congrats!",
		  text: "You make it through the maze.",
		  imageUrl: "assets/img/piggyGif.gif"
		});
		console.log(mapa[y][x-1]);
	}
}

window.onload = function(){
	document.onkeyup = function(event){
		if(event.keyCode==37)
			moveLeft.click();
		else if(event.keyCode == 38)
			moveForward.click();
		else if(event.keyCode == 39)
			moveRight.click();
		else if(event.keyCode == 40)
			moveBackward.click();
	}
};