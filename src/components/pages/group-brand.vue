<template>
    <AppModal v-model="dialog">
      <div class="model">
        <h3>Brands</h3>
        <form>
            <label>Brand name</label>
            <input type="text" placeholder="Brand name" v-model="form.title">
        </form>
             
          <button @click="create_group_brand">Add Brand</button>
      </div>

      <!-- <div v-if="item === 'group'" class="model">
        <h3>Groups</h3>
        <form>
            <label>Group name</label>
            <input type="text" placeholder="Group name" v-model="form.title">
        </form>
             
          <button @click="create_group_brand">Add Group</button>
      </div> -->
   </AppModal>
   <AppModal v-model="dialog2">
      <div class="model">
        <h3>Are you sure you want to delete ?</h3>
        <div class="modal_act">
          <button class="btn1" @click="dialog2 = false">cancel</button>
          <button class="btn2" @click="deleteBrand(id)">delete</button>
        </div>
      </div>
   </AppModal>

</template>

<script setup>
const props = defineProps({
  item:{
    type: String
  }
})

import {ref, defineExpose, defineProps} from 'vue'
import AppModal from "@/ui/app-modal.vue";
import http from '@/plugins/axios';
import { useRouter } from 'vue-router';
import store from '@/store';

const emits = defineEmits(['getEmployers'])
const router = useRouter()
const dialog = ref(false)
const dialog2 = ref(false)
const form = ref({
 title: "",
});

const create_group_brand =(item)=>{
  dialog.value = true
  if(item === 'groups'){
    http.post("api/warehouse/group/",{
    title: form.value.title
  }).then(res=>{
          if(res.status === 201){
            window.location.reload()
          }
        }).catch(err=>{
          console.log(err);
        })
  }else{
    http.post("api/warehouse/brand/",{
    title: form.value.title
  }).then(res=>{
          if(res.status === 201){
            window.location.reload()
          }
        }).catch(err=>{
          console.log(err);
        })
  }
}

const deleteBrand = (id, value) =>{
    if(value === 'brand'){
        http.delete(`api/warehouse/brand/${id}`).then(res=>{
          if(res.status === 204){
            window.location.reload()
          }
        }).catch(err=>{
          console.log(err);
        })
    }else if(value === 'group'){
        http.delete(`api.warehouse/group/${id}`).then(res=>{
          if(res.status === 204){
            window.location.reload()
          }
        }).catch(err=>{
          console.log(err);
        })
    }
    dialog2.value = true
}

defineExpose({create_group_brand,deleteBrand})
</script>

<style scoped lang="scss">
$blue-color: #435ebe;
$input_bg: #edf2f7;
$hover-color: #f0f1f5;
$white-color: #fff;
$blue-color2: #57caeb;
$red-color: #ff7976;
.model{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3{
  text-align: center;
  margin: 10px 0px;
  font-size: 25px;
}
Form {
      width: 75%;
      margin: 15px 0px;
      display: flex;
      flex-direction: column;
      .modal__form-img{
        width: 100%;
        display: flex;
        justify-content: center;
        cursor: pointer;
        .modal__form-change-img{
          display: block;
          position: absolute;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          background-color: rgba(240, 241, 245,0.7);
          border-radius: 50%;
          label{
            text-align: center;
            font-size: 14px;
            cursor: pointer;
          }
          input{
            opacity: 0;
            cursor: pointer;
          }
        }
        img{
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 50%;
          position: relative;
        }
      }
      .Login__form-input {
        width: 100%;
        display: flex;
        align-items: center;
        background-color: $input_bg;
        %input_act {
          cursor: pointer;
          background-color: transparent;
          margin-right: 10px;
        }
        .Login__show {
          @extend %input_act;
          display: block;
        }
        .Login__hide {
          @extend %input_act;
          display: none;
        }
      }
      %global_form{
        width: 100%;
        font-weight: 400;
        font-size: 14px;
        height: 45px;
        padding-left: 15px;
        color: #272a2c;
        background: $input_bg;
        border-radius: 5px;
        outline: none;
        border: none;
      }
      .form__input {
        @extend %global_form
      }
      .form__select{
        @extend %global_form
      }
      .form__text{
        @extend %global_form;
        padding-top: 10px;
        height: 70px;
      }
      .login__input-error {
        margin-top: 5px;
        color: red;
        font-size: 15px;
        font-weight: 500;
      }
      label {
        margin: 10px 0px;
        font-weight: 500;
        font-size: 16px;
        color: #2c2728;
      }
      button {
        margin-top: 40px;
        border: none;
        padding: 10px 0px;
        color: #fff;
        font-size: 16px;
        background-color: $blue-color;
        border-radius: 5px;
        cursor: pointer;
      }
}
.modal_act{
        margin-top: 40px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        %btn{
            padding: 15px 50px;
            border: none;
            border-radius: 5px;
            font-size: 18px;
            color: $white-color;
            cursor: pointer
        }
        .btn1{
            @extend %btn;
            background-color: $blue-color2;
        }
        .btn2{
            @extend %btn;
            background-color: $red-color;
        }
}
@media (max-width: 576px) {
      Form{
        width: 90%;
      }
      .modal_act{
        margin-top: 20px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
        %btn{
            padding: 10px 30px;
            border-radius: 3px;
            font-size: 16px;
        }
}
}
}
</style>
