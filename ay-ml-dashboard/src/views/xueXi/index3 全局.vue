<script setup>
import { ref, reactive, onMounted } from "vue";
import ModuleTitle from './moduleTitle.vue'
import ModuleFirst from './moduleFirst.vue'
import ModuleSecond from './moduleSecond.vue'
import ModuleThird from './moduleThird.vue'

let screen = ref();
// 根据浏览器大小, 推断缩放比例 
const getScale = (width = 1920, height = 1080) => {
    let ww = window.innerWidth / width
    let wh = window.innerHeight / height
    return ww < wh ? ww : wh
}
onMounted(() => {
    screen.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
    // 不能有空格 translate(-50%, -50%) 
})
window.onresize = () => {
    screen.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
}

</script>

<template>
    <!-- <dv-full-screen-container>
        <ModuleTitle />
        <div class="main">
            <ModuleFirst />
            <ModuleSecond />
            <ModuleThird />
        </div>
    </dv-full-screen-container> 
    -->

    <div class="container" ref="screen">
        <ModuleTitle />
        <div class="main">
            <ModuleFirst />
            <ModuleSecond />
            <ModuleThird />
        </div>
    </div>

</template>

<style scoped>
.container {
    position: fixed; 
    width: 1920px;
    height: 1080px;
    left: 50%;
    top: 50%;
    transform-origin: left top;

}

.main {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    /* gap: 5px; */
    /* padding: 0 5px; */
    /* margin: 5px; */
    /* transform: scale(0.98); */
}
</style>
