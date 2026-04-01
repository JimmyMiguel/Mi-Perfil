import "./components/myPerfil";

//traemos el contenedor del html
const conteiner = document.getElementById('app') as HTMLElement;

//insertamos el componente en el contenedor
conteiner.innerHTML = `<my-perfil></my-perfil>`;

const btn = conteiner.querySelector('.save-btn') as HTMLButtonElement;
btn.addEventListener('click', () => {
    //obtenemos los valores de los inputs
    const nombre = document.querySelector('.field-input') as HTMLInputElement;
    const valorNombre = nombre.value;

    const biografia = document.querySelector('.field-textarea') as HTMLTextAreaElement;
    const valorBiografia = biografia.value;

    //obtenemos el valor de la imagen
    const imagen = document.querySelector('.drop-zone') as HTMLInputElement;
    const valorImagen = imagen.value;

console.log(valorNombre, valorBiografia, valorImagen);







});
