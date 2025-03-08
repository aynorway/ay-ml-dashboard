<script setup>
import { ref } from "vue";

</script>

<template>
    <div class="container">
        <dv-border-box8 :dur="5" style="width:400px; height:300px">
            <div dv-bg>
                dv-border-box8
            </div>
        </dv-border-box8>

        <dv-border-box12 style="width:400px; height:300px">
            <div dv-bg>
                dv-border-box-12
            </div>
        </dv-border-box12>

        <dv-border-box2 style="width:400px; height:300px" :color="['#4fd2dd', '#235fa7']">
            <div dv-bg>
                dv-border-box-2
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
