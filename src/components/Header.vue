<template>
    <header class="relative">
        <!-- Header Top -->
        <HeaderTop v-if="!isScrolledPast" />
        
        <!-- Spacer div to prevent content jump -->
        <div v-if="isScrolledPast" :style="{ height: navHeight + 'px' }"></div>
        
        <!-- Main Navigation -->
        <nav 
            ref="navRef"
            :class="[
                'bg-white py-0 w-full px-1 lg:px-6 md:px-2 sm:px-5 xs:px-0 shadow-lg transition-all duration-300',
                { 'fixed top-0 left-0 right-0 z-50': isScrolledPast }
            ]"
        >
            <div class="mx-auto max-w-full px-4 ">
                <div class="flex items-center justify-between lg:justify-center font-epilogue">
                    <!-- Logo -->
                    <a href="#" class="shrink-0 py-4 lg:py-2">
                        <img src="/logo.png" alt="logo" class="w-[180px]">
                    </a>

                    <!-- Desktop Navigation -->
                    <nav class="hidden lg:block">
                        <ul class="flex items-center gap-2">
                            <!-- Navigation Items -->
                            <NavItem title="Investigación">
                                <template #dropdown>
                                    <div class="w-48">
                                        <NavDropdownLink href="#">Revisión científica</NavDropdownLink>
                                        <NavDropdownLink href="#">Repositorio</NavDropdownLink>
                                        <NavDropdownLink href="#">Vicerrectorado de investigación</NavDropdownLink>
                                    </div>
                                </template>
                            </NavItem>

                            <NavItem title="Carreras" position="-left-32">
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
                                    <div class="w-48">
                                        <NavDropdownLink href="#">Maestrías</NavDropdownLink>
                                        <NavDropdownLink href="#">Doctorados</NavDropdownLink>
                                        <NavDropdownLink href="#">Segunda especialidad</NavDropdownLink>
                                    </div>
                                </template>
                            </NavItem>

                            <NavItem title="Admisión">
                                <template #dropdown>
                                    <div class="w-48">
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
                            <li class="flex items-center gap-2 ml-4">
                                <button class="p-2 text-gray-custom hover:text-green-custom">
                                    <IconSearch class="w-5 h-5" />
                                </button>
                                <ButtonPrimary label="Ingresar" class="px-7 py-[10px]"/>
                            </li>
                        </ul>
                    </nav>

                    <!-- Mobile Navigation -->
                    <div class="flex items-center gap-4 lg:hidden">
                        <button class="p-2 text-gray-custom hover:text-green-custom">
                            <IconSearch class="w-6 h-6" />
                        </button>
                        <button 
                            class="p-2 text-gray-custom hover:text-green-custom"
                            @click="toggleMobileMenu"
                        >
                            <IconMenu2 class="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Mobile Menu -->
        <MobileMenu 
            v-if="isMobileMenuOpen" 
            @close="closeMobileMenu" 
        />
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { IconSearch, IconMenu2 } from '@tabler/icons-vue';
import HeaderTop from '@/components/HeaderTop.vue';
import NavItem from '@/components/navigation/NavItem.vue';
import NavDropdownLink from '@/components/navigation/NavDropdownLink.vue';
import NavDropdownColumn from '@/components/navigation/NavDropdownColumn.vue';
import NavNestedDropdown from '@/components/navigation/NavNestedDropdown.vue';
import NavNestedItem from '@/components/navigation/NavNestedItem.vue';
import MobileMenu from '@/components/navigation/MobileMenu.vue';
import ButtonPrimary from '@/components/ButtonPrimary.vue';

const navRef = ref(null);
const navHeight = ref(0);
const isScrolledPast = ref(false);
const isMobileMenuOpen = ref(false);

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

<style scoped>

</style>