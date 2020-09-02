<template>
    <Card>
        <div class="car-head">
            <h1 class="title">{{title}}</h1>
        </div>
        <div class="card-cont">
            <div class="d-flex">
                <div class="d1">
                    <div class="nr bold">{{piandi.money}}万</div>
                    <div class="xt"></div>
                    <p class="txt">偏低{{piandi.percent}}</p>
                </div>
                <div class="d2">
                    <div class="nr d-flex bold">
                        <p>{{heli.money1}}万</p>
                        <p>{{heli.money2}}万</p>
                    </div>
                    <div class="xt"></div>
                    <p class="txt">合理{{heli.percent}}</p>
                </div>
                <div class="d3">
                    <div class="nr bold">{{piangao.money}}万</div>
                    <div class="xt"></div>
                    <p class="txt">偏高{{piangao.percent}}</p>
                </div>
            </div>
            <div class="bot">90天内<b>{{people}}</b>人购买此车（来源于个人、车商、4S店）</div>
        </div>
    </card>
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
        }
    },
    data(){
        return {
            people: 2004,
            piandi: {
                money: 4.5,
                percent: '30%'
            },
            heli: {
                money1: 5.02,
                money2: 5.37,
                percent: '40%'
            },
            piangao: {
                money: 5.86,
                percent: '30%'
            },
        }
    },
    mounted(){

    },
    methods: {

    }
}
</script>

<style scoped lang="scss">
    .card{
        div.card-cont{
           
            .d-flex{
                .d1,.d2,.d3{
                    p.txt{
                        margin-top: 12px;
                        text-align: center;
                    }
                }
                .d1{
                    width: 30%;
                    div.xt{
                        height: 12px;
                        background-color: #ffbe5c;
                        border-top-left-radius: 6px;
                        border-bottom-left-radius: 6px;
                    }
                    div.nr{
                        color: #ffbe5c;
                    }
                }
                .d2{
                    width: 40%;
                    div.xt{
                        height: 12px;
                        background-color: #716dff;
                    }
                    div.nr{
                        color: #716dff;
                        justify-content: space-between;
                    }
                }
                .d3{
                    width: 30%;
                    div.xt{
                        height: 12px;
                        background-color: #ff6666;
                        border-top-right-radius: 6px;
                        border-bottom-right-radius: 6px;
                    }
                    div.nr{
                        color: #ff6666;
                        text-align: right;
                    }
                }
                div.xt{
                    margin-top: 20px;
                }
            }
            .bot{
                margin-top: 30px;
                border-top: 1px solid #ddd;
                padding-top: 20px;
            }
        }
    }
</style>