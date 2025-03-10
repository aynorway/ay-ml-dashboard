<script setup>
import { ref, reactive } from "vue";

import ScrollBoard from './chart/scrollboard.vue';
import ScrollBoardDynamic from './chart/scrollboarddynamic.vue';
import Index6 from './index6.vue';

</script>

<template>
    <div style="flex: 0 1 50%">

        <dv-border-box11 title="ay-ml-Dashboard" style="width:100%; height:700px; overflow: hidden; 
        /* background-color: #0ff; */
        " :color="['#4fd2dd', '#235fa7']">


            <div style="align-items: center; width:100%; height:90%; padding:10px; overflow: hidden; 
            /* background-color: #0ff; */
            ">GeoJson

                <div style="padding-top: 30px; 
                /* background-color: #0ff; */
                ">
                </div>
                <div style="width:100%; height:550px; 
                /* background-color: #0ff; */
                ">
                    <Index6 />
                </div>
            </div>


            <div style="font-size: 9px; padding-top: 5px;">
                <p style="color:#fff; text-align: center; margin-top: 0px; font-size: 9px; ">
                    Data source: <a
                        href="https://www.statista.com/statistics/463905/canada-real-gross-domestic-product-by-province/"
                        target="_blank" style="color:#0ff;">
                        Statista - Real Gross Domestic Product (GDP) of Canada in 2023, by province
                    </a>
                </p>
            </div>

        </dv-border-box11>



        <dv-border-box8 :dur="5" style="width:100%; height:350px; overflow: hidden; ">

            <div style="display: flex; 
                align-items: center; 
                width: 98%; height: 96%; 
                /* background-color: #0ff; */
                overflow: hidden; 	
                margin: auto;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                ">
                <div style="display: flex; overflow: hidden;">



                    <!-- 左侧区域 -->
                    <div style="flex: 1; display: flex; flex-direction: column; margin-right: 5px;
                    /* background-color: #0ff; */
                    ">
                        <div style="
                        padding: 5px 5px;">
                            <p style="color:#fff; text-align: center; margin: 0; font-size: 14px;">
                                Static Data Fetching:
                                <br>
                                Retrieved directly via function calls from the Vue.js frontend
                            </p>
                            <br>
                        </div>

                        <div dv-bg style="flex: 1;
                        /* background-color: #0ff; */
                        margin-top: -4.5%;
                        ">
                            <!-- 此处覆盖 ScrollBoard 默认宽高 -->
                            <ScrollBoard style="width: 100%; height: 100%;" />
                        </div>
                    </div>


                    <!-- 右侧区域 -->
                    <div style="flex: 1; display: flex; flex-direction: column; margin-left: 5px;
                    /* background-color: #f0f; */
                    ">
                        <div style="
                        padding: 5px 5px;">
                            <p style="color:#fff; text-align: center; margin: 0; font-size: 14px;">
                                Dynamic Data Fetching
                                – Via asynchronous API calls from the aywebjs Node.js backend,
                                with MySQL running in Docker container
                            </p>
                        </div>

                        <div dv-bg style="flex: 1;">
                            <ScrollBoardDynamic style="width: 100%; height: 100%;" />
                        </div>
                    </div>



                </div>
            </div>

        </dv-border-box8>

    </div>
</template>

<style scoped></style>
