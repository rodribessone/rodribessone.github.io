let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
	if(menuVisible){
		document.getElementById("nav").classList ="";
		menuVisible = false;
	}else{
		document.getElementById("nav").classList ="responsive";
		menuVisible = true;
	}
}

function seleccionar(){
	//oculta el menu una vez que selecciono una opcion
	document.getElementById("nav").classList = "";
	menuVisible = false;
}

// abre los proyecto 1
function modal(){
	document.getElementById("modal_container").classList.toggle("show");
}

// abre los proyecto 2
function modal3(){
	document.getElementById("modal_container2").classList.toggle("show");
}

// abre los proyecto 3
function modal5(){
	document.getElementById("modal_container3").classList.toggle("show");
}
