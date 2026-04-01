import { Perfil } from "../bd/perfil"


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