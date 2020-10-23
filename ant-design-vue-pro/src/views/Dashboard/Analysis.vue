<template>
    <div>
    {{ $t('message')['app.dashboard.analysis.timeLabel'] }}:
        <a-date-picker></a-date-picker>
        <Chart :option="chartOption" style="height: 400px" />
    </div>
</template>

<script>
import Chart from '../../components/Chart'
import random from 'loadsh/random'
import request from '../../utils/request'

export default {
    components: {
        Chart
    },
    data() {
        return {
            chartOption: {}
        }
    },
    mounted() {
        this.getChartData()
        // this.interval = setInterval(() => {
        //     // this.chartOption.series[0].data = this.chartOption.series[0].data.map(() => random(100))
        //     // this.chartOption = { ...this.chartOption }
        //     this.getChartData()
        // }, 3000)
    },
    beforeDestroy() {
        // clearInterval(this.interval)
    },
    methods: {
        getChartData() {
            request({ url: '/api/dashboard/chart', method: 'get', params: { ID: 12345 } }).then(
                response => {
                    this.chartOption = {
                        title: {
                            text: 'ECharts 入门示例'
                        },
                        tooltip: {},
                        xAxis: {
                            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                        },
                        yAxis: {},
                        series: [
                            {
                                name: '销量',
                                type: 'bar',
                                data: response.data
                            }
                        ]
                    }
                }
            )
        }
    }
}
</script>

<style>
</style>