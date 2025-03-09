<script setup>
import { ref, reactive } from "vue";

const option1 = {
    title: {
        text: '2024 Annual Inflation Rate (Canada)',
        style: {
            fill: '#fff',
            fontSize: 12,
            // fontWeight: 'bold',
            textAlign: 'center',
            textBaseline: 'bottom'
        }
    },
    xAxis: {
        name: '',
        data: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        nameTextStyle: {
            fill: '#fff',
            fontSize: 10,
        },
        axisLabel: { // 坐标名称
            style: {
                fill: '#fff',
                rotate: 0,
            }
        },
        axisLine: { // 坐标轴线
            style: {
                stroke: '#fff',
            }
        },
        axisTick: { // 轴上刻度线 
            style: {
                stroke: '#0ff',
            }
        },
    },
    yAxis: {
        name: 'Inflation Rate (%)',
        data: 'value',
        nameTextStyle: {
            fill: '#fff',
            fontSize: 10,
        },
        axisLabel: { // 坐标名称
            style: {
                fill: '#fff',
                rotate: 0,
            }
        },
        axisLine: { // 坐标轴线
            style: {
                stroke: '#fff',
            }
        },
        axisTick: { // 轴上刻度线 
            style: {
                stroke: '#0ff',
            }
        },
        splitLine: { // Y轴分割线(横向)隐藏 
            show: false
            // show: true 
        }
    },
    series: [
        {
            data: [2.9, 2.8, 2.9, 2.7, 2.9, 2.7, 2.5, 2.0, 1.6, 2.0, 1.9, 1.8],
            type: 'line',
            lineArea: {
                show: true,
                gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
            }
        }
    ]
}

</script>

<template>
    <div>
        <p style="text-align:center; font-size:9px; color:#fff;">
            Data Source: <a
                href="https://www.bankofcanada.ca/rates/indicators/key-variables/key-inflation-indicators-and-the-target-range/"
                target="_blank" style="color:#0ff; text-decoration:underline;">
                Bank of Canada - key-inflation-indicators-and-the-target-range</a>
            <!-- |
                    <a href="https://open.canada.ca/data/en/dataset" target="_blank"
                        style="color:#0ff; text-decoration:underline;">
                        Open Data Canada</a> -->
        </p>
        <dv-charts :option="option1" style="width:100%; max-width:100%; height:15rem; margin-top: -1rem;" />

    </div>
</template>

<style scoped></style>
