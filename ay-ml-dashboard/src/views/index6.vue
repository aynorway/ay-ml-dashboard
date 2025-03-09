<script setup>
import { ref, reactive, onMounted } from "vue";
import * as echarts from 'echarts'; // 引入 
import caMap from '../assets/json/canada.geojson?raw' // Vite 需要加 raw 标记

//声明容器 
let chart = ref();

// Real Gross Domestic Product (GDP) of Canada in 2023, by province (in million chained 2017 Canadian dollars)
const gdpData = {
    "Ontario": 852729.2,
    "Quebec": 429218.6,
    "Alberta": 336299.9,
    "British Columbia": 304127.2,
    "Saskatchewan": 77898.6,
    "Manitoba": 69389.6,
    "Nova Scotia": 43765.1,
    "New Brunswick": 34792,
    "Newfoundland and Labrador": 28950.2,
    "Prince Edward Island": 7267.1,
    "Northwest Territories": 4250.9,
    "Nunavut": 3868.6,
    "Yukon Territory": 3350.2,
};

// 省会坐标数据
const capitals = [
    { name: 'Toronto', value: [-79.3832, 43.6532] },           // Ontario
    { name: 'Quebec City', value: [-71.2082, 46.8131] },         // Quebec
    { name: 'Edmonton', value: [-113.4909, 53.5444] },             // Alberta
    { name: 'Victoria', value: [-123.3656, 48.4284] },             // British Columbia
    { name: 'Regina', value: [-104.6189, 50.4452] },               // Saskatchewan
    { name: 'Winnipeg', value: [-97.1384, 49.8951] },              // Manitoba
    { name: 'Halifax', value: [-63.5752, 44.6488] },               // Nova Scotia
    { name: 'Fredericton', value: [-66.6431, 45.9636] },           // New Brunswick
    { name: "St. John's", value: [-52.7126, 47.5615] },            // Newfoundland and Labrador
    { name: 'Charlottetown', value: [-63.1311, 46.2382] },         // Prince Edward Island
    { name: 'Yellowknife', value: [-112.4728, 62.4539] },          // Northwest Territories
    { name: 'Iqaluit', value: [-68.5163, 63.7467] },               // Nunavut
    { name: 'Whitehorse', value: [-135.0568, 60.7212] }             // Yukon
];

// 加载
onMounted(() => {
    chartInit();
});

// 图表初始化方法 实例 
function chartInit() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(chart.value);
    const caGeoJSON = JSON.parse(caMap); // 需要解析原始JSON字符串

    // 注册地图 
    echarts.registerMap('CA', caGeoJSON);

    // option 图表的配置项和数据
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                // 针对地图（省份）显示 GDP 数据
                if (params.seriesType === 'map') {
                    return `${params.name}<br/>GDP: ${params.value} million CAD`;
                }
                // 针对省会 scatter 点仅显示名称
                return `${params.name}`;
            }
        },
        visualMap: {
            min: 3000,
            max: 600000,
            left: '30%',
            top: '71%',
            orient: 'horizontal',  // 改为横向
            text: ['High', 'Low'],
            textStyle: {
                color: 'white'  // 文字颜色
            },
            calculable: true,
            inRange: {
                // 梯度颜色渐变，可根据需要调整
                color: ['#00000088', '#0000CD']
                // color: ['lightskyblue','yellow', 'orangered']
                // color: ['dark','yellow', 'orangered']
            },
        },
        geo: {
            map: 'CA',  // 使用注册的地图名称
            roam: true, // 允许缩放和拖动
            zoom: 1.2, // 初始缩放级别
            left: '10%',
            top: '-5%',
            label: {
                show: true,
                fontSize: 13,
                color: '#fff',  // 省份名 文字颜色
                // color: '#00ff',  // 省份名 文字颜色
                fontWeight: 'bold' // 省份名 
            },
            itemStyle: {
                // borderColor: '#fff', 
                borderColor: '#0ff', // 边界颜色 
                // borderColor: '#00f', 
                borderWidth: 0.5,
            },
            emphasis: {  // 高亮状态样式
                itemStyle: {
                    areaColor: '#0ff', 
                    borderColor: '#fff',
                    // borderColor: '#00ff',
                    borderWidth: 2,
                },
                label: {
                    show: true,
                    fontSize: 18,
                    // color: 'blue',
                    // color: 'orangered',
                    // color: '#0f0',
                    color: '#fff',
                    // color: 'yellow',

                }
            },
        },
        series: [
            {
                type: 'map',
                geoIndex: 0, // 关联 geo 组件
                data: caGeoJSON.features.map(f => {
                    // 这里假设 f.properties.name 与 gdpData 的键一致
                    const provinceName = f.properties.name;
                    return {
                        name: provinceName,
                        value: gdpData[provinceName] || 0
                    }
                })
            },
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin',
                symbolSize: 7,
                label: {
                    show: true,
                    formatter: '{b}',
                    position: 'bottom',
                    fontSize: 10,
                    color: '#f60'  // 省会文字颜色
                },
                itemStyle: {
                    borderColor: '#f60', // 城市标记 
                    position: 'bottom',
                    borderWidth: 1.5,
                },
                data: capitals
            }
        ],
        // grid: {
        //     left: '5%',
        //     right: '5%',
        //     top: '-10%',
        //     bottom: '15%',
        //     cotainLabel: true,
        // }
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    // 根据容器缩放 响应式 // 监听器 // resize()方法 随窗口大小变化 
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
    <!-- 修改模板中的容器样式 -->
    <div ref="chart" style="width: 100%; height: 560px;"></div>

</template>

<style scoped></style>
