<script setup>
import { ref, reactive } from "vue";
</script>

<template>
    <!-- Bottom link -->
    <div class="link-container">
        <a href="https://github.com/aynorway/ay-ml-dashboard" target="_blank"> Frontend: https://github.com/aynorway/ay-ml-dashboard</a>
    </div>
    <div class="link-container">
        <a href="https://github.com/aynorway/ay-webjs-backend" target="_blank"> Backend: https://github.com/aynorway/ay-webjs-backend</a>
    </div>
</template>

<style scoped>

.link-container {
  /* margin-top: 10px; */
  margin-top: 0px;
  text-align: center;
}

.link-container a {
  color: #fff;
  text-decoration: underline;
  font-size: 12px;
}
</style>
