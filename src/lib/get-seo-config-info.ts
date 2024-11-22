import { query } from "@/lib/strapi"

export const getSeoConfigInfo = async () => {
    return query('settings-page?fields[0]=nombreSitio&fields[1]=correoBoletin&fields[2]=numero_whatsapp&fields[3]=mensaje_whatsapp&fields[5]=locale&populate[favicon][fields]=url,name&populate[config_seo]=*')
        .then(res => {
            return res.data
        })
}