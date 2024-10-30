<template>
    <div class="fixed inset-0 z-50 lg:hidden">
        <!-- Backdrop -->
        <div 
            class="fixed inset-0 bg-black/50 transition-opacity duration-300"
            @click="$emit('close')"
        />

        <!-- Menu Panel -->
        <div class="fixed inset-y-0 right-0 w-[300px] bg-white shadow-xl overflow-y-auto transition-transform duration-300 ease-out">
            <div class="flex flex-col h-full">
                <!-- Header -->
                <div class="flex items-center justify-between p-4 border-b">
                    <img src="/logo.png" alt="logo" class="w-[120px]">
                    <button 
                        class="p-2 text-gray-custom hover:text-green-custom transition-colors"
                        @click="$emit('close')"
                    >
                        <IconX class="w-6 h-6" />
                    </button>
                </div>

                <!-- Navigation -->
                <div class="flex-1 overflow-y-auto">
                    <div class="p-2">
                        <!-- Login Button -->
                       <ButtonPrimary label="Ingresar" class="w-full my-2 py-[10px]" />

                        <!-- Search Box -->
                        <div class="relative mb-4">
                            <input 
                                type="text" 
                                placeholder="Buscar..." 
                                class="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-custom"
                            >
                            <IconSearch class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>

                        <!-- Menu Items -->
                        <div class="space-y-2">
                            <MobileMenuItem 
                                v-for="(item, index) in menuItems" 
                                :key="index"
                                :title="item.title"
                                :items="item.items"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { IconX, IconSearch, IconChevronDown } from '@tabler/icons-vue';
import MobileMenuItem from './MobileMenuItem.vue';
import ButtonPrimary from '../ButtonPrimary.vue';

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
            { title: 'Sobre UDH', href: '#' },
            { title: 'Biblioteca virtual', href: '#' },
            { title: 'Transparencia universitaria', href: '#' },
            { title: 'Biblioteca UDH', href: '#' },
            { title: 'Nuestras facultades', href: '#' },
            { title: 'Centro de idioma', href: '#' }
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