<script setup>
import { ref } from "vue";
</script>

<template>
    <!-- <div> The first page </div> -->
    <div class="container">
        <!-- <div class="item" style="flex: 0 1 20%">1</div>
        <div class="item" style="flex: 0 1 60%">2</div>
        <div class="item" style="flex: 0 1 20%">3</div> -->
        <div class="item item1">1
            <div class="box"></div>
        </div>
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
.box{
    width: 100px;
    height: 100px; 
    background-color: pink;
    transform: scale(.5,2);
    /* transform: scale(水平,垂直); */
}
/* transform: 缩放属性  对元素变形    优点:简单 不需要计算 */


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

</style>
