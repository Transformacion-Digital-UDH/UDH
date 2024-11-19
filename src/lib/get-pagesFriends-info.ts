import { query } from "@/lib/strapi"

export const getPagesFriendsInfo = async () => {
    return query('home?fields[0]=locale&populate[paginas_amigas][populate][imagen][fields]=url,name')
        .then(res => {
            return res.data
        })
}