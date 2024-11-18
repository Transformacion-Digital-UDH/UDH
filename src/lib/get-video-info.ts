import { query } from "@/lib/strapi";

export const getVideoInfo = async () => {
  return query(
    "home?fields[0]=locale&populate[video_principal][populate][imagen_fondo][fields]=url,name"
  ).then((res) => res.data);
};
