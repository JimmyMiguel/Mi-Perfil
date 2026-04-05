export class myPerfil extends HTMLElement {
    constructor() {
        super();
        this.render()
    }
    render() {
        this.innerHTML = `
        <style>
        /* styles/my-perfil.css */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.profile-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
}

.profile-card {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  padding: 2.25rem;
  width: 100%;
  max-width: 460px;
}

.profile-title {
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  letter-spacing: -0.02em;
  margin-bottom: 1.75rem;
  text-align: center;
}

.field-group {
  margin-bottom: 1.1rem;
}

.field-label {
  display: block;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: 6px;
}

.field-input,
.field-textarea {
  width: 100%;
  padding: 10px 14px;
  font-size: 14px;
  color: #fff;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  outline: none;
  transition: border-color 0.2s, background 0.2s;
  font-family: inherit;
  resize: none;
  caret-color: #a78bfa;
}

.field-input::placeholder,
.field-textarea::placeholder {
  color: rgba(255, 255, 255, 0.25);
}

.field-input:focus,
.field-textarea:focus {
  border-color: rgba(167, 139, 250, 0.6);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.2);
}

.field-textarea {
  height: 88px;
  line-height: 1.6;
}

.drop-zone {
  border: 1.5px dashed rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  padding: 1.5rem 1rem;
  text-align: center;
  cursor: pointer;
  position: relative;
  transition: border-color 0.2s, background 0.2s;
}

.drop-zone:hover {
  border-color: rgba(167, 139, 250, 0.5);
  background: rgba(124, 58, 237, 0.08);
}

.drop-zone input[type="file"] {
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
}

.drop-preview {
  display: none;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  padding: 8px 10px;
  background: rgba(167, 139, 250, 0.12);
  border: 1px solid rgba(167, 139, 250, 0.25);
  border-radius: 8px;
}

.drop-preview img {
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 6px;
}

.drop-preview span {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
}

.save-btn {
  width: 100%;
  margin-top: 1.5rem;
  padding: 11px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #7c3aed, #ec4899);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
  letter-spacing: 0.01em;
  position: relative;
  overflow: hidden;
  transition: opacity 0.2s, transform 0.1s;
}

.save-btn::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #ec4899, #06b6d4);
  opacity: 0;
  transition: opacity 0.3s;
}

.save-btn span {
  position: relative;
  z-index: 1;
}

.save-btn:hover::after {
  opacity: 1;
}

.save-btn:active {
  transform: scale(0.98);
}
        </style>




<!-- HTML -->
<div class="profile-wrapper">
  <form class="profile-card" id="perfilForm">
    <p class="profile-title">Editar perfil</p>

    <div class="field-group">
      <label class="field-label" for="nombreInput">Nombre</label>
      <input class="field-input" type="text" id="nombreInput" name="nombre" placeholder="Tu nombre completo" required />
    </div>

    <div class="field-group">
      <label class="field-label" for="bioInput">Biografía</label>
      <textarea class="field-textarea" id="bioInput" name="bio" placeholder="Cuéntanos un poco sobre ti..." required></textarea>
    </div>

    <div class="field-group">
      <label class="field-label">Imagen de perfil</label>
      <div class="drop-zone" id="dropZone">
        <input type="file" accept="image/*" id="fileInput" name="fotoPerfil" required />
      </div>

      <div class="drop-preview" id="preview">
        <img id="previewImg" src="" alt="preview" />
        <span id="previewName"></span>
      </div>
    </div>

    <button type="submit" class="save-btn" id="submitBtn">
      <span>Guardar perfil</span>
    </button>
  </form>
</div> `
    }
}

customElements.define('my-perfil', myPerfil);