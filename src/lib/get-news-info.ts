import { query } from "@/lib/strapi";

export const getNewsInfo = async () => {
  return query(
    "home?fields[0]=locale&populate[noticias]=*"
  ).then((res) => res.data);
};
