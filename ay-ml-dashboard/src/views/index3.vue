<script setup>
import { ref, reactive } from "vue";
import ModuleTitle from './moduleTitle.vue'
import ModuleFirst from './moduleFirst.vue'
import ModuleSecond from './moduleSecond.vue'
import ModuleThird from './moduleThird.vue'

</script>

<template>
    <dv-full-screen-container>
        <div class="main">
            <ModuleFirst />
            <ModuleSecond />
            <ModuleThird />
        </div>
        <ModuleTitle />
    </dv-full-screen-container>
</template>

<style scoped>
.main {
    display: flex;
    /* flex-wrap: wrap; */
    width: 100%;
    /* gap: 5px; */
    /* padding: 0 5px; */
    /* margin: 5px; */
}
</style>
