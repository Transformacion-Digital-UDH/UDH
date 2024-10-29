<template>
    <header>
        <!-- header top -->
        <HeaderTop />

        <!-- main navigation -->
        <nav class="bg-white py-0 z-20 w-full px-1 lg:px-6 md:px-2 sm:px-5 xs:px-10 shadow-md">
            <div class="flex flex-nowrap items-center justify-between lg:justify-center">
                <!-- logo -->
                <a href="#" class="m-2 lg:m-0">
                    <img src="/logo.png" alt="logo" class="w-[180px]">
                </a>

                <!-- navigation desktop -->
                <div class="block md:hidden lg:block sm:hidden xs:hidden">
                    <div
                        class="flex basis-auto items-center flex-grow justify-between mx-4 font-semibold font-epilogue text-base w-full">
                        <ul class="p-0 m-0 flex gap-3 items-center">
                            <li class="items-center relative group">
                                <a href="#" class="flex gap-1 hover:text-green-custom items-center py-10">
                                    Investigación
                                    <IconChevronDown size="18" />
                                </a>
                                <div
                                    class="dropdown border-t-4 border-green-custom absolute top-full left-0 bg-gray-custom text-white shadow-lg z-50">
                                    <a href="#" class="block py-2 hover:text-green-custom">Revisión científica</a>
                                    <a href="#" class="block py-2 hover:text-green-custom">Repositorio</a>
                                    <a href="#" class="block py-2 hover:text-green-custom">Vicerrectorado de
                                        investigación</a>
                                </div>
                            </li>

                            <li class="items-center relative group">
                                <a href="#" class="flex gap-1 hover:text-green-custom items-center py-10">
                                    Carreras
                                    <IconChevronDown size="18" />
                                </a>
                                <div
                                    class="dropdown border-t-4 border-green-custom absolute top-full left-0 bg-gray-custom text-white shadow-lg z-50">
                                    <div class="columns-3">
                                        <div class="w-1/2">
                                            <a href="#" class="block py-2 hover:text-green-custom">Sobre UDH</a>
                                            <a href="#" class="block py-2 hover:text-green-custom">Biblioteca
                                                virtual</a>
                                            <a href="#" class="block py-2 hover:text-green-custom">Transparencia
                                                universitaria</a>
                                            <a href="#" class="block py-2 hover:text-green-custom">Biblioteca UDH</a>
                                        </div>
                                        <div class="w-1/2">
                                            <a href="#" class="block py-2 hover:text-green-custom">Nuestras
                                                facultades</a>
                                            <a href="#" class="block py-2 hover:text-green-custom">Centro de idioma</a>
                                            <a href="#" class="block py-2 hover:text-green-custom">Nuestras sedes</a>
                                            <a href="#" class="block py-2 hover:text-green-custom">Defensoría
                                                universitaria</a>
                                            <a href="#" class="block py-2 hover:text-green-custom">Servicios
                                                sociales</a>
                                        </div>
                                        <div class="w-1/2">
                                            <a href="#" class="block py-2 hover:text-green-custom">Bienestar
                                                universitaria</a>
                                            <a href="#" class="block py-2 hover:text-green-custom">Calendario
                                                académico</a>
                                            <a href="#" class="block py-2 hover:text-green-custom">Trámites</a>
                                            <a href="#" class="block py-2 hover:text-green-custom">Contactos</a>
                                            <a href="#" class="block py-2 hover:text-green-custom">Laboratorios</a>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li class="items-center relative group">
                                <a href="#" class="flex gap-1 hover:text-green-custom items-center py-10">
                                    Semipresencial
                                    <IconChevronDown size="18" />
                                </a>
                                <div
                                    class="dropdown border-t-4 border-green-custom absolute top-full left-0 bg-gray-custom text-white shadow-lg z-50">
                                    <div class="items-center relative group">
                                        <a href="#" class="block py-2 hover:text-green-custom">
                                            <div class="flex justify-between">
                                                Ciencias de la salud
                                                <IconChevronRight size="18" />
                                            </div>
                                        </a>
                                        <div
                                            class="dropdown dropdown-submenu border-t-4 border-green-custom absolute top-0 left-full bg-gray-custom text-white shadow-lg z-50">
                                            <a href="#" class="block py-2 hover:text-green-custom">Psicología</a>
                                        </div>
                                    </div>
                                    <div class="items-center relative group">
                                        <a href="#" class="block py-2 hover:text-green-custom">
                                            <div class="flex justify-between">
                                                Ciencias empresariales
                                                <IconChevronRight size="18" />
                                            </div>
                                        </a>
                                        <div
                                            class="dropdown dropdown-submenu border-t-4 border-green-custom absolute top-0 left-full bg-gray-custom text-white shadow-lg z-50">
                                            <a href="#" class="block py-2 hover:text-green-custom">Administración de
                                                empresas</a>
                                            <a href="#" class="block py-2 hover:text-green-custom">Contabilidad y
                                                finanzas</a>
                                        </div>
                                    </div>
                                    <div class="items-center relative group">
                                        <a href="#" class="block py-2 hover:text-green-custom">
                                            <div class="flex justify-between">
                                                Derecho y ciencias políticas
                                                <IconChevronRight size="18" />
                                            </div>
                                        </a>
                                        <div
                                            class="dropdown dropdown-submenu border-t-4 border-green-custom absolute top-0 left-full bg-gray-custom text-white shadow-lg z-50">
                                            <a href="#" class="block py-2 hover:text-green-custom">Derecho y ciencias
                                                políticas</a>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li class="items-center relative group">
                                <a href="#" class="flex gap-1 hover:text-green-custom items-center py-10">
                                    Postgrado
                                    <IconChevronDown size="18" />
                                </a>
                                <div
                                    class="dropdown border-t-4 border-green-custom absolute top-full left-0 bg-gray-custom text-white shadow-lg z-50">
                                    <a href="#" class="block py-2 hover:text-green-custom">Maestrias</a>
                                    <a href="#" class="block py-2 hover:text-green-custom">Doctorados</a>
                                    <a href="#" class="block py-2 hover:text-green-custom">Segunda especialidad</a>
                                </div>
                            </li>

                            <li class="items-center relative group">
                                <a href="#" class="flex gap-1 hover:text-green-custom items-center py-10">
                                    Admisión
                                    <IconChevronDown size="18" />
                                </a>
                                <div
                                    class="dropdown border-t-4 border-green-custom absolute top-full left-0 bg-gray-custom text-white shadow-lg z-50">
                                    <a href="#" class="block py-2 hover:text-green-custom">Modalidades y costos</a>
                                    <a href="#" class="block py-2 hover:text-green-custom">Guía</a>
                                    <a href="#" class="block py-2 hover:text-green-custom">Matrícula y pensiones</a>
                                    <a href="#" class="block py-2 hover:text-green-custom">Requisitos</a>
                                    <a href="#" class="block py-2 hover:text-green-custom">Preguntas frecuentes</a>
                                    <a href="#" class="block py-2 hover:text-green-custom">Documentos</a>
                                </div>
                            </li>

                            <li class="items-center relative group">
                                <a href="#" class="flex gap-1 hover:text-green-custom items-center py-10">
                                    Nosotros
                                    <IconChevronDown size="18" />
                                </a>
                                <div
                                    class="dropdown border-t-4 border-green-custom absolute top-full right-0 bg-gray-custom text-white shadow-lg z-50">
                                    <div class="columns-3">
                                        <div class="w-1/2">
                                            <a href="#" class="block py-2 hover:text-green-custom">Sobre UDH</a>
                                            <a href="#" class="block py-2 hover:text-green-custom">Biblioteca
                                                virtual</a>
                                            <a href="#" class="block py-2 hover:text-green-custom">Transparencia
                                                universitaria</a>
                                            <a href="#" class="block py-2 hover:text-green-custom">Biblioteca UDH</a>
                                        </div>
                                        <div class="w-1/2">
                                            <a href="#" class="block py-2 hover:text-green-custom">Nuestras
                                                facultades</a>
                                            <a href="#" class="block py-2 hover:text-green-custom">Centro de idioma</a>
                                            <a href="#" class="block py-2 hover:text-green-custom">Nuestras sedes</a>
                                            <a href="#" class="block py-2 hover:text-green-custom">Defensoría
                                                universitaria</a>
                                            <a href="#" class="block py-2 hover:text-green-custom">Servicios
                                                sociales</a>
                                        </div>
                                        <div class="w-1/2">
                                            <a href="#" class="block py-2 hover:text-green-custom">Bienestar
                                                universitaria</a>
                                            <a href="#" class="block py-2 hover:text-green-custom">Calendario
                                                académico</a>
                                            <a href="#" class="block py-2 hover:text-green-custom">Trámites</a>
                                            <a href="#" class="block py-2 hover:text-green-custom">Contactos</a>
                                            <a href="#" class="block py-2 hover:text-green-custom">Laboratorios</a>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li class="items-center ml-2">
                                <button class="relative text-gray-custom hover:text-green-custom">
                                    <IconSearch size="22" />
                                </button>
                            </li>
                            <li class="items-center ml-2">
                                <button
                                    class="bg-green-custom hover:bg-green-custom-hover text-white rounded-md px-6 py-4 font-epilogue text-base font-semibold">
                                    ¡ POSTULA YA !
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- navigation mobile -->
                <div class="hidden md:block lg:hidden sm:block xs:block">
                    <div class="flex items-center gap-4">
                        <!-- search button -->
                        <button class="relative text-gray-custom hover:text-green-custom">
                            <IconSearch size="24" />
                        </button>
                        <!-- menu button -->
                        <button class="relative text-gray-custom hover:text-green-custom">
                            <IconMenu2 size="26" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { IconSearch, IconMenu2, IconChevronDown, IconChevronRight } from '@tabler/icons-vue';
import HeaderTop from '@/components/HeaderTop.vue';
</script>

<style scoped>
.group {
    position: relative;
}

.group:hover>.dropdown {
    opacity: 1;
    visibility: visible;
}

.dropdown,
.dropdown-submenu {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 0.5rem 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    white-space: nowrap;
}

.dropdown a {
    display: block;
    padding: 0.5rem 1rem;
    transition: background-color 0.2s ease;
}

/* Estilo para submenús */
.dropdown-submenu {
    left: 100%;
    top: 0;
    position: absolute;
}

.group:hover>.dropdown,
.group:hover>.dropdown-submenu {
    opacity: 1;
    visibility: visible;
}
</style>