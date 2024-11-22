import { query } from "@/lib/strapi"

export const getAboutUs = async () => {
    return query('home?fields[0]=locale&populate[nosotros][populate][beneficios][populate][icono][fields]=url,name&populate[nosotros][populate][imagen][fields]=url,name')
        .then(res => {
            return res.data
        })
}