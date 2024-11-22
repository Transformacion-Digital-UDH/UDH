import { query } from "@/lib/strapi"

export const getButtonFloat = async () => {
    return query('settings-page?fields[1]=numero_whatsapp&fields[2]=mensaje_whatsapp')
        .then(res => {
            return res.data
        })
}