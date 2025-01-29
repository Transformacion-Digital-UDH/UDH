import { query } from "@/lib/strapi"
import { useSelectStore } from "@/stores/select";

export const getInformationCareer = async () => {
    const selectStore = useSelectStore();
    return query(`carrera-sistema?locale=${selectStore.language}&populate[informacion][populate][data][populate][icono][fields]=url,name`)
        .then(res => {
            return res.data
        })
}