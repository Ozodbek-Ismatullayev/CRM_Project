<template>
  <appModal v-model="dialog">
      <div class="row mt-4">
        <div class="col-md-6 offset-3">
          <div class="card m-5">
         <div class="card-header">
          <h1 class="text-center">Select role...</h1>
         </div>

         <div class="card-body">
          <form @submit.prevent="save">
              <select v-model="selectedRole" class="form-control text-center">
                <option value="" selected hidden>Select your value</option>
                <option v-for="(item, index) in roles.value" :key="index" :value="item">{{ item }}</option>
              </select>
          </form>
         </div>
          
         <button class="btn btn-success form-control my-1" @click="save">
          <router-link class="text-center text-decoration-none white" :to="{ name: selectedRole, params: { id: '1' } }">save</router-link>
        </button>
      </div>
        </div>
      </div>
  </appModal>
</template>


<script setup>
import appModal from '../ui/app-modal.vue'
import { ref } from 'vue';

const selectedRole = ref('')
console.log(selectedRole.value);

const dialog = ref(false)
const roles = ([{}])

const openModal =(item)=>{
  dialog.value = true
  roles.value = item
}

const save =(e)=>{
  e.preventDefault();
  openModal()
}

defineExpose({openModal})
</script>




<style lang="scss" scoped>

</style>