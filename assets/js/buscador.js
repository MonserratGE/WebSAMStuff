const formulario = document.querySelector('form');

/*
*/
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const busqueda = document.querySelector('input').value;

    window.location.href = `search.html?nombre=${busqueda}`;
});