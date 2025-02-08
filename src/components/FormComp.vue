<script setup lang="ts">
import { useTemplateRef } from 'vue';

defineProps<{
  submitFunc: () => void
}>()

//ref
const formRef = useTemplateRef<HTMLFormElement>("form");

</script>

<template>
  <form ref="form" @submit.prevent="() => {
    submitFunc();
    formRef?.reset();
  }">
    <slot></slot>
    <button>Отправить форму</button>
  </form>
</template>

