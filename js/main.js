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
	if(nombre != ""){
		cont++;
	}
	if(apellido != ""){
		cont++;
	}
	if(email != ""){
		cont++;
	}
	if(contraseña != ""){
		cont++;
	}
	if(bici != 0){
		cont++;
	}
	if(twitter != ""){
		cont++;
	}
	if (check.checked==true){
		cont++;
	}
	console.log(cont);
	if(cont==7){
		alert("Felicitaciones, te has registrado exitosamente ^-^!!");
	}
}