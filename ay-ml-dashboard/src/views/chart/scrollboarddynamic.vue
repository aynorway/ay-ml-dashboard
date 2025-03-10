<script lang="ts" setup>
import { ref, reactive, onMounted, onUnmounted } from "vue";
import type { ScrollBoardDynamic } from '@kjgl77/datav-vue3/index';

// 初始静态数据（确保数据量大于rowNum）
const initialData = [
    ['Loading...', '--', '<span style="color:#999">--%</span>'],
    ['Loading...', '--', '<span style="color:#999">--%</span>'],
    ['Loading...', '--', '<span style="color:#999">--%</span>'],
    ['Loading...', '--', '<span style="color:#999">--%</span>'],
    ['Loading...', '--', '<span style="color:#999">--%</span>'],
    ['Loading...', '--', '<span style="color:#999">--%</span>'],
    ['Loading...', '--', '<span style="color:#999">--%</span>'],
    ['Loading...', '--', '<span style="color:#999">--%</span>'],
    ['Loading...', '--', '<span style="color:#999">--%</span>'],
    ['Loading...', '--', '<span style="color:#999">--%</span>'],
];

const config = reactive({
    header: ['Stock', 'Price ($)', 'Change (%)'],
    headerBGC: 'rgba(4,5,14, 0.6)',
    oddRowBGC: 'rgba(20, 7, 74, 0.3)',
    evenRowBGC: 'rgba(51, 46, 94, 0.2)',
    headerHeight: 28,
    rowNum: 7,  // 显示行数根据容器高度调整
    // columnWidth: [45, 130, 100,140],  // 自定义 
    // columnWidth: ['18%', '32%', '50%'], // 百分比自适应 // 不好使 
    columnWidth: [50],
    waitTime: 2000,  // 单行停留时间(ms)
    align: ['center', 'center', 'center'],
    index: true,
    data: [...initialData],  // 初始填充数据
    carousel: 'single',
    hoverPause: true,
});

// 修改定时器类型声明（浏览器环境用number）
const interval = ref<number>();
const scrollBoard = ref<InstanceType<typeof ScrollBoardDynamic>>();

// 在fetchData中添加加载状态
const isLoading = ref(true);

// 增强版数据获取
const fetchData = async () => {
    isLoading.value = true;
    try {
        const response = await fetch('http://localhost:3000/stocks');
        const result = await response.json();

        if (result.success && scrollBoard.value) {
            // 生成双倍数据保证滚动连续性
            const duplicatedData = [...result.data, ...result.data];

            const newData = duplicatedData.map(item => [
                item.name,
                `$${item.price.toFixed(2)}`,
                `<span style="
                color: ${item.is_positive ? '#00ff88' : '#ff4444'};
                display: inline-block;
                padding: 2px 8px;
                ">${item.change_percent >= 0 ? '+' : ''}${item.change_percent.toFixed(2)}%</span>`
            ]);

            // 平滑更新方法
            scrollBoard.value.updateRows(newData, {
                animation: true,
                animationDuration: 2000 // 500ms过渡动画
            });
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
};

// 修改定时器设置方式
onMounted(() => {
    fetchData();
    interval.value = window.setInterval(fetchData, 15000); // 使用window对象
});

onUnmounted(() => {
    clearInterval(interval.value);
});
</script>

<template>
    <div style="font-size:9px;">
        <div w50rem h20rem p5 flex="~ col" justify-center items-center bg-dark>
            <div pt5 style="display: flex; justify-content: center; 
            width: 100%; 
            ">
                <dv-scroll-board ref="scrollBoard" :config="config" style="
                width:100%; height: 220px;
                "/>
            </div>

            <div py5 style="text-align:center; margin-top: 3%;">
                <button @click="fetchData" style="
                    font-size:9px; 
                    color:#0ff; 
                    background-color: #293151;
                    padding: 2px 6px;
                    border: 1px solid #0ff3;
                    border-radius: 3px;
                    cursor: pointer;
                    /* transition: opacity 0.3s; */
                    /* transition: all 0.3s; */
                    /* transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important; */
                    /* &:hover { // hover 没有效果 */ 
                    /* opacity: 0.9; */
                    /* transform: translateY(-1px); */
                    /* box-shadow: 0 0 12px rgba(0, 255, 255, 0.5); */
                    /* }; */
                    &:active {
                        transform: translateY(1px) scale(0.98);
                    };
                    ">
                    UpdateRows
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* 优化滚动动画 */
:deep(.dv-scroll-board .rows) {
    transition: transform 0.5s ease-in-out !important;
}

/* 调整行高计算 */
 /* 27.43px */
 :deep(.dv-scroll-board .rows .row-item) {
  /* height: calc((220px - 28px) / 7) !important;
  line-height: calc((220px - 28px) / 7) !important; */
  padding: 0 5px !important;
}

/* 调整表头高度 */
/* :deep(.dv-scroll-board .header) {
    height: 30px !important;
    line-height: 30px !important;
} */

/* 按钮交互 */
button {
  box-shadow: 0 0 3px rgb(14, 218, 218);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

button:hover {
  opacity: 0.9;
  transform: translateY(-0.5px);
  box-shadow: 0 0 15px rgba(0, 255, 255, 1);
}

button:active {
  transform: translateY(1px) scale(0.97);
  filter: brightness(0.9);
  box-shadow: 0 0 8px rgba(0, 255, 255, 1) !important;
}


</style>