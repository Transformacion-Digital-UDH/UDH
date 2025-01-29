import { query } from "@/lib/strapi"
import { useSelectStore } from "@/stores/select";

export const getCharacterSystem = async () => {
    const selectStore = useSelectStore();
    return query(`carrera-sistema?locale=${selectStore.language}&fields[0]=locale&populate[caracteristicas][populate][data][populate][icono][fields]=url,name`)	
        .then(res => {
            return res.data
        })
}