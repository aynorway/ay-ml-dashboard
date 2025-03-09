<script setup>
import { ref, reactive, onMounted } from "vue";
import * as echarts from 'echarts';

const chart = ref();
onMounted(() => {
    chartInit();
});
function chartInit() {
    if (!chart.value) return; // 确保 ref 绑定的 DOM 存在

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(chart.value);

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data: ['销量']
        },
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
            {
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }
        ], 
        grid: {
            left: '20%',
            right: '5%',
            top: '25%',
            bottom: '5%',
            cotainLabel: true,
        }
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // 根据容器缩放 监听器 resize()方法  
    window.addEventListener('resize', () => {
        myChart.resize()
    })
}
</script>

<template>
    <!-- 1 容器  -->
    <!-- 2 初始化  -->
    <!-- 3 渲染  -->

    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <div ref="chart" style="width: 100%;height:100%;"></div>


</template>

<style scoped></style>
