<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";
const name = ref("ay-ml");
</script>

<template>
  <div>{{ name }}</div>
  <router-view />

</template>

<style scoped></style>
