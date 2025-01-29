import { query } from "@/lib/strapi";
import { useSelectStore } from "@/stores/select";


export const getNewsInfo = async () => {
  const selectStore = useSelectStore();
  return query(
    `home?locale=${selectStore.language}&fields[0]=locale&populate[noticias]=*`
  ).then((res) => res.data);
};
