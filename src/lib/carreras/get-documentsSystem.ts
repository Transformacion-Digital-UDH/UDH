import { query } from "@/lib/strapi"

export const getDocumentsSystem = async () => {
    return query('carrera-sistema?fields[0]=locale&populate[documentos]=*')
        .then(res => {
            return res.data
        })
}