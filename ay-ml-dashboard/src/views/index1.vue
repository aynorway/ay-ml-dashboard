<script setup>
import { ref, reactive } from "vue";
const config = reactive({
    data: [
        {
            name: 'ON',
            value: 167
        },
        {
            name: 'QC',
            value: 123
        },
        {
            name: 'BC',
            value: 98
        },
        {
            name: 'AB',
            value: 75
        },
        {
            name: 'MB',
            value: 66
        },
    ],
    colors: ['#ffbc38', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
    unit: '$',
    labelNum: 8,
})


const config2 = reactive({
  data: [66, 45],
  shape: 'roundRect',
})




</script>

<template>
    <div class="container">
        <dv-border-box8 :dur="5" style="width:400px; height:300px">
            <div dv-bg>
                <dv-decoration1 style="width:200px;height:50px;" />
                <dv-capsule-chart :config="config" style="width:25rem;height:15rem;padding:30px" />
            </div>
        </dv-border-box8>

        <dv-border-box12 style="width:400px; height:300px">
            <div dv-bg>
                <!-- <dv-decoration2 :dur="1" style="width:400px;height:5px;" /> -->
                <dv-water-level-pond :config="config2" style="width:150px;height:200px" />
            </div>
        </dv-border-box12>

        <dv-border-box2 style="width:400px; height:300px" :color="['#4fd2dd', '#235fa7']">
            <div dv-bg>
                <!-- <dv-decoration-12 style="width:150px;height:150px;" /> -->
                <dv-conical-column-chart :config="config" style="width:400px;height:200px;" />
            </div>
        </dv-border-box2>

        <dv-border-box11 title="ay-ml-dashboard" style="width:400px; height:300px" :color="['#4fd2dd', '#235fa7']">
            <div dv-bg>
                dv-border-box-11
            </div>
        </dv-border-box11>
    </div>
</template>

<style scoped>
.container {
    /* display: flex; 弹性布局 一维 */
    display: flex;
    flex-wrap: wrap;
}
</style>
