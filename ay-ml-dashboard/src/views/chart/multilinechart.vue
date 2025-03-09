<script setup>
import { ref, reactive } from "vue";

const option1 = {
    title: {
        text: '2024 Exchange Rate Trends (CAD Base)',
        style: {
            fill: '#fff',
            fontSize: 12,
            textAlign: 'center',
            textBaseline: 'bottom'
        }
    },
    xAxis: {
        name: '',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        nameTextStyle: {
            fill: '#fff',
            fontSize: 10,
        },
        axisLabel: {
            style: {
                fill: '#fff',
                fontSize: 9
            }
        },
        axisLine: {
            style: {
                stroke: '#fff'
            }
        },
        axisTick: {
            style: {
                stroke: '#0ff'
            }
        },
    },
    yAxis: {
        name: 'Exchange Rate',
        min: 1.30,  // 适应数据范围
        max: 1.80,  // 最高点        
        interval: 0.1,  // 关键：间隔 0.2
        data: 'value',
        nameTextStyle: {
            fill: '#fff',
            fontSize: 9,
        },
        axisLabel: {
            style: {
                fill: '#fff'
            }
        },
        axisLine: {
            style: {
                stroke: '#fff'
            }
        },
        axisTick: {
            style: {
                stroke: '#0ff'
            }
        },
        splitLine: {
            // show: false
            show: true,
            style: {
                stroke: '#444', // 颜色加深一点
                lineDash: [4, 4]  // 虚线刻度
            }
        }
    },
    legend: {
        data: ['USD/CAD', 'EUR/CAD', 'GBP/CAD'],
        textStyle: {
            fontFamily: 'Arial',
            fontSize: 9, // 字体变小
            fill: '#fff'
        }
    },
    tooltip: {
        show: true,
        // trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: '#fff',
                width: 1
            }
        }
    },
    series: [
        {
            name: 'USD/CAD',
            data: [1.3759, 1.38, 1.37, 1.36, 1.3759, 1.38, 1.3809, 1.37, 1.3563, 1.37, 1.3980, 1.39],
            type: 'line',
            smooth: true,
            lineStyle: {
                stroke: '#4A90E2', // 蓝色
                width: 2
            }
        },
        {
            name: 'EUR/CAD',
            data: [1.4700, 1.48, 1.49, 1.50, 1.4700, 1.48, 1.4949, 1.50, 1.5119, 1.50, 1.4794, 1.48],
            type: 'line',
            smooth: true,
            lineStyle: {
                stroke: '#50E3C2', // 绿色
                width: 2
            }
        },
        {
            name: 'GBP/CAD',
            data: [1.7188, 1.73, 1.74, 1.75, 1.7188, 1.73, 1.7735, 1.78, 1.7998, 1.79, 1.7778, 1.78],
            type: 'line',
            smooth: true,
            lineStyle: {
                stroke: '#F5A623', // 橙色
                width: 2
            }
        }
    ]
};

</script>

<template>
    <div>
        <p style="text-align:center; font-size:9px; color:#fff;">
            Data Source:
            <a href="https://www.bankofcanada.ca/rates/exchange/daily-exchange-rates/" target="_blank"
                style="color:#0ff; text-decoration:underline;">
                Bank of Canada - daily-exchange-rates
            </a>
        </p>
        <dv-charts :option="option1" style="width:100%;height:15rem; margin-top: -1rem;" />

    </div>
</template>

<style scoped>
div {
    /* padding: 10px; */
    max-width: 100%;
    /* overflow-x: auto; */
    /* margin-top: 1rem; */
}
</style>
