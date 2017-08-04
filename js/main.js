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
	var span = document.createElement("span");
	var textError = document.createTextNode("Error ;0");
	span.appendChild(textError);
	if(nombre != "" ){
		cont++;
	}else{
		errorDiv[0].appendChild(span);
	}
	if(apellido != ""){
		cont++;
	}else{
		errorDiv[1].appendChild(span);
	}
	if(email != ""){
		cont++;
	}else{
		errorDiv[2].appendChild(span);
	}
	if(contraseña != "" && contraseña != password  && contraseña != "123456"  && contraseña != "098754"  && contraseña.length > 6){
		cont++;
	}else{
		errorDiv[3].appendChild(span);
	}
	if(bici != 0){
		cont++;
	}else{
		errorDiv[4].appendChild(span);
	}
	console.log(cont);
	if(cont==5){
		alert("Felicitaciones, te has registrado exitosamente ^-^!!");
	}else{
		alert("Lo sentimos, tu registro no es válido. Vuelve a intentarlo :0");
	}
}