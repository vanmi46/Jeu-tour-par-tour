<script setup>
import { ref } from 'vue'

defineProps({
    msg: String,
})

const count = ref(0)
</script>

<template>
    <div class="navbar bg-base-100 shadow-sm">
        <div class="mx-auto">
            <img src="../assets/logo-pokemon.webp" alt="Pokemon Logo" class="w-32">
        </div>
    </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
