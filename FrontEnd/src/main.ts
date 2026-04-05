import "./components/myPerfil";

const container = document.getElementById('app') as HTMLElement;
container.innerHTML = `<my-perfil></my-perfil>`;

// ✅ Esto funciona porque no hay Shadow DOM
const form = container.querySelector('#perfilForm') as HTMLFormElement;
const preview = container.querySelector('#preview') as HTMLElement;
const previewImg = container.querySelector('#previewImg') as HTMLImageElement;
const previewName = container.querySelector('#previewName') as HTMLElement;

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Evita que la página se recargue

  const nombre = (container.querySelector('#nombreInput') as HTMLInputElement).value;
  const biografia = (container.querySelector('#bioInput') as HTMLTextAreaElement).value;
  const imagen = (container.querySelector('#fileInput') as HTMLInputElement).files?.[0];

  if (!nombre || !biografia || !imagen) {
    alert('Todos los campos son requeridos');
    return;
  }

  const CLOUD_NAME = 'dg1buqopt';
  const UPLOAD_PRESET = 'mi_preset_perfiles';

  try {

    //creamos un nuevo FormData ahi subimos la imagen en la carpeta creada previamente
    const formDataCloudinary = new FormData();
    formDataCloudinary.append('file', imagen);
    formDataCloudinary.append('upload_preset', UPLOAD_PRESET);
    //enviamos por fetch a claudinary
    const resCloudinary = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      { method: 'POST', body: formDataCloudinary }
    );

    if (!resCloudinary.ok) throw new Error("Error al subir a Cloudinary");

    const dataCloudinary = await resCloudinary.json();
    const urlImagenLista = dataCloudinary.secure_url;

    const resBackend = await fetch('http://localhost:3000/perfil', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nombre: nombre,     
        biografia: biografia,
        imagen: urlImagenLista
      })
    });

    if (!resBackend.ok) throw new Error("Error al guardar en el backend");

    alert('Perfil guardado correctamente ✅');
    console.log('Éxito:', { nombre, biografia, urlImagenLista });

    form.reset();
    preview.style.display = 'none';
    previewImg.src = '';
    previewName.textContent = '';

  } catch (error) {
    console.error(error);
    alert('Ocurrió un error al guardar el perfil ❌');
  }
});