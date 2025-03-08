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
        <!-- <div class="item item5">5</div>
        <div class="item item6">6</div>
        <div class="item item7">7</div>
        <div class="item item8">8</div>
        <div class="item item9">9</div> -->
    </div>
</template>

<style scoped>
/* 网格布局(二维布局) 同时处理行或列 可以自动缩放区块大小 里面元素没包括*/
.container {
    display: grid;
    width: 100%;
    height: 100%;
    background-color: #101110;
    /* grid-template-columns: repeat(3, 1fr); */
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
}

.item {
    flex: 1;
    border: 1px solid red;
    color: aliceblue;
}

/* 跨列 */
.item1 {
    grid-column: 1 / 3;
}

/* 跨行 , 要告诉列的位置 */
.item2 {
    grid-row: 1/3;
    grid-column: 3/4;
}


/* 弹性布局(一维布局) 按行或列 要设置自动换行 */
/* .container {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #101110;
    flex-wrap: wrap; 

.item {
    flex: 1;
    border: 1px solid red;
    width: 33%;
    height: 33%;
} */

</style>
