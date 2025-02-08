<script setup lang="ts">
  const props = defineProps<{
    inputName: string
    inputPlaceHolder: string,
  }>()

  const emit = defineEmits(["handleInputChange"]);

  //functions
  function inputChage(evt:Event) {
    // console.log(evt.target.value);
    emit("handleInputChange", (evt.target as HTMLInputElement).value)
  }
</script>

<template>
  <input @input="evt => inputChage(evt)" :name="props.inputName" :placeholder="props.inputPlaceHolder">
</template>