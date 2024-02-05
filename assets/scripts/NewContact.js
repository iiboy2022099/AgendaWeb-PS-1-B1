function agregarContacto() {
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telefono').value;
    var email = document.getElementById('email').value;
    var carrera = document.getElementById('carrera').value;

    var contactoElement = document.createElement('p');
    contactoElement.innerHTML = "<strong>Nombre:</strong> " + nombre + ", <strong>Teléfono:</strong> " + telefono + ", <strong>Email:</strong> " + email+", <strong>Carrera:</strong> " + carrera;

    document.getElementById('contactList').appendChild(contactoElement);

    document.getElementById('contactForm').reset();
    
}