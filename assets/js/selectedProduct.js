const product = document.querySelectorAll('a');
const links = [...product].filter(producto => producto.id != '');
console.log(links);

addEventListener('click', (e) => {
    e.preventDefault();
    const pSelected = e.path[1].id;
    console.log(pSelected);
    window.location.href = `productDetail.html?id=${pSelected}`;
});
