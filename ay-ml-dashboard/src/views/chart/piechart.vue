<script setup>
import { ref, reactive } from "vue";

const option1 = {
  title: {
    text: '畅销饮料占比饼状图'
  },
  series: [
    {
      type: 'pie',
      data: [
        { name: '可口可乐', value: 93 },
        { name: '百事可乐', value: 32 },
        { name: '哇哈哈', value: 65 },
        { name: '康师傅', value: 44 },
        { name: '统一', value: 52 },
      ],
      insideLabel: {
        show: true
      },
      roseType: true
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
