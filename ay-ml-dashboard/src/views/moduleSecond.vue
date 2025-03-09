<script setup>
import { ref, reactive } from "vue";
import Multilinechart from './chart/multilinechart.vue';
import ScrollBoard from './chart/scrollboard.vue';

</script>

<template>
    <div style="flex: 0 1 50%">
        <dv-border-box11 title="ay-ml-Dashboard" style="width:100%; height:600px; overflow: hidden;" :color="['#4fd2dd', '#235fa7']">
            <div dv-bg>
            </div>
        </dv-border-box11>
        <dv-border-box8 :dur="5" style="width:100%; height:300px; overflow: hidden;">
            <div dv-bg>
                <dv-decoration1 style="width:100%;height:50px;" />
                <!-- <Multilinechart /> -->
                <ScrollBoard />
            </div>
        </dv-border-box8>
    </div>
</template>

<style scoped></style>
