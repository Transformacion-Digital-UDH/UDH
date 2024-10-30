<template>
    <div
        class="bg-white relative py-2 z-[1] before:bg-gray-custom before:absolute before:w-[70%] before:h-full before:top-0 before:left-0 before:rounded-tr-full after:bg-green-custom after:absolute after:w-[30%] after:h-full after:top-0 after:right-0 after:rounded-bl-full">
        <div class="container px-[-4px] mx-4 lg:mx-auto lg:px-4">
            <!-- wrapper header -->
            <div class="flex items-center justify-between">
                <!-- left -->
                <div class="mr-2 z-10 text-white flex gap-6 text-sm lg:text-base font-epilogue">
                    <a href="#" class="border-e-[1px] border-white pr-4 flex gap-2 items-center hover:font-semibold">
                        <IconUsers class="text-green-custom" size="20" />
                        Ingresantes
                    </a>
                    <a href="#" class="flex gap-2 items-center hover:font-semibold">
                        <IconUser class="text-green-custom" size="20" />
                        Login
                    </a>
                </div>
                <!-- right -->
                <div class="flex items-center gap-1 lg:gap-4 z-10 ">
                    <a href="#"
                        class="w-8 h-8 rounded-full bg-gray-custom content-center text-white hover:text-green-custom place-items-center">
                        <IconBrandWhatsapp size="19" />
                    </a>
                    <a href="#"
                        class="w-8 h-8 rounded-full bg-gray-custom content-center text-white hover:text-green-custom place-items-center">
                        <IconBrandYoutube size="19" />
                    </a>
                    <a href="#"
                        class="w-8 h-8 rounded-full bg-gray-custom content-center text-white hover:text-green-custom place-items-center">
                        <IconBrandInstagram size="19" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { IconUsers, IconMail, IconUser, IconBrandWhatsapp, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-vue';
</script>