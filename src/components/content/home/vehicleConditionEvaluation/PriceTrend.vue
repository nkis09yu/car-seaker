<template>
    <Card>
        <div class="car-head d-flex">
            <h1 class="title">{{title}}</h1>
            <p>单位：万元</p>
        </div>
        <div class="card-cont">
            <div class="trend-tab">
                <div @click="lishi" :class="{'active': isActive}">历史价格</div>
                <div  @click="weilai" :class="{'active': !isActive}">未来预测</div>
            </div>
            <div id="lishi" style="width: 100%;height: 240px"></div>
        </div>
    </card>
</template>

<script>
import Card from '@/components/content/home/Card'
import echarts from 'echarts'
export default {
    name: 'PriceTrend', 
    components: { Card },
    props: {
        title: String,
        monthsAgoPrice: Array,
        monthsPrice: Array
    },
    data(){
        return {
            isActive: true,
            agoPrice: {
                x: [],
                y: []
            },
            price: {
                x: [],
                y: []
            }
        }
    },
    watch: {
        monthsAgoPrice(val){
            for(var i = 0; i< val.length; i++){
                this.agoPrice.x.push(val[i].date.slice(2,7));
                this.agoPrice.y.push(val[i].price);
            }
            this.draw('lishi', this.agoPrice.x, this.agoPrice.y);
        },
        monthsPrice(val){
            for(var i = 0; i< val.length; i++){
                this.price.x.push(val[i].date.slice(2,7));
                this.price.y.push(val[i].price);
            }
        }
    },
    methods: {
        draw(id, xData, yData){
            this.charts = echarts.init(document.getElementById(id));
            this.charts.setOption({
                xAxis: {
                    type: 'category',
                    data: xData,
                    axisTick: {
                    show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#666'
                        }
                    }
                },
                yAxis: {
                    show: false
                },
                series: [{
                    data: yData,
                    type: 'bar',
                    itemStyle: {
                        color: function(params){
                            let colorList = ['#716dff', '#716dff', '#716dff', '#716dff', '#716dff', '#ffbe5c'];
                            return colorList[params.dataIndex]
                        },
                        barBorderRadius:[18,18,0,0],
                    },
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: function(params){
                                let colorList = ['#716dff', '#716dff', '#716dff', '#716dff', '#716dff', '#ffbe5c'];
                                return colorList[params.dataIndex]
                            },
                            fontSize: 16
                        }
                    },
                    barWidth: 18
                }]
            })
        },

        lishi(){
            this.isActive = true;
            this.draw('lishi', this.agoPrice.x, this.agoPrice.y);
        },

        weilai(){
             this.isActive = false;
            this.draw('lishi', this.price.x, this.price.y);
        }
    }
}
</script>

<style scoped lang="scss">
    .card{
        .car-head{
            justify-content: space-between;
            p{
                color: #333;
            }
        }
        .trend-tab{
            display: flex;
            justify-content: center;
            div{
                height: 36px;
                line-height: 36px;
                padding: 0 20px;
                font-size: 15px;
                font-weight: 900;
                border-radius: 4px;
                color: #333;
                background-color: #f8f8f8;
                margin-left: 6px;
            }
            .active{
                color: #fff;
                background-color: #716dff;
                margin-right: 6px;
            }
        }
    }
</style>