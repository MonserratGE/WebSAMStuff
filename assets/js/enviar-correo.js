const btn = document.getElementById('enviarCorreo');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    const email = document.getElementById('email');
    const nombre = document.getElementById('nombre');
    const direccion = document.getElementById('direccion');
    const mensaje = document.getElementById('mensaje');
    window.location.href=`mailto:samwebstuff.06@gmail.com?subject=envioFormulario&body=Correo%3A${email[1]}%0ANombre%3A${nombre}%0ADirecci%C3%B3n%3A${direccion}%0AMensaje%3A${mensaje}`
})