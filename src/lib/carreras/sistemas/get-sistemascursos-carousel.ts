import { query } from "@/lib/strapi";

export const getSistemasCursos = async () => {
  return query(
    "carrera-sistema?fields[0]=locale&populate[malla][populate][cursos]=*"
  ).then((res) => res.data);
};
