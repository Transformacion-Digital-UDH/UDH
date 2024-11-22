import { query } from "@/lib/strapi"

export const getSystemLogo = async () => {
    return query('carrera-sistema?fields[0]=locale&populate[logo_carrera][fields]=url,name')
        .then(res => {
            return res.data
        })
}