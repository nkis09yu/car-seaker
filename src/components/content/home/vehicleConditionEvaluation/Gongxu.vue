<template>
    <Card>
        <div class="car-head">
            <h1 class="title">{{title}}</h1>
        </div>
        <div class="card-cont">
            <div id="gongxu" style="width: 45%" class="evaluation-left"></div>
            <div class="evaluation-right">
                <div class="cki" style="margin-top: 0;">
                    <div class="gongji"></div>
                    <p>供给：<b>{{Number(valuationData.demand)/(Number(valuationData.demand)+Number(valuationData.supply))*100}}%</b></p>
                </div>
                <div class="ic">{{valuationData.demand}}辆</div>
                <div class="cki">
                    <div class="xuqiu"></div>
                    <p>需求：<b>{{Number(valuationData.supply)/(Number(valuationData.demand)+Number(valuationData.supply))*100}}%</b></p>
                </div>
                <div class="ic">{{valuationData.supply}}人</div>
            </div>
        </div>
    </Card>
</template>

<script>
import Card from '@/components/content/home/Card'
import echarts from 'echarts'
export default {
    components: { Card },
    props: {
        title: {
            type: String,
            required: true
        },
        valuationData: {
            type: Object,
            default(){
                return {
                    demand: 0,
                    supply: 0
                }
            }
        }
    },
    data(){
        return {
            vData: {}
        }
    },
    watch: {
        valuationData(val){
            this.vData = val;
            this.drawPie('gongxu')
        }
    },
    methods: {
        drawPie(id){
            this.charts = echarts.init(document.getElementById(id));
             this.charts.setOption({
                color: ['#716dff', '#ffbe5c'],
                series: [
                    {
                        name: '市场车况占比',
                        type: 'pie',
                        radius: ['85%', '100%'],
                        hoverAnimation:false,
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        data: [
                            {value: this.vData.demand, name: '供给'},
                            {value: this.vData.supply, name: '需求'}
                        ]
                    }
                ]
             })
        }
    }
}
</script>

<style scoped lang="scss">
    .card{
        div.card-cont{
            display: flex;
            margin-top: 10px;
            .evaluation-right{
                margin-left: 40px;
                .cki{
                    display: flex;
                    align-items: center;
                    margin-top: 20px;
                    div{
                        width: 12px;
                        height: 12px;
                    }
                    div.gongji{
                        background-color: #716dff;
                    }
                    div.xuqiu{
                        background-color: #ffbe5c;
                    }
                    p{
                        margin-left: 12px;
                    }
                }
                .ic{
                    margin-top: 12px;
                    font-weight: 900;
                    text-indent: 68px;
                }
            }
        }
    }
</style>