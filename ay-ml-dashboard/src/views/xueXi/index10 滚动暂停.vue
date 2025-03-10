<template>
    <div class="scroll-container" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <!-- 右上角的暂停/继续按钮 -->
      <button class="pause-button" @click="togglePause">
        {{ isPausedButton ? '继续' : '暂停' }}
      </button>
      <!-- 滚动内容区域，通过 inline 样式控制动画的 play state -->
      <div class="scroll-content" :style="{ animationPlayState: finalAnimationState }">
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
    <!-- 下方的真实链接 -->
    <div class="link-container">
      <a href="https://github.com/aynorway/ay-ml-dashboard" target="_blank">这个 dashboard</a>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  // 滚动文本内容，可以根据需要修改或通过接口动态获取
  const lines = ref([
    
    '<a href="https://github.com/aynorway/ay-ml-dashboard" target="_blank">这个 dashboard</a>'
    </div>,
    '这是第二行滚动文本',
    '这是第三行滚动文本',
    '这是第四行滚动文本',
    '这是第五行滚动文本'
  ]);
  
  // 控制按钮的暂停状态
  const isPausedButton = ref(false);
  // 控制鼠标悬停状态
  const isHovered = ref(false);
  
  // 如果按钮暂停或鼠标悬停，则动画暂停；否则继续运行
  const finalAnimationState = computed(() => {
    return (isPausedButton.value || isHovered.value) ? 'paused' : 'running';
  });
  
  function togglePause() {
    isPausedButton.value = !isPausedButton.value;
  }
  
  function handleMouseEnter() {
    isHovered.value = true;
  }
  
  function handleMouseLeave() {
    isHovered.value = false;
  }
  </script>
  
  <style scoped>
  .scroll-container {
    width: 100%;
    height: 200px; /* 根据需要调整容器高度 */
    overflow: hidden;
    background: rgba(0, 0, 0, 0.3); /* 半透明背景 */
    border: 1px solid #ffffff;
    /* 确保右侧边框清晰可见 */
    border-right: 1px solid #ffffff;
    position: relative;
    box-sizing: border-box;
  }
  
  /* 右上角按钮样式 */
  .pause-button {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 10;
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 12px;
  }
  
  .pause-button:hover {
    background: rgba(255, 255, 255, 0.4);
  }
  
  /* 滚动内容区域 */
  .scroll-content {
    position: absolute;
    top: 0;
    width: 100%;
    animation: scrollUp 10s linear infinite;
    /* 动画暂停状态由 inline style 控制 */
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
  
  /* 下方链接样式 */
  .link-container {
    margin-top: 10px;
    text-align: center;
  }
  
  .link-container a {
    color: #fff;
    text-decoration: underline;
    font-size: 14px;
  }
  </style>
  