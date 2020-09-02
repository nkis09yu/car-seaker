<template>
    <Card>
        <div class="car-head">
            <h1 class="title">{{title}}</h1>
        </div>
        <div class="card-cont">
            <div id="chekuangbi" style="width: 45%" class="evaluation-left"></div>
            <div class="evaluation-right">
                <div class="cki" style="margin-top: 0;">
                    <div class="youxiu"></div>
                    <p>优秀：<b>{{parseInt(Number(modelRatio.a)*100)}}%</b></p>
                </div>
                <div class="cki">
                    <div class="lianghao"></div>
                    <p>良好：<b>{{parseInt(Number(modelRatio.b)*100)}}%</b></p>
                </div>
                <div class="cki">
                    <div class="yiban"></div>
                    <p>一般：<b>{{parseInt(Number(modelRatio.c)*100)}}%</b></p>
                </div>
                <div class="cki">
                    <div class="shiguche"></div>
                    <p>事故车：<b>{{parseInt(Number(modelRatio.d)*100)}}%</b></p>
                </div>
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
        modelRatio: Object
    },
    data(){
        return {
            vData: {}
        }
    },
    watch: {
       modelRatio(val){
           this.vData = val;
           this.drawPie('chekuangbi')
       } 
    },
    methods: {
        drawPie(id){
            this.charts = echarts.init(document.getElementById(id));
             this.charts.setOption({
                color: ['#716dff', '#ffbe5c', '#6dc5ff', '#ff6666'],
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
                            {value: (Number(this.vData.a)), name: '优秀'},
                            {value: (Number(this.vData.b)), name: '良好'},
                            {value: (Number(this.vData.c)), name: '一般'},
                            {value: (Number(this.vData.d)), name: '事故车'},
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
                    div.youxiu{
                        background-color: #716dff;
                    }
                    div.lianghao{
                        background-color: #ffbe5c;
                    }
                    div.yiban{
                        background-color: #6dc5ff;
                    }
                    div.shiguche{
                        background-color: #ff6666;
                    }
                    p{
                        margin-left: 12px;
                    }
                }
            }
        }
    }
</style>