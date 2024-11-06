<template>
    <div class="p-2 text-gray-custom hover:text-green-custom">
        <button type="button" @click="openModal" class="p-2 text-gray-custom hover:text-green-custom">
            <IconSearch class="w-5 h-5" />
        </button>
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-50">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex flex-col justify-center p-4 text-center">
                    <DialogPanel class="relative xs:w-5/6 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-3/4 mx-auto ">
                        <input type="search" v-model="searchQuery" placeholder="Buscar aquí..." autofocus
                            class="w-full my-3 p-4 rounded-md text-gray-custom placeholder:text-gray-500 border-none focus:outline-none bg-white"
                            @input="handleSearch">

                        <!-- Suggestions Dropdown -->
                        <TransitionRoot appear :show="showSuggestions && filteredSuggestions.length > 0" as="template">
                            <div class="absolute w-full mt-1 bg-white rounded-md shadow-lg">
                                <div class="py-1">
                                    <div v-for="(suggestion, index) in filteredSuggestions" :key="index"
                                        class="px-4 py-2 text-left hover:bg-gray-200 cursor-pointer flex items-center gap-2"
                                        @click="selectSuggestion(suggestion)">
                                        <IconSearch class="w-4 h-4 text-gray-700" />
                                        <div>
                                            <div class="text-gray-800 font-semibold">{{ suggestion.title }}</div>
                                            <div class="text-sm text-gray-700">{{ suggestion.description }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TransitionRoot>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { ref, computed } from 'vue'
import { IconSearch } from '@tabler/icons-vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
} from '@headlessui/vue'

const isOpen = ref(false)
const searchQuery = ref('')
const showSuggestions = ref(false)

// Sample suggestions data - replace with your actual data
const suggestions = [
    { title: 'Interactive CLI', description: 'Set Up Run the following' },
    { title: 'Development', description: 'Validating Links reference' },
    { title: 'Custom JS', description: 'Available as an add-on to the pro plan' },
    { title: 'Headers and Text', description: 'Linking to Pages' },
    { title: 'Advanced Features', description: 'x-codeSamples and JavaScript SDK' },
]

const filteredSuggestions = computed(() => {
    if (!searchQuery.value) return []
    const query = searchQuery.value.toLowerCase()
    return suggestions.filter(suggestion =>
        suggestion.title.toLowerCase().includes(query) ||
        suggestion.description.toLowerCase().includes(query)
    )
})


function closeModal() {
    isOpen.value = false
    searchQuery.value = ''
    showSuggestions.value = false
}

function openModal() {
    isOpen.value = true
}

function handleSearch() {
    showSuggestions.value = true
}

function selectSuggestion(suggestion) {
    searchQuery.value = suggestion.title
    showSuggestions.value = false
    // Add your logic here for what happens when a suggestion is selected
}
</script>