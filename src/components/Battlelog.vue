<template>
<div class="border-black border-solid w-full text-center bg-blue-500 h-100 border-8 hover:bg-blue-700 ">
        <h1>Battlelog</h1>
    <div>
      <h3>Liste des actions de combat :</h3>
      <ul>
        <li 
          v-for="(oneTask, index) in tasks" 
          :key="index" 
          class="badge badge-outline mb-2 bg-red-500">
         `{{ player }}+""+{{ action }}+""+{{ result }}`
        </li>
      </ul>
      <p v-if="tasks.length === 0" class="alert alert-warning mt-3">
        Le combat n'a pas commencé
      </p>
      <button class="btn btn-primary mt-3" @click="addTask">Attaque</button>
    </div>
</div>
</template>


<script setup lang='js'>
import { ref } from 'vue';
 const tasks = ref([]);
  
  function addTask() {
    tasks.value.push(`Tâche ${tasks.value.length + 1}`);
  }
</script>


<style scoped lang="css">
</style>