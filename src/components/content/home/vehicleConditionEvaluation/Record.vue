<template>
    <Card>
        <div class="d-flex al-center jc-between car-head">
            <h1 class="title">{{title}}</h1>
            <div @click="openRecord = !openRecord">
                <p>更多</p>
                <img v-show="!openRecord" src="~assets/img/home/xiajiantou.png" alt="">
                <img v-show="openRecord" src="~assets/img/home/shangjiantou.png" alt="">
            </div>
        </div>
        <div class="card-cont">
            <div v-show="!openRecord" class="record-list">
                <div style="border: none" class="record-item" v-for="(item, index) in dealRecords.slice(0, 1)" :key="index">
                    <div class="d-flex jc-between bold">
                        <p>{{item.modelName}}</p>
                        <p>{{item.dealMoney}}</p>
                    </div>
                    <p style="margin-top: 12px;color: #999;">{{item.cityName}} | {{item.regDate}}上牌 | {{item.miles}}公里</p>
                    <p style="margin-top: 12px;color: #999;">成交于{{item.dealDate}}</p>
                </div>
            </div>
            <div v-show="openRecord" class="record-list">
                <div class="record-item" v-for="(item, index) in dealRecords" :key="index">
                    <div class="d-flex jc-between bold">
                        <p>{{item.modelName}}</p>
                        <p>{{item.dealMoney}}</p>
                    </div>
                    <p style="margin-top: 12px;color: #999;">{{item.cityName}} | {{item.regDate}}上牌 | {{item.miles}}公里</p>
                    <p style="margin-top: 12px;color: #999;">成交于{{item.dealDate}}</p>
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
        dealRecords: Array
    },
    mounted(){
        
    },
    data(){
        return {
            openRecord: false
        }
    },
    methods: {
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
            .record-item{
                padding: 12px 0;
                border-bottom: 1px solid #ddd;
            }
        }
    }
</style>