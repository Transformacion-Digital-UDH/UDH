<template>
    <div class="fixed inset-0 z-50 xl:hidden block">
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-black/50 transition-opacity duration-300" @click="$emit('close')" />

        <!-- Menu Panel -->
        <div
            class="fixed inset-y-0 right-0 w-[300px] bg-white shadow-xl overflow-y-auto transition-transform duration-300 ease-out">
            <div class="flex flex-col h-full">
                <!-- Header -->
                <div class="flex items-center justify-end px-4 pt-4">
                    <button class="p-1 text-gray-custom hover:text-green-custom transition-colors"
                        @click="$emit('close')">
                        <IconX class="w-6 h-6" />
                    </button>
                </div>

                <!-- Navigation -->
                <div class="flex-1 overflow-y-auto">
                    <div class="p-2">
                        <!-- Login Button -->
                        <LinkPrimarySecondEffect label="Ingresar" class="!my-3" :hrefHref="link_login"/>


                        <!-- Menu Items -->
                        <div class="space-y-2">
                            <MobileMenuItem v-for="(item, index) in menuItems" :key="index" :title="item.title"
                                :items="item.items" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { IconX, IconSearch, IconChevronDown } from '@tabler/icons-vue';
import MobileMenuItem from '@/components/navigation/MobileMenuItem.vue';
import LinkPrimarySecondEffect from '@/components/LinkPrimarySecondEffect.vue';

defineProps({
    link_login: {
        type: String,
        required: true,
    },
});

// Menu structure
const menuItems = [
    {
        title: 'Investigación',
        items: [
            { title: 'Revisión científica', href: '#' },
            { title: 'Repositorio', href: '#' },
            { title: 'Vicerrectorado de investigación', href: '#' }
        ]
    },
    {
        title: 'Carreras',
        items: [
            {
                title: 'Ciencias de la salud',
                items: [
                    { title: 'Obstetricia', href: '#' },
                    { title: 'Psicología', href: '#' },
                    { title: 'Enfermeria', href: '#' },
                    { title: 'Odontologia', href: '#' }
                ]
            },
            {
                title: 'Ingeniería',
                items: [
                    { title: 'Ingenieria de sistemas e informática', href: '/sistemas-e-informatica' },
                    { title: 'Ingenieria civil', href: '#' },
                    { title: 'Ingenieria ambiental', href: '#' },
                    { title: 'Arquitectura', href: '#' }
                ]
            },
            {
                title: 'Ciencias empresariales',
                items: [
                    { title: 'Administración de empresas', href: '#' },
                    { title: 'Contabilidad y finanzas', href: '#' },
                    { title: 'Turismo, hoteleria y gastronomia', href: '#' },
                    { title: 'Marketing y negocios internacionales', href: '#' }
                ]
            },
            {
                title: 'Derecho y ciencias políticas',
                items: [
                    { title: 'Derecho y ciencias políticas', href: '#' }
                ]
            },
            {
                title: 'Ciencias de la educación y humanidades',
                items: [
                    { title: 'Educación básica: Inicial y primaria', href: '#' }
                ]
            }
        ]
    },
    {
        title: 'Semipresencial',
        items: [
            {
                title: 'Ciencias de la salud',
                items: [
                    { title: 'Psicología', href: '#' }
                ]
            },
            {
                title: 'Ciencias empresariales',
                items: [
                    { title: 'Administración de empresas', href: '#' },
                    { title: 'Contabilidad y finanzas', href: '#' }
                ]
            },
            {
                title: 'Derecho y ciencias políticas',
                items: [
                    { title: 'Derecho y ciencias políticas', href: '#' }
                ]
            }
        ]
    },
    {
        title: 'Postgrado',
        items: [
            { title: 'Maestrías', href: '#' },
            { title: 'Doctorados', href: '#' },
            { title: 'Segunda especialidad', href: '#' }
        ]
    },
    {
        title: 'Admisión',
        items: [
            { title: 'Modalidades y costos', href: '#' },
            { title: 'Guía', href: '#' },
            { title: 'Matrícula y pensiones', href: '#' },
            { title: 'Requisitos', href: '#' },
            { title: 'Preguntas frecuentes', href: '#' }
        ]
    },
    {
        title: 'Nosotros',
        items: [
            { title: 'Sobre UDH', href: '#' },
            { title: 'Biblioteca virtual', href: '#' },
            { title: 'Transparencia universitaria', href: '#' },
            { title: 'Nuestras sedes', href: '#' },
            { title: 'Contactos', href: '#' }
        ]
    }
];

defineEmits(['close']);
</script>