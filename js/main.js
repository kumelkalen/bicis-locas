function validateForm(){
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var contraseña = document.getElementById("input-password").value;
	var tagBici = document.getElementsByTagName("select");
	var bici = tagBici[0].value;
	var twitter = document.getElementById("input-social").value;
	var check = document.getElementById("check");
	var cont = 0;
	var errorDiv = document.getElementsByClassName("input-box");
	var abc = ["á","é","í","ó","ú","a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"] /*"áéíóúabcdefghijklmnñopqrstuvwxyz"*/;
	if(nombre != "" && nombre.substring(0,1)==nombre.substring(0,1).toUpperCase() && (/^[a-zA-Z ]*$/).test(nombre)==true){
		cont++;
	}else{
		var spanA = document.createElement("span");
		var textErrorA = document.createTextNode("Error ;o; debe comenzar con mayúscula y contener sólo letras");
		spanA.appendChild(textErrorA);
		errorDiv[0].appendChild(spanA);
	}
	if(apellido != "" && apellido.substring(0,1)==apellido.substring(0,1).toUpperCase() && (/^[a-zA-Z ]*$/).test(nombre)==true){
		cont++;
	}else{
		var spanB = document.createElement("span");
		var textErrorB = document.createTextNode("Error ;o; debe comenzar con mayúscula y contener sólo letras");
		spanB.appendChild(textErrorB);
		errorDiv[1].appendChild(spanB);
	}
	if(email != ""){
		cont++;
	}else{
		var spanC = document.createElement("span");
		var textErrorC = document.createTextNode("Error ;o; tu email debe ser como ej : name@domain.com");
		spanC.appendChild(textErrorC);
		errorDiv[2].appendChild(spanC);
	}
	if(contraseña != "" && contraseña != "password"  && contraseña != "123456"  && contraseña != "098754"  && contraseña.length > 6){
		cont++;
	}else{
		var spanD = document.createElement("span");
		var textErrorD = document.createTextNode("Error ;o; ingresa una contraseña que tenga más de 6 caracteres y que no sea 123456 o 098754");
		spanD.appendChild(textErrorD);
		errorDiv[3].appendChild(spanD);
	}
	if(bici != 0){
		cont++;
	}else{
		var spanE = document.createElement("span");
		var textErrorE = document.createTextNode("Error ;o; selecciona un tipo de bici");
		spanE.appendChild(textErrorE);
		errorDiv[4].appendChild(spanE);
	}
	console.log(cont);
	if(cont==5){
		alert("Felicitaciones, te has registrado exitosamente ^-^!!");
	}else{
		alert("Lo sentimos, tu registro no es válido. Vuelve a intentarlo :0");
	}
}