<script setup>
import { ref } from "vue";
</script>

<template>
    <!-- <div> The first page </div> -->
    <div class="container">
        <!-- <div class="item" style="flex: 0 1 20%">1</div>
        <div class="item" style="flex: 0 1 60%">2</div>
        <div class="item" style="flex: 0 1 20%">3</div> -->
        <div class="item item1">1</div>
        <div class="item item2">2</div>
        <div class="item item3">3</div>
        <div class="item item4">4</div>
        <div class="item item5">5</div>
        <div class="item item6">6</div>
        <div class="item item7">7</div>
        <div class="item item8">8</div>
        <!-- <div class="item item9">9</div> -->
    </div>
</template>

<style scoped>
/* 网格布局(二维布局) 同时处理行或列*/
.container {
    display: grid;
    width: 100%;
    height: 100%;
    background-color: #101110;
    grid-template-columns: 1fr 2fr 1fr; 
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
}

.item {
    /* flex: 1; */
    border: 1px solid red;
    color: aliceblue;
    font-size: 2vw;
    /* margin:0%; */
}

/* 跨行 , 要告诉列的位置 */
.item2 {
    grid-row: 1/3;
    grid-column: 2/3;
}

 /* 百分比: 原理简单, 但是屏幕太大的时候, 很麻烦 */
 /* rem: 相对单位 相对根元素html的font-size值的大小 */
 /* font-size: 16px; 1rem = 16px 
 if font-size: 62.5% = 10px ; 1rem = 10px;  */
 /* vwvh 相对单位 相对于当前视口的宽度 */
 /* 375 1vw=3.75vw 100vw=375 */

</style>
