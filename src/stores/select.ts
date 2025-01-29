import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useSelectStore = defineStore("select", () => {
    const language = ref("es-PE");
    const sede = ref("hco");
    const router = useRouter();

    const changeLanguage = async (lang: string) => {
        if (language.value !== lang) {
            language.value = lang;
        }
        router.go(0);
    }

    const changeSede = async (loc: string) => {
        if (sede.value !== loc) {
            sede.value = loc;
        }
    }

    return {
        language,
        sede,
        changeLanguage,
        changeSede
    }
}, {
    persist: true
});