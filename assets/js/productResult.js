const product = window.location.href.split('=').pop();
const url = '../src/api/datamuebles.json';
const productContainer = document.getElementById('productContainer');

console.log(product);
fetch(url).then(response => response.json()).then(data => {
    const toArray = Object.entries(data);
    const producto = toArray[0][1].filter(producto => producto.id == product);
    console.log(producto[0]);
    const datosNecesarios = {
        id: producto[0].id,
        nombre: producto[0].nombre,
        descripcion: producto[0].descripcion,
        categoria: producto[0].categoria,
        cuidados: producto[0].cuidados,
        funcionalidad: producto[0].funcionalidad,
        materiales: producto[0].materiales,
        precio: producto[0].precio,
        imagen_frontal: producto[0].imagen_frontal,
        imagen_general: producto[0].imagen_general,
        imagen_lateral: producto[0].imagen_lateral,
    };

    const template = `
    <div class="row">
        <div class="col-12 col-md-7 col-lg-6">
            <img class="img-logo w-100 h-auto p-3" src="${datosNecesarios.imagen_general}" alt="">
        </div>
        <div class="col">
        <h2>Titulo de la consulta</h2>
        <hr>
        <h4>Descripción:</h4>
        <p>
            ${datosNecesarios.descripcion}
        </p>
        <hr>
        </div>
    </div>
    <div class="row ml-3 mr-3 d-none d-md-block card">
        <div class="col-12 gridContainer">
        <div id="d1">
            <img class="img-logo w-100 h-100 p-3" src="${datosNecesarios.imagen_frontal}" alt="">
        </div>
        <div id="d2">
            <img class="img-logo w-100 h-100 p-3" src="${datosNecesarios.imagen_lateral}" alt="">
        </div>
        <div id="d3">
            <img class="img-logo w-100 h-100 p-3" src="${datosNecesarios.imagen_general}" alt="">
        </div>
        </div>
    </div>
    <div class="row ml-3 mr-3 d-none d-md-block card">
        
    </div>
    `;

    productContainer.innerHTML = template;
});