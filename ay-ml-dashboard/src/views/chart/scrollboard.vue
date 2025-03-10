<script lang="ts" setup>
import { ref, reactive } from "vue";

import type { ScrollBoard } from '@kjgl77/datav-vue3/index';

const config = reactive({
    header: ['Stock', 'Price ($)', 'Change (%)'],
    headerBGC: 'rgba(4,5,14, 0.6)',  // 表头半透明
    oddRowBGC: 'rgba(20, 7, 74, 0.3)',  // 奇数行半透明灰色
    evenRowBGC: 'rgba(51, 46, 94, 0.2)', // 偶数行半透明浅灰
    headerHeight: 28,  // 标题行高度
    rowNum: 7, // 可见行数 // 可以直接调整 
    // columnWidth: ['auto'], // 列宽自适应
    columnWidth: [50],
    waitTime: 2000, //ms 
    align: ['center'], // 所有列居中
    data: [
        ['Tesla', '876.12', '<span style="color:#00ff00;">+5.3%</span>'],
        ['Apple', '191.54', '<span style="color:#ff4d4d;">-1.2%</span>'],
        ['Microsoft', '349.68', '<span style="color:#33cc33;">+2.1%</span>'],
        ['Shopify', '65.12', '<span style="color:#ff9933;">-3.8%</span>'],
        ['Google', '2789.43', '<span style="color:#99ff33;">+0.9%</span>'],
        ['Amazon', '145.76', '<span style="color:#00cc00;">+1.4%</span>'],
        ['Netflix', '413.32', '<span style="color:#ff6666;">-2.5%</span>'],
        ['NVIDIA', '903.21', '<span style="color:#009900;">+6.2%</span>'],
        ['Meta', '318.54', '<span style="color:#ff3300;">-4.1%</span>'],
        ['AMD', '121.33', '<span style="color:#00ff99;">+3.5%</span>'],
        ['Intel', '48.77', '<span style="color:#ffcc00;">-0.5%</span>'],
        ['Berkshire Hathaway', '511.00', '<span style="color:#66ff66;">+2.7%</span>'],
        ['JP Morgan', '167.88', '<span style="color:#ff8000;">-3.0%</span>'],
        ['Goldman Sachs', '366.14', '<span style="color:#33ff99;">+4.8%</span>'],
        ['Disney', '98.76', '<span style="color:#ff1a1a;">-1.9%</span>'],
        ['Visa', '233.87', '<span style="color:#66cc66;">+0.3%</span>'],
        ['Mastercard', '413.15', '<span style="color:#ffb366;">-2.1%</span>'],
        ['Coca Cola', '61.09', '<span style="color:#339900;">+1.8%</span>'],
        ['McDonald\'s', '289.54', '<span style="color:#ff4d4d;">-0.8%</span>'],
        ['Starbucks', '107.45', '<span style="color:#00b300;">+2.5%</span>']
    ],
    index: true,
})

const data2 = [
    ['Tesla', '880.45', '<span style="color:#009900;">+4.2%</span>'],
    ['Apple', '189.99', '<span style="color:#ff3333;">-0.8%</span>'],
    ['Microsoft', '355.00', '<span style="color:#33cc33;">+1.5%</span>'],
    ['Shopify', '62.89', '<span style="color:#ff9900;">-2.3%</span>'],
    ['Google', '2795.00', '<span style="color:#99ff33;">+0.5%</span>'],
    ['Amazon', '148.50', '<span style="color:#00cc00;">+2.0%</span>'],
    ['Netflix', '410.10', '<span style="color:#ff6666;">-0.8%</span>'],
    ['NVIDIA', '915.30', '<span style="color:#009900;">+4.8%</span>'],
    ['Meta', '320.00', '<span style="color:#ff1a1a;">-2.5%</span>'],
    ['AMD', '125.47', '<span style="color:#00ff99;">+3.8%</span>'],
    ['Intel', '49.25', '<span style="color:#ffcc00;">+0.2%</span>'],
    ['Berkshire Hathaway', '513.00', '<span style="color:#66ff66;">+1.5%</span>'],
    ['JP Morgan', '165.42', '<span style="color:#ff6600;">-1.5%</span>'],
    ['Goldman Sachs', '369.00', '<span style="color:#33ff99;">+1.2%</span>'],
    ['Disney', '97.89', '<span style="color:#ff3333;">-0.9%</span>'],
    ['Visa', '236.44', '<span style="color:#66cc66;">+1.1%</span>'],
    ['Mastercard', '417.00', '<span style="color:#ffb366;">-0.5%</span>'],
    ['Coca Cola', '62.00', '<span style="color:#339900;">+1.5%</span>'],
    ['McDonald\'s', '287.00', '<span style="color:#ff4d4d;">-0.7%</span>'],
    ['Starbucks', '108.50', '<span style="color:#00b300;">+2.0%</span>']
];

const mouseoverHandler = (e: any) => {
    console.log(e)
}

const clickHandler = (e: any) => {
    console.log(e)
}

const scrollBoard = ref<InstanceType<typeof ScrollBoard>>(null)

const updateRows = () => {
    if (scrollBoard.value)
        // 此处可以传第二个参数 index，指定下次滚动的起始行
        scrollBoard.value.updateRows(data2)
}

</script>

<template>
    <div style="font-size:9px;">
        <div w50rem h20rem p5 flex="~ col" justify-center items-center bg-dark>
            <div pt5 style="display: flex; justify-content: center; 
            width: 100%; 
            ">
                <dv-scroll-board ref="scrollBoard" :config="config" style="
                width:100%; height:220px; 
                max-width: 100%; 
                /* margin: 0 auto;  */
                /* overflow: hidden; */
                "@mouseover="mouseoverHandler" @click="clickHandler" />
            </div>

            <div py5 style="text-align:center; margin-top: 3%;">
                <button btn @click="updateRows" style="
                font-size:9px; 
                color:#0ff; 
                padding: 2px 6px;
                background-color: #293151;
                ">                    
                UpdateRows
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
