<script setup>
import { ref, reactive } from "vue";

const option1 = {
  title: {
    text: 'Toronto Temperature and Rainfall 2025 Trends',
    style: {
      fill: '#fff',
      fontSize: 12,
      // fontWeight: 'light',
      textAlign: 'center',
      textBaseline: 'bottom'
    }
  },
  legend: {
    data: ['Rainfall', 'Temperature'],
    textStyle: {
      fontFamily: 'Arial',
      // fontSize: 13,
      fill: '#fff'
    },
    bottom: 10
  },
  xAxis: {
    data: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    nameTextStyle: {
      fill: '#fff',
      fontSize: 10,
    },
    axisLine: { // 坐标轴线
      style: {
        stroke: '#fff',
      }
    },
    axisTick: { // 轴上刻度线 
      show: false,
      style: {
        stroke: '#0ff',
      }
    },
    axisLabel: {
      style: {
        fill: '#fff',
        rotate: 30,
        textAlign: 'left',
        textBaseline: 'top'
      }
    },
  },
  yAxis: [
    {
      name: 'Rainfall',
      nameTextStyle: {
        fill: '#fff',
        fontSize: 10,
      },
      data: 'value',
      min: 0,
      max: 150,
      interval: 20,
      splitLine: {
        style: {
          lineDash: [3, 3]
        }
      },
      axisLabel: {
        formatter: '{value} ml',
        style: {
          fill: '#fff',
          // textAlign: 'left',
          textBaseline: 'top'
        }
      },
      axisTick: {
        show: false
      },
      axisLine: { // 坐标轴线
        style: {
          stroke: '#fff',
        }
      },
      axisTick: { // 轴上刻度线 
        show: false,
        style: {
          stroke: '#0ff',
        }
      },

    },
    {
      name: 'Temperature',
      nameTextStyle: {
        fill: '#fff',
        fontSize: 10,
      },
      data: 'value',
      position: 'right',
      min: -5,
      max: 30,
      interval: 5,
      splitLine: {
        show: false
      },
      axisLabel: {
        formatter: '{value} °C',
        style: {
          fill: '#fff',
          // textAlign: 'left',
          textBaseline: 'top'
        }
      },
      axisTick: {
        show: false
      }
    }
  ],
  series: [
    {
      name: 'Rainfall',
      data: [55, 45, 70, 80, 90, 100, 90, 90, 80, 75, 70, 65],
      type: 'bar',
      gradient: {
        color: ['rgba(55, 162, 218, 0.9)', 'rgba(55, 162, 218, 0)']
      },
      animationCurve: 'easeOutBounce'
    },
    {
      name: 'Temperature',
      data: [-2, -1, 4, 10, 16, 21, 24, 23, 18, 12, 6, 0],
      type: 'line',
      yAxisIndex: 1,
      animationCurve: 'easeOutBounce'
    }
  ]
}

</script>

<template>
  <div>
    <dv-charts :option="option1" style="width:100%; height:15rem; margin-top: -1rem;" />
  </div>
</template>

<style scoped></style>
