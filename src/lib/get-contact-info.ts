import { query } from "@/lib/strapi"

export const getContactInfo = async () => {
    return query('settings-page?fields[0]=locale&populate[contactos]=*&populate[logoudh_white][fields]=url,name&populate[enlaces_interes]=*')
        .then(res => {
            return res.data
        })
}