console.log("conectado")


function informacionUsuario() {
    let nombre = prompt("Por favor, ingresa tu nombre:");
    let apellido = prompt("Por favor, ingresa tu apellido:");
    let edad = parseInt(prompt("Por favor, ingresa tu edad:"));
    let nacionalidad = prompt("Por favor, ingresa tu nacionalidad:");


    if (nombre && apellido && !isNaN(edad) && nacionalidad) {
        let mensaje = "Resumen de la información:\n\n";
        mensaje += "Nombre: " + nombre + "\n";
        mensaje += "Apellido: " + apellido + "\n";
        mensaje += "Edad: " + edad + " años\n";
        mensaje += "Nacionalidad: " + nacionalidad;

        alert(mensaje);
    } else {
        alert("Por favor, ingresa información válida para todos los campos.");
        informacionUsuario();
    }
}

informacionUsuario();