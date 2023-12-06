<template>
    <appModal v-model="dialog">
        <div class="Login__roles">
            <p>Select your role</p>
            <select v-model="role.selected_role">
                <option value="" disabled hidden selected> Select your role</option>
                <option v-for="item in $store?.state?.me?.roles" :key="item.id" :value="item">{{ item }}</option>
            </select>
        </div>

        <div class="Login__roles-action">
            <button class="btn btn-success" @click="save">save</button>
        </div>
    </appModal>
</template>

<script setup>
import Notification from '@/plugins/Notification';
import http from '@/plugins/axios';
import appModal from '@/ui/app-modal.vue';
import { ref, defineExpose } from 'vue';
import { useRouter } from 'vue-router';
import store from '@/store';

const router = useRouter();
const dialog = ref(false)
const role = ref({
    selected_role: ""
})

const save =()=>{
    http.post("api/user/change-role/",{
        role: role.value.selected_role
    }).then(res=>{
        if(res.status === 200){
            if(role.value.selected_role === "warehouse"){
                router.push({name: "profile"})
            }else if (role.value.selected_role === "director"){
                router.push({name: "director"})
            }else if(role.value.selected_role === "salesman"){
                router.push({name: "sales"})
            }else if(role.value.selected_role === "financier"){
                router.push({name: "finance"})
            }
            dialog.value = false
        }
    }).catch(err=>{
        console.log(err);
    })
}
const OpenModal=()=>{
    dialog.value = true
}

defineExpose({OpenModal})
</script>

<style lang="scss" scoped>
$blue-color: #435ebe;

.Login__roles{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    p{
        font-size: 30px;
        margin-bottom: 20px;
        word-spacing: 0.5;
    }

    select{
        width: 100%;
        height: 35px;
        font-size: 16px;
        border-radius: 5px;
    }

    .Login__roles-action{
        width: 100%;
        margin-top: 25px;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        button{
            border: none;
            color: #fff;
            background-color: $blue-color;
            padding: 12px 20px;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
        }
    }
}
</style>
