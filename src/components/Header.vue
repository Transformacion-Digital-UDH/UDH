<template>
    <header class="relative">
        <!-- Header Top -->
        <HeaderTop v-if="!isScrolledPast" :redes_sociales="redes_sociales" />

        <!-- Spacer div to prevent content jump -->
        <div v-if="isScrolledPast" :style="{ height: navHeight + 'px' }"></div>

        <!-- Main Navigation -->
        <nav ref="navRef" :class="[
            'bg-white py-0 w-full px-2 lg:px-6 sm:px-6  md:px-4 shadow-lg transition-all duration-300',
            { 'fixed top-0 left-0 right-0 z-50': isScrolledPast }
        ]">
            <div class="mx-auto max-w-full px-3 ">
                <div class="flex items-center justify-between xl:justify-center font-epilogue font-semibold">
                    <!-- Logo -->
                    <a href="/" class="shrink-0 py-4 lg:py-3 mr-4">
                        <img :src="`${baseApiUrl}${logoudh.url}`" :alt="logoudh.name"
                            class="w-[90px] md:w-[120px] lg:w-[140px] xl:w-[150px]">
                    </a>

                    <!-- Desktop Navigation -->
                    <nav class="hidden xl:block">
                        <ul class="flex items-center gap-2">
                            <!-- Navigation Items -->
                            <NavItem title="Investigación">
                                <template #dropdown>
                                    <div class="w-72">
                                        <NavDropdownLink href="https://copiloto.udh.edu.pe/">Copiloto</NavDropdownLink>
                                        <NavDropdownLink href="https://tucoach.udh.edu.pe/">Tu coach</NavDropdownLink>
                                        <NavDropdownLink href="https://sigep.udh.edu.pe/">Sigep</NavDropdownLink>
                                        <NavDropdownLink href="https://repositorio.udh.edu.pe/">Repositorio
                                        </NavDropdownLink>
                                        <NavDropdownLink href="https://investigacion.udh.edu.pe/">Vicerrectorado de
                                            investigación</NavDropdownLink>
                                    </div>
                                </template>
                            </NavItem>

                            <NavItem title="Carreras" position="-left-48">
                                <template #dropdown>
                                    <div class="grid grid-cols-4 w-[1000px] p-4 gap-3">
                                        <NavDropdownColumn title="ciencias de la salud">
                                            <NavDropdownLink href="#">Obstetricia</NavDropdownLink>
                                            <NavDropdownLink href="#">Psicología</NavDropdownLink>
                                            <NavDropdownLink href="#">Enfermeria</NavDropdownLink>
                                            <NavDropdownLink href="#">Odontologia</NavDropdownLink>
                                        </NavDropdownColumn>
                                        <NavDropdownColumn title="ingeniería">
                                            <NavDropdownLink href="/carrera/sistemas-e-informatica">Ingenieria de
                                                sistemas e informática</NavDropdownLink>
                                            <NavDropdownLink href="#">Ingenieria civil</NavDropdownLink>
                                            <NavDropdownLink href="#">Ingenieria ambiental</NavDropdownLink>
                                            <NavDropdownLink href="#">Arquitectura</NavDropdownLink>
                                        </NavDropdownColumn>
                                        <NavDropdownColumn title="ciencias de la educación y humanidades">
                                            <NavDropdownLink href="#">Educación básica: Inicial y primaria
                                            </NavDropdownLink>
                                            <p class="uppercase text-green-custom pt-5">DERECHO Y CIENCIAS POLITICAS</p>
                                            <NavDropdownLink href="#">Derecho y ciencias politicas</NavDropdownLink>
                                        </NavDropdownColumn>
                                        <NavDropdownColumn title="ciencias empresariales">
                                            <NavDropdownLink href="#">Administración de empresas</NavDropdownLink>
                                            <NavDropdownLink href="#">Contabilidad y finanzas</NavDropdownLink>
                                            <NavDropdownLink href="#">Turismo, hoteleria y gastronomia</NavDropdownLink>
                                            <NavDropdownLink href="#">Marketing y negocios internacionales
                                            </NavDropdownLink>
                                        </NavDropdownColumn>
                                    </div>
                                </template>
                            </NavItem>

                            <NavItem title="Semipresencial">
                                <template #dropdown>
                                    <NavNestedDropdown>
                                        <NavNestedItem title="Ciencias de la salud">
                                            <template #submenu>
                                                <NavDropdownLink href="#">Psicología</NavDropdownLink>
                                            </template>
                                        </NavNestedItem>
                                        <NavNestedItem title="Ciencias empresariales">
                                            <template #submenu>
                                                <NavDropdownLink href="#">Administración de empresas</NavDropdownLink>
                                                <NavDropdownLink href="#">Contabilidad y finanzas</NavDropdownLink>
                                            </template>
                                        </NavNestedItem>
                                        <NavNestedItem title="Derecho y ciencias políticas">
                                            <template #submenu>
                                                <NavDropdownLink href="#">Derecho y ciencias políticas</NavDropdownLink>
                                            </template>
                                        </NavNestedItem>
                                    </NavNestedDropdown>
                                </template>
                            </NavItem>

                            <NavItem title="Postgrado">
                                <template #dropdown>
                                    <div class="w-60">
                                        <NavDropdownLink href="#">Maestrías</NavDropdownLink>
                                        <NavDropdownLink href="#">Doctorados</NavDropdownLink>
                                        <NavDropdownLink href="#">Segunda especialidad</NavDropdownLink>
                                    </div>
                                </template>
                            </NavItem>

                            <NavItem title="Admisión">
                                <template #dropdown>
                                    <div class="w-64">
                                        <NavDropdownLink href="#">Modalidades y costos</NavDropdownLink>
                                        <NavDropdownLink href="#">Guía</NavDropdownLink>
                                        <NavDropdownLink href="#">Matrícula y pensiones</NavDropdownLink>
                                        <NavDropdownLink href="#">Requisitos</NavDropdownLink>
                                        <NavDropdownLink href="#">Preguntas frecuentes</NavDropdownLink>
                                    </div>
                                </template>
                            </NavItem>
                            <NavItem title="Nosotros" position="-right-20">
                                <template #dropdown>
                                    <div class="grid grid-cols-3 w-[900px] p-4 gap-4">
                                        <NavDropdownColumn>
                                            <NavDropdownLink href="#">Sobre UDH</NavDropdownLink>
                                            <NavDropdownLink href="#">Biblioteca virtual</NavDropdownLink>
                                            <NavDropdownLink href="#">Transparencia universitaria</NavDropdownLink>
                                            <NavDropdownLink href="#">Biblioteca UDH</NavDropdownLink>
                                        </NavDropdownColumn>
                                        <NavDropdownColumn>
                                            <NavDropdownLink href="#">Nuestras facultades</NavDropdownLink>
                                            <NavDropdownLink href="#">Centro de idioma</NavDropdownLink>
                                            <NavDropdownLink href="#">Nuestras sedes</NavDropdownLink>
                                            <NavDropdownLink href="#">Defensoría universitaria</NavDropdownLink>
                                        </NavDropdownColumn>
                                        <NavDropdownColumn>
                                            <NavDropdownLink href="#">Bienestar universitario</NavDropdownLink>
                                            <NavDropdownLink href="#">Calendario académico</NavDropdownLink>
                                            <NavDropdownLink href="#">Trámites</NavDropdownLink>
                                            <NavDropdownLink href="#">Contactos</NavDropdownLink>
                                        </NavDropdownColumn>
                                    </div>
                                </template>
                            </NavItem>

                            <!-- Utilities -->
                            <li class="flex items-center gap-1 ml-4">
                                <div v-if="lang === 'es-PE'" class="flex items-center gap-1">
                                    <img @click="changeLanguage('en')" src="/src/assets/icons/flag-peru.svg" alt="flag"
                                        class="w-6 h-6 cursor-pointer">
                                    <p>ES</p>
                                </div>
                                <div v-else class="flex items-center gap-1">
                                    <img @click="changeLanguage('es-PE')" src="/src/assets/icons/flasg-us.svg"
                                        alt="flag" class="w-6 h-6 cursor-pointer">
                                    <p>EN</p>
                                </div>
                                <Search />
                                <LinkPrimarySecondEffect label="Ingresar" class="px-7 py-[10px] w-[110px]"
                                    :hrefHref="link_login" />
                            </li>
                        </ul>
                    </nav>

                    <!-- Mobile Navigation -->
                    <div class="flex items-center gap-4 xl:hidden">
                        <img @click="changeLanguage('en')" v-if="lang === 'es-PE'" src="/src/assets/icons/flag-peru.svg"
                            alt="flag" class="w-6 h-6 cursor-pointer">
                        <img @click="changeLanguage('es-PE')" v-else src="/src/assets/icons/flasg-us.svg" alt="flag"
                            class="w-6 h-6 cursor-pointer">
                        <Search />
                        <button class="p-2 text-gray-custom hover:text-green-custom" @click="toggleMobileMenu">
                            <IconMenu2 class="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Mobile Menu -->
        <MobileMenu v-if="isMobileMenuOpen" @close="closeMobileMenu" :link_login="link_login" />
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { IconMenu2, IconLanguage } from '@tabler/icons-vue';
import HeaderTop from '@/components/HeaderTop.vue';
import NavItem from '@/components/navigation/NavItem.vue';
import NavDropdownLink from '@/components/navigation/NavDropdownLink.vue';
import NavDropdownColumn from '@/components/navigation/NavDropdownColumn.vue';
import NavNestedDropdown from '@/components/navigation/NavNestedDropdown.vue';
import NavNestedItem from '@/components/navigation/NavNestedItem.vue';
import MobileMenu from '@/components/navigation/MobileMenu.vue';
import LinkPrimarySecondEffect from '@/components/LinkPrimarySecondEffect.vue';
import Search from '@/components/Search.vue';
import { useSelectStore } from "@/stores/select";
import { getHeaderInfo } from '@/lib/get-header-info';

