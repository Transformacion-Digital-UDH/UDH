import { query } from "@/lib/strapi"

export const getSystemVideo = async () => {
    return query('carrera-sistema?fields[0]=locale&populate[video][populate][imagen_fondo][fields]=url,name')
        .then(res => {
            return res.data
        })
}