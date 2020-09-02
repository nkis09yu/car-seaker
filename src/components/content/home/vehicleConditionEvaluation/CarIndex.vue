<template>
    <Card>
        <div class="car-head">
            <h1 class="title">{{title}}</h1>
        </div>
        <div class="card-cont">
            <div class="grade">
                <img v-if="grade === 1" src="~assets/img/home/star1.png" alt="">
                <img v-if="grade === 2" src="~assets/img/home/star2.png" alt="">
                <img v-if="grade === 3" src="~assets/img/home/star3.png" alt="">
                <img v-if="grade === 4" src="~assets/img/home/star4.png" alt="">
                <img v-if="grade === 5" src="~assets/img/home/star5.png" alt="">
                <p class="bold">{{jianyi}}</p>
            </div>
            <div class="bot">
                <p v-for="(item, index) in list" :key="index">{{item}}</p>
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
        }
    },
    data(){
        return {
            list: ['事故车少', '供大于求', '热门颜色'],
            grade: 2,
            jianyi: '不建议购买'
        }
    }
}
</script>

<style scoped lang="scss">
    .card{
        div.card-cont{
            .grade{
                text-align: center;
                margin-bottom: 30px;
                img{
                    width: 180px;
                    height: 26px;
                }
                p{
                    font-size: 17px;
                    color: #ff6666;
                    margin-top: 12px;
                }
            }
            .bot{
                overflow: hidden;
                padding-top: 20px;
                border-top: 1px solid #ddd;
                p{
                    display: inline-block;
                    height: 40px;
                    line-height: 40px;
                    padding: 0 16px;
                    background-color: #f8f8f8;
                    margin-right: 12px;
                    border-radius: 4px;
                }
            }
        }
    }
</style>