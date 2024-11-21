import { query } from "@/lib/strapi"

export const getInformationCareer = async () => {
    return query('carrera-sistema?fields[0]=locale&populate[informacion][populate][data][populate][icono][fields]=url,name')
        .then(res => {
            return res.data
        })
}