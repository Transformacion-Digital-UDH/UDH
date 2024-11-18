import { query } from "@/lib/strapi"

export const getHeaderInfo = async () => {
    return query('settings-page?fields[0]=nombreSitio&fields[1]=correoBoletin&fields[2]=link_login&populate[redes_sociales][populate][icono][fields]=url,name&populate[logoudh][fields]=url,name')
        .then(res => {
            return res.data
        })
}