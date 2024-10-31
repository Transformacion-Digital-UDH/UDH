<template>
    <div
        class="bg-white relative py-2 z-[1] before:bg-[#333333] before:absolute before:w-[70%] before:h-full before:top-0 before:left-0 before:rounded-tr-full after:bg-green-custom after:absolute after:w-[30%] after:h-full after:top-0 after:right-0 after:rounded-bl-full xs:before:w-[60%] xs:after:w-[40%]">
        <div class="px-4 lg:mx-auto lg:px-4 xl:px-12">
            <!-- wrapper header -->
            <div class="flex items-center justify-between">
                <!-- left -->
                <div class="mr-2 z-10 text-white flex lg:gap-6 lg:text-base xs:text-xs md:text-sm gap-1 font-epilogue">
                    <a href="#" class="border-e-[1px] border-white pr-4 flex gap-2 items-center hover:font-semibold">
                        <IconUsers class="text-green-custom" size="20" />
                        Ingresantes
                    </a>
                    <a href="#" class="flex gap-2 items-center hover:font-semibold">
                        <IconUser class="text-green-custom" size="20" />
                        Ingresar
                    </a>
                </div>
                <!-- right -->
                <div class="flex items-center gap-1 lg:gap-4 z-10 ">
                    <a href="#"
                        class="w-8 h-8 rounded-full bg-[#333333] content-center text-white hover:text-green-custom place-items-center">
                        <IconBrandWhatsapp size="19" />
                    </a>
                    <a href="#"
                        class="w-8 h-8 rounded-full bg-[#333333] content-center text-white hover:text-green-custom place-items-center">
                        <IconBrandYoutube size="19" />
                    </a>
                    <a href="#"
                        class="w-8 h-8 rounded-full bg-[#333333] content-center text-white hover:text-green-custom place-items-center">
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