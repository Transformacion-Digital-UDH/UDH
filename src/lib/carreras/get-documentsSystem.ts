import { query } from "@/lib/strapi"
import { useSelectStore } from "@/stores/select";

export const getDocumentsSystem = async () => {
  const selectStore = useSelectStore();

    return query(`carrera-sistema?locale=${selectStore.language}&fields[0]=locale&populate[documentos]=*`)
        .then(res => {
            return res.data
        })
}