const navRef = ref(null);
const navHeight = ref(0);
const isScrolledPast = ref(false);
const lang = ref('');
const isMobileMenuOpen = ref(false);

// definir variables para los datos referentes de los campos de la API
const redes_sociales = ref([]);
const contactos = ref([]);
const logoudh = ref({});
const link_login = ref(null);

const baseApiUrl = import.meta.env.VITE_API_URL_STRAPI;

// funcion para obtener los datos de la API y asignarlos a las variables
const fetchSettings = async () => {
    try {
        const headerInfo = await getHeaderInfo();

        redes_sociales.value = headerInfo.redes_sociales || [];
        contactos.value = headerInfo.contactos || [];
        logoudh.value = headerInfo.logoudh || null;
        link_login.value = headerInfo.link_login || null;
    } catch (error) {
        console.error("Error fetching settings data:", error);
    }
};

// cargo los datos recibido de la API
onMounted(async () => {
    await fetchSettings();
});

const selectStore = useSelectStore();
lang.value = selectStore.language;

const changeLanguage = async (language) => {
    await selectStore.changeLanguage(language);
    lang.value = language;
}

const updateNavHeight = () => {
    if (navRef.value) {
        navHeight.value = navRef.value.offsetHeight;
    }
};

const handleScroll = () => {
    isScrolledPast.value = window.scrollY > 40;
};

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false;
};

onMounted(() => {
    updateNavHeight();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateNavHeight);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', updateNavHeight);
});
</script>

<style scoped></style>