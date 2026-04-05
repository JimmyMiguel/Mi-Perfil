import { Perfil } from "../bd/perfil"
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';
 

export const perfilController =  async (nombre:string, biografia:string, imagen:string) => {
    try {
        const perfil = await Perfil.create({
            nombre,
            biografia,
            imagen
        })
        return perfil
    } catch (error) {
        console.error(error)
        throw new Error("Error al crear el perfil")
    }
}

export const getPerfilController = async () => {
try {
    const perfil = await Perfil.findAll()
    return perfil
} catch (error) {
    console.error(error)
    throw new Error("Error al obtener el perfil")
}
}

