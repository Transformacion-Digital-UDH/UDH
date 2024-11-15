import { query } from "@/lib/strapi"

export const getHomeInfo = async () => {
    return query('home?fields[0]=locale&populate[imagenes_carousel][populate][imagen][fields]=url,name&populate[video_principal][populate][imagen_fondo][fields]=url,name&populate[caracteristicas][populate][icono][fields]=url,name&populate[datos_numericos][populate][icono][fields]=url,name&populate[paginas_amigas][populate][imagen][fields]=url,name&populate[noticias]=*&populate[nosotros][populate][imagen][fields]=url,name&populate[nosotros][populate][beneficios][populate][icono][fields]=url,name')
        .then(res => {
            return res.data
        })
}