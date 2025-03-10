<template>
  <div class="scroll-container" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <!-- Top-right Pause/Resume Button -->
    <button class="pause-button" @click="togglePause">
      {{ isPausedButton ? 'Resume' : 'Pause' }}
    </button>
    <!-- Scroll content area, animation play state is controlled inline -->
    <div class="scroll-content" :style="{ animationPlayState: finalAnimationState }">
      <!-- Original content -->
      <div v-for="(line, index) in lines" :key="index" class="scroll-item" v-html="line"></div>
      <!-- Duplicated for seamless scrolling -->
      <div v-for="(line, index) in lines" :key="'dup-' + index" class="scroll-item" v-html="line"></div>
    </div>
  </div>

</template>

<script setup>
import { ref, computed } from 'vue';

// Scrolling text content
const lines = ref([
  `<h3>Frontend</h3>
   <ul>
     <li><strong>Framework</strong>: Vue 3</li>
     <li><strong>Visualization</strong>: DataV + ECharts + GeoJSON</li>
     <li><strong>Routing</strong>: Vue Router 4</li>
     <li><strong>HTTP Client</strong>: Fetch API</li>
     <li><strong>UI</strong>: Element Plus</li>
     <li><strong>Build Tool</strong>: Vite</li>
   </ul>`,

  `<h3>Backend</h3>
   <ul>
     <li><strong>Runtime</strong>: Node.js 18+</li>
     <li><strong>Web Framework</strong>: Express</li>
     <li><strong>Database</strong>: MySQL 8 (Docker)</li>
     <li><strong>API Style</strong>: RESTful</li>
   </ul>`,

  `<h3>DevOps</h3>
   <ul>
     <li><strong>Database Management</strong>: MySQL Workbench</li>
     <li><strong>Containerization</strong>: Docker</li>
     <li><strong>API Testing</strong>: curl</li>
     <li><strong>Version Control</strong>: Git</li>
   </ul>`,

  `<h3>Features</h3>
   <h4>Visualization Modules</h4>
   <ul>
     <li>Real-time stock price dashboard</li>
     <li>Interactive charts (Bar/Line/Pie/Radar)</li>
     <li>GeoJSON-based geographic visualization</li>
     <li>Responsive layout for multiple screen sizes</li>
     <li>Component reuse with Vue props</li>
   </ul>`
]);

const isPausedButton = ref(false);
const isHovered = ref(false);

const finalAnimationState = computed(() => {
  return isPausedButton.value || isHovered.value ? 'paused' : 'running';
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
  /* 让它随父容器变化，而不是写死 */
  max-width: 100%;
  height: 280px; 
  /* 不再固定高度 */
  overflow: hidden;
  /* background: rgba(0, 0, 0, 0.3); */
  /* border: 1px solid #ffffff; */
  position: relative;
  box-sizing: border-box;
  padding-top: 30px; /* 给按钮留空间 */
}


/* Top-right button */
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

/* Scroll content */
.scroll-content {
  /* position: absolute; */
  position: relative; 
  top: 0;
  width: 100%;
  animation: scrollUp 20s linear infinite;
}

/* Scroll item */
.scroll-item {
  padding: 10px;
  font-size: 12px;
  color: #fff;
}

/* Scroll animation */
@keyframes scrollUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}


</style>
