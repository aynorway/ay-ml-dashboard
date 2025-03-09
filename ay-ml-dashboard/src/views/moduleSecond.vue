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
                <div style="font-size: 9px;">
                </div>
                <div style="width:100%; height:550px;">
                    <Index6 />
                </div>
                <div style="font-size: 9px;">
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
        
        <dv-border-box8 :dur="5" style="width:100%; height:300px; overflow: hidden;">
            <div dv-bg>
                <dv-decoration1 style="width:50%;height:50px;" />
                <ScrollBoard />
            </div>
            <div dv-bg>
                <dv-decoration1 style="width:50%;height:50px;" />
                <ScrollBoard />
            </div>
        </dv-border-box8>
    </div>
</template>

<style scoped>
#g {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
