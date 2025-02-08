<script setup lang="ts">
import { computed, reactive } from 'vue';
import FormComp from './FormComp.vue';
import InputGeneric from './InputGeneric.vue';

const loginData = reactive<{email: string, password: string}>({
  email: "",
  password: "",
});



//functions
function submitForm() {
  console.log(loginData);
}

</script>

<template>
  <FormComp :submit-func="submitForm">
    <InputGeneric @handle-input-change="(data:string) => loginData.email = data" v-model="loginData.email" :inputName="`email`" :inputPlaceHolder="`Почта`"></InputGeneric>
    <InputGeneric @handle-input-change="(data:string) => loginData.password = data" v-model="loginData.password" :inputName="`password`" :inputPlaceHolder="`Пароль`"></InputGeneric>
  </FormComp>
</template>