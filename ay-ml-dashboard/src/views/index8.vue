<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// 树形数据
const frontendTreeData = ref([
    {
        label: 'Frontend: ay-ml-dashboard-Vue3-Vite-Datav-Echarts',
        value: '/',
        children: [
            {
                label: '.vscode',
                value: '.vscode',
                children: [{
                    label: 'extensions.json',
                    value: '.vscode/extensions.json'
                }]
            },
            { label: 'README.md', value: 'README.md' },
            { label: 'index.html', value: 'index.html' },
            { label: 'package-lock.json', value: 'package-lock.json' },
            { label: 'package.json', value: 'package.json' },
            {
                label: 'public',
                value: 'public',
                children: [
                    { label: 'vite.svg', value: 'public/vite.svg' }
                ]
            },
            {
                label: 'src',
                value: 'src',
                children: [
                    { label: 'App.vue', value: 'src/App.vue' },
                    {
                        label: 'assets',
                        value: 'src/assets',
                        children: [
                            {
                                label: 'css',
                                value: 'src/assets/css',
                                children: [
                                    { label: 'common.css', value: 'src/assets/css/common.css' },
                                    { label: 'index.css', value: 'src/assets/css/index.css' }
                                ]
                            },
                            {
                                label: 'font',
                                value: 'src/assets/font',
                                children: [
                                    { label: 'iconfont.css', value: 'src/assets/font/iconfont.css' }
                                ]
                            },
                            {
                                label: 'img',
                                value: 'src/assets/img',
                                children: [
                                    { label: 'bg1.png', value: 'src/assets/img/bg1.png' }
                                ]
                            },
                            {
                                label: 'json',
                                value: 'src/assets/json',
                                children: [
                                    { label: 'canada.geojson', value: 'src/assets/json/canada.geojson' }
                                ]
                            }
                        ]
                    },
                    {
                        label: 'components',
                        value: 'src/components',
                        children: [] // 空目录
                    },
                    { label: 'main.js', value: 'src/main.js' },
                    {
                        label: 'router',
                        value: 'src/router',
                        children: [
                            { label: 'index.js', value: 'src/router/index.js' }
                        ]
                    },
                    { label: 'style.css', value: 'src/style.css' },
                    {
                        label: 'utils',
                        value: 'src/utils',
                        children: [
                            { label: 'http.js', value: 'src/utils/http.js' }
                        ]
                    },
                    {
                        label: 'views',
                        value: 'src/views',
                        children: [
                            {
                                label: 'chart',
                                value: 'src/views/chart',
                                children: [
                                    { label: 'barchart.vue', value: 'src/views/chart/barchart.vue' },
                                    { label: 'linechart.vue', value: 'src/views/chart/linechart.vue' },
                                    { label: 'multilinechart.vue', value: 'src/views/chart/multilinechart.vue' },
                                    { label: 'piechart.vue', value: 'src/views/chart/piechart.vue' },
                                    { label: 'scrollboard.vue', value: 'src/views/chart/scrollboard.vue' },
                                    { label: 'scrollboardD.vue', value: 'src/views/chart/scrollboardD.vue' },
                                    { label: 'template.vue', value: 'src/views/chart/template.vue' }
                                ]
                            },
                            { label: 'index.vue', value: 'src/views/index.vue' },
                            { label: 'index3.vue', value: 'src/views/index3.vue' },
                            { label: 'index6.vue', value: 'src/views/index6.vue' },
                            { label: 'moduleFirst.vue', value: 'src/views/moduleFirst.vue' },
                            { label: 'moduleSecond.vue', value: 'src/views/moduleSecond.vue' },
                            { label: 'moduleThird.vue', value: 'src/views/moduleThird.vue' },
                            { label: 'moduleTitle.vue', value: 'src/views/moduleTitle.vue' }
                        ]
                    }
                ]
            },
            { label: 'vite.config.js', value: 'vite.config.js' },
            { label: 'yarn.lock', value: 'yarn.lock' }
        ]
    }
]);

