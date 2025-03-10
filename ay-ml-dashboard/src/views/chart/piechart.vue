<script setup>
import { ref, reactive } from "vue";

const option1 = {
  title: {
    text: '2024 CPI Components Breakdown (Canada)',
    style: {
      fill: '#fff',
      fontSize: 12,
      // fontWeight: 'light',
      textAlign: 'center',
      textBaseline: 'bottom'
    }
  },
  series: [
    {
      type: 'pie',
    //   style: {
    //   fill: '#fff',
    //   fontSize: 19,
    // },
      data: [
        { name: 'Shelter', value: 30 },
        { name: 'Transportation', value: 20 },
        { name: 'Food', value: 25 },
        { name: 'Recreation & Culture', value: 10 },
        { name: 'Health & Personal Care', value: 10 },
        { name: 'Other', value: 5 }
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
    <dv-charts :option="option1" style="width:25rem;height:15rem; margin-top: 1rem;" />
  </div>
</template>

<style scoped></style>
