import { query } from "@/lib/strapi";
import { useSelectStore } from "@/stores/select";

export const getSistemasCursos = async () => {
  const selectStore = useSelectStore();
  return query(
    `carrera-sistema?locale=${selectStore.language}&fields[0]=locale&populate[malla][populate][cursos]=*`
  ).then((res) => res.data);
};
