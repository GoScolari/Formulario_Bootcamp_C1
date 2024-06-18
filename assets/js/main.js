// function enviar(){
//     alert("Formulario Enviado")
// }

function enviar(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    
    // Validación de campos
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let date = document.getElementById('date').value;
    let country = document.getElementById('country').value;
    let password = document.getElementById('password').value;
    let message = document.getElementById('message').value;

    // Verificar que todos los campos obligatorios estén completos
    if (name === '' || email === '' || phone === '' || date === '' || country === '' || password === '' || message === '') {
        alert('Por favor completa todos los campos.');
    } else {
        alert('Formulario Enviado');
        document.getElementById('contact-form').reset(); // Limpiar el formulario después de enviar
    }
}

// Agregar el evento al botón de enviar
document.getElementById('submitBtn').addEventListener('click', enviar);
