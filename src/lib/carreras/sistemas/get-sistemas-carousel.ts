import { query } from "@/lib/strapi";

export const getCarreraCarousel = async () => {
  return query(
    "carrera-sistema?fields[0]=locale&populate[imagenes_carousel][populate][imagen][fields]=url,name"
  ).then((res) => res.data);
};
