import { query } from "@/lib/strapi"

export const getCharacterSystem = async () => {
    return query('carrera-sistema?fields[0]=locale&populate[caracteristicas][populate][data][populate][icono][fields]=url,name')
        .then(res => {
            return res.data
        })
}