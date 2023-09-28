<template>
    <!-- <appModal v-model="dialog">
        <div>
            <form>
                <input type="text" placeholder="Name..." class="form-control my-2">
                <input type="password" placeholder="Password..." class="form-control my-2">
            </form>
            <button class="btn btn-success">send</button>
        </div>
    </appModal> -->


    <appModal v-model="dialog">
        <div>
            <form>
                <input v-model="form.name" type="text" placeholder="Name..." class="form-control my-2">
                <input v-model="form.age" type="number" placeholder="Age..." class="form-control my-2">
                <input v-model="form.address" type="text" placeholder="Address..." class="form-control my-2">
                <select v-model="form.language" class="form-control my-2">
                    <option value="" selected hidden>Select your language...</option>
                    <option value="uzbek">Uzbek</option>
                    <option value="russion">Russion</option>
                    <option value="english">Enlish</option>
                </select>
            <button class="btn btn-success my-2" @click="save">save</button>
            </form>
        </div>
    </appModal>
  </template>
  
  
  <script setup>

import { ref } from 'vue';
import appModal from '../../ui/app-modal.vue';


  const form = ref({
      name: "",
      age: null,
      address: "",
      language: "",
  })

  const props = defineProps({
    body: {
      type: Array,
    }
  })
  const dialog = ref(false)

  const openModal =()=>{
    dialog.value = true
  }

  const save =(e)=>{
    e.preventDefault();
    props.body.push({...form.value})
    dialog.value = false
    form.value = {}
  }
  defineExpose({openModal})
  </script>
  
  
  
  
  <style lang="scss" scoped>
  
  </style>
  