<script setup>
import { ref, reactive } from "vue";
</script>

<template>
    <!-- 一行2分 一行3分 -->
    <div class="module-box">
        <div style="flex: 0 1 25% ">
            <dv-border-box8 :dur="5" style="width:100%; height:300px">
                <div dv-bg>
                    <dv-decoration1 style="width:100%;height:50px;" />
                    <dv-capsule-chart :config="config" style="width:25rem;height:15rem;padding:30px" />
                </div>
            </dv-border-box8>
            <dv-border-box8 :dur="5" style="width:100%; height:300px">
                <div dv-bg>
                    <dv-decoration1 style="width:100%;height:50px;" />
                    <dv-capsule-chart :config="config" style="width:25rem;height:15rem;padding:30px" />
                </div>
            </dv-border-box8>
            <dv-border-box8 :dur="5" style="width:100%; height:300px">
                <div dv-bg>
                    <dv-decoration1 style="width:100%;height:50px;" />
                    <dv-capsule-chart :config="config" style="width:25rem;height:15rem;padding:30px" />
                </div>
            </dv-border-box8>
        </div>
        <div style="flex: 0 1 50% ">
            <dv-border-box11 title="Ay-ML-Dashboard" style="width:100%; height:600px" :color="['#4fd2dd', '#235fa7']">
                <div dv-bg>
                </div>
            </dv-border-box11>
        </div>
        <div style="flex: 0 1 25%">
            <dv-border-box8 :dur="5" style="width:100%; height:300px">
                <div dv-bg>
                    <dv-decoration1 style="width:100%;height:50px;" />
                    <dv-capsule-chart :config="config" style="width:25rem;height:15rem;padding:30px" />
                </div>
            </dv-border-box8>
            <dv-border-box8 :dur="5" style="width:100%; height:300px">
                <div dv-bg>
                    <dv-decoration1 style="width:100%;height:50px;" />
                    <dv-capsule-chart :config="config" style="width:25rem;height:15rem;padding:30px" />
                </div>
            </dv-border-box8>
        </div>
    </div>

</template>

<style scoped>
.module-box {
    display: flex;
}
</style>
