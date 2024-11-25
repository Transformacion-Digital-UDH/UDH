import { query } from "@/lib/strapi";

export const getEventsInfo = async () => {
  return query("events?populate[imagen][fields]=url,name&filters[estado][$eq]=publicado").then((res) => res.data);
};
