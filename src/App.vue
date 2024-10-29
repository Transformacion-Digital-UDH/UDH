<script setup lang="ts">
import Header from '@/components/Header.vue';
</script>

<template>
    <div class="layout_container grid min-h-dvh">
        <!-- Header content  -->
        <div>    
            <Header/>
        </div>

        <!-- Main content -->
        <main>
        </main>
        
        <!-- Footer content -->
        <footer>
            
        </footer>
    </div>
    
</template>

<style scoped>
.layout_container{
    grid-template-rows: auto 1fr auto;
}
</style>
