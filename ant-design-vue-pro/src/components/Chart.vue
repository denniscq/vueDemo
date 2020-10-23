<template>
    <div ref="chartDom"></div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/title'
import debounce from 'loadsh/debounce'
import { addListener, removeListener } from 'resize-detector'

export default {
    props: {
        option: {
            type: Object,
            default: () => {}
        }
    },
    created() {
        this.resize = debounce(this.resize, 300)
    },
    mounted() {
        this.renderChart()
        addListener(this.$refs.chartDom, this.resize)
    },
    beforeDestroy() {
        removeListener(this.$refs.chartDom, this.resize)
        this.chart.dispose()
        this.chart = null
    },
    watch: {
        option(val, oldVal) {
            this.chart.setOption(val)
        }
        // option: {
        //     handler(val) {
        //         this.chart.setOption(val)
        //     },
        //     deep: true
        // }
    },
    methods: {
        resize() {
            this.chart.resize()
        },
        renderChart() {
            this.chart = echarts.init(this.$refs.chartDom)
            this.chart.setOption(this.option)
        }
    }
}
</script>

<style>
</style>