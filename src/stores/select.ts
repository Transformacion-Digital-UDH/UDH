import { defineStore } from "pinia";
import { ref } from "vue";

export const useSelectStore = defineStore("select", () => {
    const language = ref("es-PE");
    const sede = ref("hco");

    const changeLanguage = async (lang: string) => {
        if (language.value !== lang) {
            language.value = lang;
        }
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