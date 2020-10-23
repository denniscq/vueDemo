<template>
<div>
    {{ log("render") }}
    {{ now }}
    {{ startComputed }}
    <button @click="start = !start">{{ start ? "停止" : "开始" }}</button>
</div>
</template>

<script>
import moment from "moment";

export default {
    data() {
        this.log = window.console.log;
        this.moment = moment;

        return {
            now: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
            start: false,
        };
    },
    beforeCreate() {
        console.log("before create");
    },
    created() {
        console.log("create");
    },
    beforeMount() {
        console.log("before mount");
    },
    mounted() {
        console.log("mounted");
        this.startClock();
    },
    render(h) {
        console.log("render1: $s", h);
        return h;
    },
    beforeUpdate() {
        console.log("before update");
    },
    updated() {
        console.log("updated");
    },
    beforeDestroy() {
        clearInterval(this.clockTimeout);
        console.log("before destory");
    },
    destroyed() {
        console.log("destroyed");
    },
    watch: {
        start(val) {
            console.log("watch start %s", val);
            this.startClock();
        },
    },
    computed: {
        startComputed() {
            console.log("computed start %s", this.start);
            return this.start;
        },
    },
    methods: {
        startClock() {
            clearInterval(this.clockTimeout);
            if (this.start) {
                this.clockTimeout = setInterval(() => {
                    this.now = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
                }, 1000);
            }
        }
    }
};
</script>

<style>
</style>
