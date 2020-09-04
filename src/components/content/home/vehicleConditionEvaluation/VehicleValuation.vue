<template>
    <Card>
        <div class="car-head">
            <h1 class="title">{{title}}</h1>
            <p>价格城市：{{preciseValuationData.carLicenseLocation}}</p>
        </div>
        <div class="card-cont">
            <div class="item">
                <p class="sg">建议收购价：<b>{{priceData.recommendBuyPrice}}万</b></p>
                <div class="d1"><div :style="{left: shogouPercent}"></div></div>
                <div class="d2 d-flex">
                    <p class="p1 bold">{{priceData.industryBuyBottomPrice}}万</p>
                    <p class="p2">行业收购价</p>
                    <p class="p3 bold">{{priceData.industryBuyTopPrice}}万</p>
                </div>
            </div>
            <div class="item" style="margin: 30px 0">
                <p class="sg">建议售车价：<b>{{priceData.recommendSellPrice}}万</b></p>
                <div class="d1"><div :style="{left: shouchePercent}"></div></div>
                <div class="d2 d-flex">
                    <p class="p1 bold">{{priceData.industrySellBottomPrice}}万</p>
                    <p class="p2">行业售车价</p>
                    <p class="p3 bold">{{priceData.industrySellTopPrice}}万</p>
                </div>
            </div>
            <div class="bot d-flex jc-between">
                <div class="d-flex">
                    <p>新车指导价：</p>
                    <b>{{preciseValuationData.newCarGuidePrice}}万</b>
                </div>
                <div class="d-flex">
                    <p>本地新车价（含税）：</p>
                    <b>{{preciseValuationData.newCarLocalPrice}}万</b>
                </div>
            </div>
        </div>
    </Card>
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
        preciseValuationData: Object
    },
    data(){
        return {
            shogouPercent: '',
            shouchePercent: '',
            priceData: {}
        }
    },
    watch:{
        preciseValuationData(val){
            this.priceData = val.priceData;
            this.shogouPercent = ((Number(this.priceData.recommendBuyPrice) - Number(this.priceData.industryBuyBottomPrice))/(Number(this.priceData.industryBuyTopPrice) - Number(this.priceData.industryBuyBottomPrice)))*100 + '%';
            this.shouchePercent = ((Number(this.priceData.recommendSellPrice) - Number(this.priceData.industrySellBottomPrice))/(Number(this.priceData.industrySellTopPrice) - Number(this.priceData.industrySellBottomPrice)))*100 + '%';
        }
    }
}
</script>

<style scoped lang="scss">
    .card{
        .car-head{
            display: flex;
            justify-content: space-between;
        }
        div.card-cont{
            .item{
                margin-top: 20px;
                .sg{
                    text-align: center;
                    color: #716dff;
                    b{
                        font-size: 17px;
                    }
                }
                .d1{
                    margin-top: 15px;
                    height: 12px;
                    background-color: #716dff;
                    border-radius: 6px;
                    position: relative;
                    div{
                        width: 4px;
                        height: 20px;
                        background-color: #ffbe5c;
                        border-top-left-radius: 4px;
                        border-top-right-radius: 4px;
                        position: absolute;
                        bottom: 0;
                    }
                }
                .d2{
                    justify-content: space-between;
                    margin-top: 12px;
                    .p2{
                        color: #666;
                    }
                }
            }
            .bot{
                border-top: 1px solid #ddd;
                padding-top: 20px;
            }
        }
    }
</style>