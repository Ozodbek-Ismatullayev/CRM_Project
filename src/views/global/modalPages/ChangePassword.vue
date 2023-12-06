<template>
<AppModal v-model="dialog">
    <div class="modal2">
    <h3>Change Password</h3>
    <Form @submit="send">
        <label for="old_password">Old Password</label>
        <Field rules="required" :modelValue="form.old_password" name="Old Password">
            <input class="form__input" type="password" id="old_password" placeholder="Old Password..." v-model="form.old_password"/>
            <p class="login__input-error" v-if="errors && errors.length">
                {{ errors[0] }}
            </p>
        </Field>

        <label for="new_password">New Password</label>
        <Field rules="required" :modelValue="form.new_password" v-slot="{ errors }" name="New Password" >
        <input class="form__input" type="password" id="last_name" placeholder="New Password..." v-model="form.new_password"/>
        <p class="login__input-error" v-if="errors && errors.length">
            {{ errors[0] }}
        </p>
        </Field>

        <label for="confirm_password">Confirm Password</label>
        <Field rules="required" :modelValue="form.confirm_password" v-slot="{ errors }" name="Confirm Password">
        <input class="form__input" type="password" id="confirm_password" placeholder="Confirm Password..." v-model="form.confirm_password"/>
        <p class="login__input-error" v-if="errors && errors.length">
            {{ errors[0] }}
        </p>
        </Field>
        <button type="submit">Change Password</button>
    </Form>
    </div>
</AppModal>
</template>

<script setup>
    import AppModal from "@/ui/app-modal.vue";
    import { ref, defineExpose } from "vue";
    import { Field, Form } from "vee-validate";
    import http from "@/plugins/axios";
    import Notification from "@/plugins/Notification";
    // import '@/assets/css/global.scss'
    const dialog = ref(false);
    const form = ref({
        old_password: "",
        new_password: "",
        confirm_password: ""

    });
    const openModal = () => {
        dialog.value = true
    };

    const send = () => {
        http.put("/api/user/change-password/",{
            old_password: form.value.old_password,
            new_password: form.value.new_password,
            new_password_confirm: form.value.confirm_password
        }).then(res=>{
            if(res.status === 200){
            window.location.reload();
            Notification({ text: "Password Changed !!!" },{type: 'success'})
            }
        }).catch(err=>{
            console.log(err);
        })
    };
    defineExpose({ openModal });
</script>

<style lang="scss" scoped>
$blue-color: #435ebe;
$input_bg: #edf2f7;
.modal2 {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h3 {
    text-align: center;
    margin: 10px 0px;
    font-size: 25px;
}
Form {
    width: 70%;
    margin: 20px 0px;
    display: flex;
    flex-direction: column;

    .form__input {
    width: 100%;
    font-weight: 400;
    font-size: 14px;
    height: 45px;
    padding-left: 15px;
    color: #272a2c;
    background: $input_bg;
    border-radius: 5px;
    outline: none;
    margin-right: 5px;
    border: none;
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
@media (max-width: 576px) {
    Form {
    width: 90%;
    }
}
}
</style>
