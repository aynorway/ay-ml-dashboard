<script setup>
import { ref, reactive } from "vue";
</script>

<template>
    <div style="flex: 0 1 50%">
        <dv-border-box11 title="ay-ml-Dashboard" style="width:100%; height:600px" :color="['#4fd2dd', '#235fa7']">
            <div dv-bg>
            </div>
        </dv-border-box11>
        <dv-border-box8 :dur="5" style="width:100%; height:300px">
            <div dv-bg>
                <dv-decoration1 style="width:100%;height:50px;" />
                <dv-capsule-chart :config="config" style="width:25rem;height:15rem;padding:0px" />
            </div>
        </dv-border-box8>
    </div>
</template>

<style scoped></style>
