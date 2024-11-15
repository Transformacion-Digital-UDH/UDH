import { query } from "@/lib/strapi"

export const getSettingsPage = async () => {
    return query('settings-page?fields[0]=nombreSitio&fields[1]=correoBoletin&fields[2]=link_login&fields[3]=numero_whatsapp&fields[4]=mensaje_whatsapp&fields[5]=locale&populate[favicon][fields]=url,name&populate[config_seo]=*&populate[contactos]=*&populate[redes_sociales][populate][icono][fields]=url,name&populate[logoudh][fields]=url,name&populate[logoudh_white][fields]=url,name&populate[enlaces_interes]=*')
        .then(res => {
            return res.data
        })
}