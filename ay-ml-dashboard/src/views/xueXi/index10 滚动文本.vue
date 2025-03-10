<template>
    <div class="scroll-container">
      <div class="scroll-content">
        <!-- 原始内容 -->
        <div v-for="(line, index) in lines" :key="index" class="scroll-item">
          {{ line }}
        </div>
        <!-- 复制一份用于无缝滚动 -->
        <div v-for="(line, index) in lines" :key="'dup-' + index" class="scroll-item">
          {{ line }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const lines = ref([
    '这是第一行滚动文本，带有链接：链接1',
    '这是第二行滚动文本，带有链接：链接2',
    '这是第三行滚动文本，带有链接：链接3',
    '这是第四行滚动文本，带有链接：链接4',
    '这是第五行滚动文本，带有链接：链接5'
  ]);
  </script>
  
  <style scoped>
  .scroll-container {
    width: 100%;
    height: 200px; /* 可根据需要调整容器高度 */
    overflow: hidden;
    background: rgba(0, 0, 0, 0.3); /* 半透明背景 */
    border: 1px solid #ffffff;  /* 边框颜色 */
    position: relative;
  }
  
  /* 滚动内容区域 */
  .scroll-content {
    position: absolute;
    top: 0;
    width: 100%;
    /* 动画：从初始位置向上滚动到负50%（因为复制了一份内容，实现无缝循环） */
    animation: scrollUp 10s linear infinite;
  }
  
  /* 每一行文本样式 */
  .scroll-item {
    padding: 10px;
    font-size: 14px;
    color: #fff;
  }
  
  /* 向上滚动的关键帧动画 */
  @keyframes scrollUp {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50%);
    }
  }
  </style>
  