<script setup>
import { ref, reactive } from "vue";
import Linechart from './chart/linechart.vue';
import Barchart from './chart/barchart.vue'
import Piechart from './chart/piechart.vue'

</script>

<template>
    <div style="flex: 0 1 25%">
        <dv-border-box8 :dur="5" style="width:100%; height:350px; overflow: hidden; /* 防止溢出 */">
            <div dv-bg>
                <dv-decoration1 style="width:100%;height:50px;" />
                <Linechart />
            </div>
        </dv-border-box8>
        <dv-border-box8 :dur="5" style="width:100%; height:350px">
            <div dv-bg>
                <dv-decoration1 style="width:100%;height:50px;" />
                <Barchart />
            </div>
        </dv-border-box8>
        <dv-border-box8 :dur="5" style="width:100%; height:350px">
            <div dv-bg>
                <dv-decoration1 style="width:100%;height:50px;" />
                <Piechart />
            </div>
        </dv-border-box8>
    </div>
</template>

<style scoped></style>
