<template>
    <Card>
        <div class="car-head">
            <h1 class="title">{{title}}</h1>
        </div>
        <div class="card-cont">
            <div class="d-flex">
                <div class="d1" :style="{'width': percent(priceAnalyse.lowestDealPrice.ratio)}">
                    <div class="nr bold">{{priceAnalyse.lowestDealPrice.price[0]}}万</div>
                    <div class="xt"></div>
                    <p class="txt">偏低{{percent(priceAnalyse.lowestDealPrice.ratio)}}</p>
                </div>
                <div class="d2" :style="{'width': percent(priceAnalyse.reasonableDealPrice.ratio)}">
                    <div class="nr d-flex bold">
                        <p>{{priceAnalyse.reasonableDealPrice.price[0]}}万</p>
                        <p>{{priceAnalyse.reasonableDealPrice.price[1]}}万</p>
                    </div>
                    <div class="xt"></div>
                    <p class="txt">合理{{percent(priceAnalyse.reasonableDealPrice.ratio)}}</p>
                </div>
                <div class="d3" :style="{'width': percent(priceAnalyse.highestDealPrice.ratio)}">
                    <div class="nr bold">{{priceAnalyse.highestDealPrice.price[1]}}万</div>
                    <div class="xt"></div>
                    <p class="txt">偏高{{percent(priceAnalyse.highestDealPrice.ratio)}}</p>
                </div>
            </div>
            <div class="bot">数据来源于个人、车商、4S店等</div>
        </div>
    </card>
</template>

<script>
import Card from '@/components/content/home/Card'
export default {
    components: { Card },
    props: {
        title: {
            type: String,
            required: true
        },
        marketPriceAnalyse: Object
    },
    data(){
        return {
            priceAnalyse: {
                lowestDealPrice: {
                    price: []
                },
                reasonableDealPrice: {
                    price: []
                },
                highestDealPrice: {
                    price: []
                },
            },
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
    watch: {
        marketPriceAnalyse: {
            deep: true,
            handler: function(val){
                this.priceAnalyse = val;
            }
        }
    },
    computed: {
        percent(){
            return function(ratio){
                return (Number(ratio)/(Number(this.priceAnalyse.lowestDealPrice.ratio)+Number(this.priceAnalyse.reasonableDealPrice.ratio)+Number(this.priceAnalyse.highestDealPrice.ratio)))*100 + '%';
            }
        }
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