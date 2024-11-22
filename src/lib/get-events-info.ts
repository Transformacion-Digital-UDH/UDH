import { query } from "@/lib/strapi";

export const getEventsInfo = async () => {
  return query("events?populate[imagen][fields]=url,name").then((res) => res.data);
};
