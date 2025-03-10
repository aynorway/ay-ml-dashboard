<script setup>
import { ref, reactive } from "vue";
import Multilinechart from './chart/multilinechart.vue'
import Index8 from './index8.vue';

</script>

<template>
    <div style="flex: 0 1 25%">
        <!-- <dv-border-box8 :dur="5" style="width:100%; height:350px;"> -->
        <dv-border-box8 :dur="5" style="width:100%; height:350px; overflow: hidden;">
            <div dv-bg style="height: 100%; display: flex; flex-direction: column;">
                <dv-decoration1 style="width:100%;height:50px;" />
                <Index8 />
            </div>
        </dv-border-box8>

        <dv-border-box8 :dur="5" style="width:100%; height:350px; overflow: hidden;">
            <div dv-bg>
                <dv-decoration1 style="width:100%;height:50px;" />
                <!-- <dv-capsule-chart :config="config" style="width:25rem;height:15rem;padding:0px" /> -->
                <Multilinechart />
            </div>
        </dv-border-box8>

        <dv-border-box8 :dur="5" style="width:100%; height:350px; overflow: hidden;">
            <div dv-bg>
                <dv-decoration1 style="width:100%;height:50px;" />
                <dv-capsule-chart :config="config" style="width:25rem;height:15rem;padding:0px" />
            </div>
        </dv-border-box8>
    </div>
</template>

<style scoped></style>
