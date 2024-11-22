import { query } from "@/lib/strapi"

export const getCharacter = async () => {
    return query('home?fields[0]=locale&populate[caracteristicas][populate][icono][fields]=url,name')
        .then(res => {
            return res.data
        })
}