<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ButtonMultiple from "@/components/ButtonMultiple.vue";
import { getSeoConfigInfo } from "@/lib/get-seo-config-info";
import { onMounted, ref, watch } from 'vue';

// Tipos para mayor seguridad
interface Favicon {
    url?: string;
}

interface SeoConfig {
    meta_description?: string;
    meta_keywords?: string;
    meta_og_url?: string;
    meta_og_type?: string;
    meta_og_sitename?: string;
    meta_og_title?: string;
    meta_title?: string;
    meta_application_name?: string;
}

// Inicializar refs con tipos
const nombreSitio = ref<string | null>(null);
const favicon = ref<Favicon>({});
const config_seo = ref<SeoConfig>({});

const updateSeoTags = () => {
    if (!config_seo.value) return;

    const metaTags = [
        { selector: 'meta[name="description"]', attr: 'name', value: config_seo.value.meta_description },
        { selector: 'meta[name="keywords"]', attr: 'name', value: config_seo.value.meta_keywords },
        { selector: 'meta[property="og:url"]', attr: 'property', value: config_seo.value.meta_og_url },
        { selector: 'meta[property="og:type"]', attr: 'property', value: config_seo.value.meta_og_type },
        { selector: 'meta[property="og:site_name"]', attr: 'property', value: config_seo.value.meta_og_sitename },
        { selector: 'meta[property="og:title"]', attr: 'property', value: config_seo.value.meta_og_title },
        { selector: 'meta[name="application-name"]', attr: 'name', value: config_seo.value.meta_application_name },
    ];

    // Actualizar el título del documento
    if (config_seo.value.meta_title) {
        document.title = config_seo.value.meta_title;
    }

    // Actualizar favicon
    if (favicon.value?.url) {
        const urlCompleteFavicon = new URL(
            favicon.value.url,
            import.meta.env.VITE_API_URL_STRAPI
        ).toString();

        const faviconTag = document.querySelector('link[rel="icon"]') ||
            document.createElement('link');

        faviconTag.setAttribute('rel', 'icon');
        faviconTag.setAttribute('href', urlCompleteFavicon);

        if (!document.querySelector('link[rel="icon"]')) {
            document.head.appendChild(faviconTag);
        }
    }

    // Actualizar metatags dinámicos
    metaTags.forEach(({ selector, attr, value }) => {
        if (!value) return;

        const metaTag = document.querySelector(selector) || document.createElement('meta');
        metaTag.setAttribute(attr, selector.match(/["](.*?)["]/)?.[1] || '');
        metaTag.setAttribute('content', value);

        if (!document.querySelector(selector)) {
            document.head.appendChild(metaTag);
        }
    });
};

const fetchSettings = async () => {
    try {
        const seoConfigInfo = await getSeoConfigInfo();

        nombreSitio.value = seoConfigInfo.nombreSitio ?? null;
        favicon.value = seoConfigInfo.favicon ?? {};
        config_seo.value = seoConfigInfo.config_seo ?? {};
    } catch (error) {
        console.error("Error fetching settings data:", error);
        // Aquí podrías manejar el error de una manera más específica
    }
};

onMounted(async () => {
    await fetchSettings();
    updateSeoTags();
});

// Observar cambios profundos en config_seo
watch(() => config_seo.value, updateSeoTags, { deep: true });
</script>
<template>
    <Header />
    <slot />
    <Footer />
    <ButtonMultiple />
</template>