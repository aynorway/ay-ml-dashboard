<script setup>
import { ref, reactive } from "vue";
import Multilinechart from './chart/multilinechart.vue';
import ScrollBoard from './chart/scrollboard.vue';
import Index6 from './index6.vue';
</script>

<template>
    <div style="flex: 0 1 50%">
        <dv-border-box11 title="ay-ml-Dashboard" style="width:100%; height:600px; overflow: hidden;"
            :color="['#4fd2dd', '#235fa7']">
            <div dv-bg style="align-items: center; padding:10px;">
                <div style="font-size: 9px; padding-top: 50px;">
                </div>
                <div style="width:100%; height:400px;">
                    <Index6 />
                </div>
                <div style="font-size: 9px; padding-top: 75px;">
                    <p style="color:#fff; text-align: center; margin-top: 0px; font-size: 9px; ">
                        Data source: <a
                            href="https://www.statista.com/statistics/463905/canada-real-gross-domestic-product-by-province/"
                            target="_blank" style="color:#0ff;">
                            Statista - Real Gross Domestic Product (GDP) of Canada in 2023, by province
                        </a>
                    </p>
                </div>
            </div>
        </dv-border-box11>

        <dv-border-box8 :dur="5" style="width:100%; height:300px; overflow: hidden; ">
            <div style="display: flex; width: 100%; height: 100%;">
                <!-- 左侧区域 -->
                <div style="flex: 1; display: flex; flex-direction: column; margin-right: 5px;">
                    <div style="font-size: 9px; padding: 5px;">
                        <p style="color:#fff; text-align: center; margin: 0; font-size: 11px;">Static data fetching: - Via function calls from Vue FrontEnd</p>
                    </div>
                    <div dv-bg style="flex: 1;">
                        <!-- 此处覆盖 ScrollBoard 默认宽高 -->
                        <ScrollBoard style="width: 100%; height: 100%;" />
                    </div>
                </div>
                <!-- 右侧区域 -->
                <div style="flex: 1; display: flex; flex-direction: column; margin-left: 5px;">
                    <div style="font-size: 9px; padding: 5px;">
                        <p style="color:#fff; text-align: center; margin: 0; font-size: 11px;">Dynamic Data fetching: - Asynchronously from Ay-JS-Backend (Docker MySql Node.js) - Get more details about API in right box this page</p>
                    </div>
                    <div dv-bg style="flex: 1;">
                        <ScrollBoard style="width: 100%; height: 100%;" />
                    </div>
                </div>
            </div>
        </dv-border-box8>

    </div>
</template>

<style scoped></style>
