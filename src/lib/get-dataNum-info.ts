import { query } from "@/lib/strapi"

export const getdataNumtInfo = async () => {
    return query('home?fields[0]=locale&populate[datos_numericos][populate][icono][fields]=url,name')
        .then(res => {
            return res.data
        })
}