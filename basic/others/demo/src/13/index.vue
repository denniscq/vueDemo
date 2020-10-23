<template>
<div>
    <a-tabs>
        <a-tab-pane key="clock" tab="时钟">
            <button @click="destroyClock = !destroyClock">
                {{ destroyClock ? "加载时钟" : "销毁时钟" }}
            </button>
            <Clock v-if="!destroyClock" />
        </a-tab-pane>
        <a-tab-pane key="Functional" tab="函数式组件">
            <Tempvar :var1="`hello ${name}`" :var2="destroyClock ? 'hello world' : 'hello vue'">
                <template v-slot="{var1, var2}">
                    {{var1}}
                    {{var2}}
                </template>
            </Tempvar>
        </a-tab-pane>
        <a-tab-pane key="Spike" tab="秒杀">
            <Spike :start-time="startTime" :end-time="endTime" />
        </a-tab-pane>
    </a-tabs>
</div>
</template>

<script>
import Clock from "./Clock";
import Tempvar from './Tempvar';
import Spike from './Spike'
import moment from 'moment';

export default {
    components: {
        Clock,
        Tempvar,
        Spike
    },
    data() {
        return {
            destroyClock: false,
            name: "Vue",
            startTime: moment("2020-10-14 10:30:00"),
            endTime: moment("2020-10-14 10:50:00")
        };
    },
};
</script>

<style>
</style>
