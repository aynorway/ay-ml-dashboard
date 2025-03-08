<script setup>
import { ref, reactive } from "vue";
import ModuleTitle from './moduleTitle.vue'
import ModuleFirst from './moduleFirst.vue'
import ModuleSecond from './moduleSecond.vue'
import ModuleThird from './moduleThird.vue'

</script>

<template>
    <ModuleTitle />
    <div class="main">
        <ModuleFirst />
        <ModuleSecond />
        <ModuleThird />
    </div>
</template>

<style scoped>
.main {
    display: flex;
    width: 100%;
    gap: 5px;
    padding: 0 0px;
}
</style>
