import { query } from "@/lib/strapi";

export const getCarouselInfo = async () => {
  return query(
    "home?fields[0]=locale&populate[imagenes_carousel][populate][imagen][fields]=url,name"
  ).then((res) => res.data);
};
