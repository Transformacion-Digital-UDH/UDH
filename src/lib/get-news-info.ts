import { query } from "@/lib/strapi";

export const getNewsInfo = async () => {
  return query(
    "settings-page?fields[0]=nombreSitio&fields[1]=correoBoletin&populate[enlaces_interes]=*"
  ).then((res) => res.data);
};
