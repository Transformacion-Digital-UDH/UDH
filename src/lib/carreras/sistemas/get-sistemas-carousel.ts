import { query } from "@/lib/strapi";
import { useSelectStore } from "@/stores/select";

export const getSistemasCarousel = async () => {
  const selectStore = useSelectStore();
  return query(
    `carrera-sistema?locale=${selectStore.language}&fields[0]=locale&populate[imagenes_carousel][populate][imagen][fields]=url,name`
  ).then((res) => res.data);
};
