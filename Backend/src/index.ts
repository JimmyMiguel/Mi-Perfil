import Express, { response, request } from "express";
import { sequelize } from "./bd";
import dotenv from "dotenv"
import { Perfil } from "./bd/perfil";
import cors from 'cors'
import { perfilController, getPerfilController } from "./controllers/controllers";
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';
const app = Express()

app.use(cors());

app.use(Express.json());


const port = process.env.PORT || 3000



async function bootstrap() {
  try {
    //comprobamos que se ha conectado con Neon nuestra base de datos 
    await sequelize.authenticate()
    console.log("Conexion con Neon exitosa")
    //configuramos para que se actualiza cuando hacemos una accion
    await sequelize.sync({ alter: true })
    console.log('🚀 Modelos sincronizados con la base de datos.');

    app.listen(port, () => {
      console.log("Servidor corriendo en el puesto", port)
    })


  } catch (err) {
    console.error("❌ Error crítico al iniciar:", err);
    process.exit(1); // Cerramos el proceso si no hay DB
  }

}

bootstrap()


app.post('/perfil', async (req, res) => {


  const { nombre, biografia, imagen } = req.body
  if (!nombre || !biografia || !imagen) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' })
  } else {
    const perfil = await perfilController(nombre, biografia, imagen)
    res.status(200).json(perfil)
  }
})


app.get('/perfil', async (req, res) => {
  const perfil = await getPerfilController()
  res.status(200).json(perfil)
})