<script setup>
import { IconCaretRightFilled, IconSend, IconPhone, IconMapPin, IconMail, IconBrandFacebook, IconBrandWhatsapp, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-vue';
import ButtonPrimarySecondEffect from '@/components/ButtonPrimarySecondEffect.vue';
import { ref, onMounted } from 'vue';
import { getContactInfo } from '@/lib/get-contact-info';

// definir variables para los datos referentes de los campos de la API
const contactos = ref([]);
const logoudh_white = ref({});
const enlaces_interes = ref([]);

const baseApiUrl = import.meta.env.VITE_API_URL_STRAPI;

// funcion para obtener los datos de la API y asignarlos a las variables
const fetchContactData = async () => {
    try {
        const contactData = await getContactInfo();

        contactos.value = contactData.contactos || [];
        logoudh_white.value = contactData.logoudh_white || {};
        enlaces_interes.value = contactData.enlaces_interes || [];
    } catch (error) {
        console.error("Error fetching contact data:", error);
    }
};

// Cargar datos al montar el componente
onMounted(() => {
    fetchContactData()
})

</script>

<template>
    <footer
        class="bg-[#333333] m-0 p-0 flex justify-center font-epilogue items-center content-center h-auto text-white font-semibold">
        <div class="container mx-auto xs:mx-6 xl:mx-28">
            <!-- footer main -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 px-1 mt-14 mb-2 md:px-12 lg:px-2">
                <!-- Information -->
                <div class="">
                    <!-- logo -->
                    <div class="flex lg:justify-start justify-center">
                        <img :src="`${baseApiUrl}${logoudh_white.url}`" :alt="logoudh_white.name" class="w-[250px] ">
                    </div>
                    <div class="my-6">
                        <h2 class="my-5">OFICINA CENTRAL</h2>
                        <!-- Iterar sobre contactos -->
                        <div v-for="(contacto, index) in contactos" :key="index" class="contact-item">
                            <!-- Celular -->
                            <a v-if="contacto.id === 11 ? contacto.celular : ''" href="#"
                                class="flex my-3 gap-5 items-center content-center">
                                <div class="items-center content-center bg-green-custom p-1 rounded-md">
                                    <IconPhone size="19" />
                                </div>
                                <p>{{ contacto.celular }}</p>
                            </a>

                            <!-- Dirección -->
                            <a v-if="contacto.id === 11 ? contacto.direccion : ''" href="#"
                                class="flex my-3 gap-5 items-center content-center">
                                <div class="items-center content-center bg-green-custom p-1 rounded-md">
                                    <IconMapPin size="20" />
                                </div>
                                <p>{{ contacto.direccion }}</p>
                            </a>

                            <!-- Email -->
                            <a v-if="contacto.id === 11 ? contacto.correo_electronico : ''" href="#"
                                class="flex my-3 gap-5 items-center content-center">
                                <div class="items-center content-center bg-green-custom p-1 rounded-md">
                                    <IconMail size="20" />
                                </div>
                                <p>{{ contacto.correo_electronico }}</p>
                            </a>
                        </div>
                    </div>

                    <div class="my-6">
                        <h2 class="my-5">CIUDAD UNIVERSITARIA</h2>
                        <!-- Iterar sobre contactos -->
                        <div v-for="(contacto, index) in contactos" :key="index" class="contact-item">
                            <!-- Celular -->
                            <a v-if="contacto.id === 12 ? contacto.celular : ''" href="#"
                                class="flex my-3 gap-5 items-center content-center">
                                <div class="items-center content-center bg-green-custom p-1 rounded-md">
                                    <IconPhone size="19" />
                                </div>
                                <p>{{ contacto.celular }}</p>
                            </a>

                            <!-- Dirección -->
                            <a v-if="contacto.id === 12 ? contacto.direccion : ''" href="#"
                                class="flex my-3 gap-5 items-center content-center">
                                <div class="items-center content-center bg-green-custom p-1 rounded-md">
                                    <IconMapPin size="20" />
                                </div>
                                <p>{{ contacto.direccion }}</p>
                            </a>

                            <!-- Email -->
                            <a v-if="contacto.id === 12 ? contacto.correo_electronico : ''" href="#"
                                class="flex my-3 gap-5 items-center content-center">
                                <div class="items-center content-center bg-green-custom p-1 rounded-md">
                                    <IconMail size="20" />
                                </div>
                                <p>{{ contacto.correo_electronico }}</p>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- links -->
                <div class="pl-0 lg:pl-10 md:pl-12">
                    <h2
                        class="pb-4 relative before:contents-[''] before:absolute before:h-[3px] before:w-[90px] before:bottom-0 before:left-0 before:z-10 before:bg-gray-500 after:absolute after:contents-[''] after:w-[30px] after:h-[3px] after:bottom-0 after:left-5 after:z-10 after:bg-green-custom">
                        Enlaces de interés</h2>

                    <div class="mt-7">

                        <a :href="pf.link" v-for="(pf) in enlaces_interes" :key="pf.id"
                            class="flex my-3 gap-2 items-center content-center">
                            <div class="text-green-custom">
                                <IconCaretRightFilled size="20" />
                            </div>
                            <p>
                                {{ pf.titulo }}
                            </p>
                        </a>
                    </div>
                </div>
                <!-- Newsletter -->
                <div
                    class="pl-0 lg:pl-16 md:pl-16 w-full md:w-full lg:w-full sm:w-3/5 md:col-span-2 lg:col-span-1 xl:w-full xl:pl-0">
                    <h2
                        class="pb-4 relative before:contents-[''] before:absolute before:h-[3px] before:w-[90px] before:bottom-0 before:left-0 before:z-10 before:bg-gray-500 after:absolute after:contents-[''] after:w-[30px] after:h-[3px] after:bottom-0 after:left-5 after:z-10 after:bg-green-custom">
                        Boletín</h2>

                    <div class="mt-7">
                        <p>
                            Suscríbete a nuestro boletín para no perderte
                            las últimas noticias de la universidad y sus servicios.
                        </p>
                        <form method="POST" action="#" class="mt-4">
                            <input type="email" required placeholder="Ingresa tu correo electrónico"
                                class="w-full my-3 border border-gray-500 p-4 rounded-md text-gray-custom placeholder:text-gray-500 border-none focus:outline-none">

                            <ButtonPrimarySecondEffect label="Enviar suscripción" class="!my-3" :icon="IconSend"
                                type="submit" />
                        </form>

                    </div>

                </div>

            </div>

            <!-- footer bottom-->
            <div class="border-t border-gray-700 p-1"></div>

            <div class="flex justify-between mt-4 mb-4 xs:flex-col lg:flex-row">
                <!-- Copyright -->
                <div class="items-center content-center xs:text-center">
                    <p>
                        © Copyright 2024
                        <span class="font-semibold text-green-custom">UDH</span>
                        Todos los derechos reservados.
                    </p>
                </div>
                <!-- social icons -->
                <div
                    class="flex gap-2 my-2 justify-center xl:gap-3 xl:justify-around items-center content-center align-middle h-auto">
                    <a href="#"
                        class="w-10 h-10 rounded-full bg-white content-center text-green-custom hover:text-white hover:bg-green-custom transition-transform duration-700 place-items-center">
                        <IconBrandYoutube size="19" stroke="2.5" />
                    </a>
                    <a href="#"
                        class="w-10 h-10 rounded-full bg-white content-center text-green-custom hover:text-white hover:bg-green-custom transition-transform duration-700 place-items-center">
                        <IconBrandInstagram size="19" stroke="2.5" />
                    </a>
                    <a href="#"
                        class="w-10 h-10 rounded-full bg-white content-center text-green-custom hover:text-white hover:bg-green-custom transition-transform duration-700 place-items-center">
                        <IconBrandWhatsapp size="19" stroke="2.5" />
                    </a>
                    <a href="#"
                        class="w-10 h-10 rounded-full bg-white content-center text-green-custom hover:text-white hover:bg-green-custom transition-transform duration-700 place-items-center">
                        <IconBrandFacebook size="19" stroke="2.5" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>
