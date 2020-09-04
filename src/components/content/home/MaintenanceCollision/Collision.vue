<template>
    <Card>
        <div class="d-flex al-center jc-between car-head">
            <h1 class="title">{{title}} {{claim.length}}</h1>
            <div @click="showMore = !showMore">
                <p>更多</p>
                <img v-show="!showMore" src="~assets/img/home/xiajiantou.png" alt="">
                <img v-show="showMore" src="~assets/img/home/shangjiantou.png" alt="">
            </div>
        </div>
        <div class="card-cont">
            <div v-show="!showMore" class="maintenance-list">
                <div class="maintenance-item" v-for="(item, index) in claim.slice(0,2)" :key="index">
                    <div class="m-top d-flex">
                        <p class="tt lb">碰撞</p>
                        <b class="cc red">理赔：{{item.claimMoney}}元</b>
                        <p>{{$moment(item.accidentTime).format('YYYY/MM/DD')}}</p>
                    </div>
                    <div class="m-center d-flex">
                        <p class="tt hl">经过</p>
                        <b class="cc">{{recordItems(item.recordItems)}}</b>
                    </div>
                    <div class="m-bottom d-flex">
                        <p class="tt hl">材料</p>
                        <p class="cc">{{material(item.material)}}</p>
                    </div>
                </div>
            </div>
            <div v-show="showMore" class="maintenance-list">
                <div class="maintenance-item" v-for="(item, index) in claim" :key="index">
                    <div class="m-top d-flex">
                        <p class="tt lb">碰撞</p>
                        <b class="cc red">理赔：{{item.claimMoney}}元</b>
                        <p>{{$moment(item.accidentTime).format('YYYY/MM/DD')}}</p>
                    </div>
                    <div class="m-center d-flex">
                        <p class="tt hl">经过</p>
                        <b class="cc">{{recordItems(item.recordItems)}}</b>
                    </div>
                    <div class="m-bottom d-flex">
                        <p class="tt hl">材料</p>
                        <p class="cc">{{material(item.material)}}</p>
                    </div>
                </div>
            </div>
            <div v-if="!claim.length">暂无相关记录</div>
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
    },
    data(){
        return {
            showMore: false,
            claim: []
        }
    },
    mounted(){
        this.fetch();
    },
    computed: {
        recordItems(){
            return function(items){
                let recordItems = '';
                for(var i=0;i<items.length;i++){
                    recordItems += items[i].itemName
                }
                return recordItems;
            }
        },
        material(){
            return function(item){
                let material = JSON.parse(item);
                let materialStr = ''
                for(let i =0;i<material.length;i++){
                    materialStr += `${material[i].name}：${material[i].count}；`;
                }
                return materialStr
            }
        }
    },
    methods: {
        fetch(){
            this.$axios.post('/api/search_vehicle_index.php?s=/Home/Report/GetClaimReport',{
                reportid: 1
            })
            .then( res => {
                this.claim = res.data.data.claimRecord;
            })
        }
    }
}
</script>

<style scoped lang="scss">
    .card{
        div.car-head{
            margin-bottom: 8px;
            align-items: center;

            div{
                display: flex;
                align-items: center;
                p{
                    color: #666;
                }   
                img{
                    width: 17px;
                    height: 10px;
                    margin-left: 8px;
                }
            }
        }
        div.card-cont{
            .maintenance-item{
                padding-bottom: 20px;
                border-bottom: 1px solid #ddd;
                .d-flex{
                    margin-top: 20px;
                    align-self: flex-start;
                }
                p.tt{
                    display: table;
                    margin-right: 12px;
                    padding: 2px 6px;
                    border-radius: 2px;
                }
                .red{
                    color: #ff0000;
                }
                .lb{
                    background-color: #ff0000;
                    color: #fff;
                }
                .hl{
                    background-color: #eee;
                }
                .cc{
                    flex: 1;
                    line-height: 1.8;
                }
            }
        }
    }
</style>