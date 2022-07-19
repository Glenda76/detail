var nombre = document.getElementById("nombre");
var mail = document.getElementById("mail");
var tel = document.getElementById("tel");
var error = document.getElementById("error");



function enviarFormulario(){ 
    console.log("Enviando Formulario...");
    
    var mensajesError = [] ;

    if(nombre.value === null || nombre.value ===""){
        mensajesError.push("Ingrese su nombre");
    }
    if(mail.value === null || mail.value ===""){
        mensajesError.push("Ingrese su email");
    }
    if(tel.value === null || tel.value ===""){
        mensajesError.push("Ingrese su telefono");
    }
    error.innerHTML = mensajesError.join(", ");
    
    
    
    return false;
}
    
