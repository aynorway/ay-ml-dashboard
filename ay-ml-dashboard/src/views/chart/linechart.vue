<script setup>
import { ref, reactive } from "vue";

const option1 = {
    title: {
        text: '周销售额趋势'
    },
    xAxis: {
        name: '第二周',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        name: '销售额',
        data: 'value'
    },
    series: [
        {
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
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
        <dv-charts :option="option1" style="width:25rem;height:15rem;"/>
    </div>
</template>

<style scoped>

</style>