const backendTreeData = ref([
    {
        label: 'Backend: aywebjs-Docker-MySql-Node.js',
        value: '/',
        children: [
            { label: 'README.md', value: 'README.md' },
            { label: '.env', value: '.env' },
            {
                label: 'config',
                value: 'config',
                children: [
                    { label: 'db.config.js', value: 'config/db.config.js' },
                    { label: 'jwt.config.js', value: 'config/jwt.config.js' }
                ]
            },
            {
                label: 'handlers',
                value: 'handlers',
                children: [
                    { label: 'article.handler.js', value: 'handlers/article.handler.js' },
                    { label: 'category.handler.js', value: 'handlers/category.handler.js' },
                    { label: 'user.handler.js', value: 'handlers/user.handler.js' }
                ]
            },
            {
                label: 'middlewares',
                value: 'middlewares',
                children: [
                    { label: 'verifyToken.js', value: 'middlewares/verifyToken.js' }
                ]
            },
            {
                label: 'models',
                value: 'models',
                children: [
                    { label: 'article.model.js', value: 'models/article.model.js' },
                    { label: 'category.model.js', value: 'models/category.model.js' },
                    { label: 'user.model.js', value: 'models/user.model.js' }
                ]
            },
            {
                label: 'routes',
                value: 'routes',
                children: [
                    { label: 'article.routes.js', value: 'routes/article.routes.js' },
                    { label: 'category.routes.js', value: 'routes/category.routes.js' },
                    { label: 'user.routes.js', value: 'routes/user.routes.js' }
                ]
            },
            {
                label: 'scripts',
                value: 'scripts',
                children: [
                    { label: 'userManagement.js', value: 'scripts/userManagement.js' }
                ]
            },
            { label: 'server.js', value: 'server.js' },
            {
                label: 'utils',
                value: 'utils',
                children: [
                    { label: 'db.utils.js', value: 'utils/db.utils.js' }
                ]
            }
        ]
    }
]);

const combinedTreeData = ref([
  frontendTreeData.value[0],
  backendTreeData.value[0]
]);

// 搜索功能
const searchValue = ref('');
const treeRef = ref(null); // 添加Tree组件引用
const filterNode = (value, data) => {

    if (!value) return true;
    return data.label.toLowerCase().includes(value.toLowerCase());
};

const handleSearch = () => {
    treeRef.value.filter(searchValue.value);
};

// 窗口resize处理
const handleResize = () => {
    // 这里可以添加布局调整逻辑
};

// 容器引用
// const containerRef = ref(null);


onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<template>
    <div style="flex: 1; position: relative; height: 250px;">
        <div class="tree-wrapper">
            <el-input v-model="searchValue" placeholder="Search" clearable size="mini" class="search-input"
                @keyup.enter="handleSearch" @clear="handleSearch">
                <template #prefix>
                    <el-icon class="search-icon" @click="handleSearch">
                        <Search />
                    </el-icon>
                </template>
            </el-input>
            <el-tree ref="treeRef" :data="combinedTreeData" :filter-node-method="filterNode" node-key="value" highlight-current
                :props="{ label: 'label', children: 'children' }" class="custom-tree">
                <template #default="{ node }">
                    <span class="tree-node">
                        <span v-if="node.isLeaf" style="font-size:12px">📄</span>
                        <span v-else style="font-size:12px">📁</span>
                        <span style="font-size:12px">{{ node.label }}</span>
                    </span>
                </template>
            </el-tree>
        </div>
    </div>
</template>

<style scoped>
.tree-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 8px;
}

:deep(.el-tree) {
    flex: 1;
    background: transparent !important;
    color: #ffffff;
    overflow-y: auto;
    scrollbar-width: thin;
}

:deep(.el-tree::-webkit-scrollbar) {
    width: 6px;
}

:deep(.el-tree::-webkit-scrollbar-track) {
    background: rgba(255, 255, 255, 0.1);
}

:deep(.el-tree::-webkit-scrollbar-thumb) {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
}

/* 搜索框样式 */
:deep(.search-input .el-input__wrapper) {
    background: transparent !important;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.5) !important;
    border-radius: 4px;
}

:deep(.search-input .el-input__inner) {
    color: #fff !important;
    font-size: 12px;
}

:deep(.search-input .el-input__inner::placeholder) {
    color: rgba(255, 255, 255, 0.7) !important;
}

:deep(.search-input .el-icon) {
    color: #fff !important;
    font-size: 14px;
}

:deep(.search-input:hover .el-input__wrapper) {
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.8) !important;
}

:deep(.search-input.is-focus .el-input__wrapper) {
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.8) !important;
}

:deep(.el-tree-node__content) {
    height: 28px !important;
    background: transparent !important;
}

:deep(.el-tree-node__content:hover) {
    background: rgba(255, 255, 255, 0.05) !important;
}

.custom-tree {
    margin-top: 8px;
    height: calc(100% - 40px);
}

.tree-node {
    font-family: 'Menlo', monospace;
    display: flex;
    align-items: center;
    gap: 4px;
}
</style>
