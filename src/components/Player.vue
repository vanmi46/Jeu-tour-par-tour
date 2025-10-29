<template>
    <div class="card bg-base-100 w-96 shadow-sm mb-20 border-2 mx-auto mt-20">
        <figure>
            <img src="../assets/gas.gif"
                alt="fantominus gif" srcset="">
        </figure>
        <div class="card-body">
            <h2 class="card-title">Rival <img src="../assets/coeur.png" alt="" srcset=""></h2>
            <progress class="progress w-85" value="100" max="100"></progress>
        </div>
    </div>
    <div class="card bg-base-100 w-96 shadow-sm mb-20 border-2 mx-auto">
        <figure>
            <img src="../assets/pika.gif"
                alt="" srcset="">
        </figure>
        <div class="card-body">
            <h2 class="card-title">Player <img src="../assets/coeur.png" alt="" srcset=""></h2>
            <progress class="progress w-85" value="100" max="100"></progress>
        </div>
    </div>
</template>

<script setup lang='js'>
import { ref } from 'vue';
const playerHealth = ref("100");
const rivalHealth = ref("100");
</script>
<style scoped lang="css"></style>