const container = document.getElementById('catalogContainer');
const product = container.querySelectorAll('a');
const toArray = Object.entries(product);
console.log(typeof toArray);
const producto = toArray.filter(producto => producto.id == product);
console.log(producto);
//const links = [...product].filter(producto => producto.id != '');

//console.log(typeof links);
addEventListener('click', (e) => {
    //console.log(links);
    e.preventDefault();
    const pSelected = e.path[1].id;
    console.log(pSelected);
    window.location.href = `productDetail.html?id=${pSelected}`;
});
/*
*/