const cont1 = document.getElementById('cont1')

fetch('gs.json')
    .then(response => response.json())
    .then(data => {
            data.forEach(usuario =>{
                cont1.innerHTML +=
                 `
                 <div class='tarjeta'>
                    <p>${usuario.articulo}</p>
                    <p>${usuario.descripcion}  ${usuario.precio}</p>
                </div>
                `
            })
            })