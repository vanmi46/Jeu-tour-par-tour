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
    <div class="card w-96 bg-base-100 card-lg shadow-sm mx-auto">
        <div class="card-body grid grid-cols-2">
            <button @click="attackAdversaire()" class="btn btn-success">Attack</button>
            <button @click="" v-if="currentround < cooldown" class="btn btn-soft btn-success">Special Attack</button>
            <button @click="specialAttackAdversaire()" v-else class="btn btn-success">Special Attack</button>
            <button @click="soin()" class="btn btn-success">Soin</button>
            <button @click="" class="btn btn-success">Abandonner</button>
        </div>
    </div>
</template>

<script setup lang='js'>
import { ref } from 'vue';
const playerHealth = ref("100");
const rivalHealth = ref("100");
const currentround = ref(1);
const cooldown = ref(0);
const pvPlayer = ref(100);
const pvAdversaire = ref(100);

function degatRandom() {
    return Math.random() * (25 - 1) + 1;
}
function attackAdversaire() {
    pvAdversaire.value -= degatRandom();
    attackPlayer();
}

function attackPlayer() {
    pvPlayer.value -= degatRandom();
    console.log(pvAdversaire.value);
    console.log(pvPlayer.value);
    turnInc();
}

function specialAttackAdversaire() {
    pvAdversaire.value -= (degatRandom() * 2);
    cooldown.value = currentround.value + 3;
    attackPlayer();
}

function soin() {
    pvPlayer.value += (degatRandom()*1.5);
    if (pvPlayer.value > 100) {
        pvPlayer.value = 100
    }
    attackPlayer();
}

function abandonner() {

}

function turnInc() {
    currentround.value++;
}
</script>
<style scoped lang="css"></style>