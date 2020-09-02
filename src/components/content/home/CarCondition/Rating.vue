<template>
    <Card>
        <div class="d-flex al-center jc-between car-head">
            <h1 class="title">{{title}}</h1>
            <div @click="openPopup">
                <p>评级说明</p>
                <img src="~assets/img/home/youjiantou.png" alt="">
            </div>
        </div>
        <div class="card-cont">
            <div class="grade">
                <img v-if="grade === 1" src="~assets/img/home/star1.png" alt="">
                <img v-if="grade === 2" src="~assets/img/home/star2.png" alt="">
                <img v-if="grade === 3" src="~assets/img/home/star3.png" alt="">
                <img v-if="grade === 4" src="~assets/img/home/star4.png" alt="">
                <img v-if="grade === 5" src="~assets/img/home/star5.png" alt="">
                <p class="bold">{{dengji}}</p>
            </div>
            <div class="gaikuang">
                <div class="d-flex" style="margin-top: 20px">
                    <div><b>{{yixingshi}}</b><p>已行驶/km</p></div>
                    <div><b>{{yugu}}</b><p>预估里程/km</p></div>
                    <div><b>{{nianjun}}</b><p>年均里程/km</p></div>
                </div>
                <div class="d-flex">
                    <div><b>{{zuihou}}</b><p>最后保养</p></div>
                    <div><b>{{jilu}}</b><p>最后记录</p></div>
                    <div><b>{{baoyang}}</b><p>年均保养/次</p></div>
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
        }
    },
    data(){
        return {
            grade: 2,
            dengji: 'D级',
            yixingshi: '21168',
            yugu: '81612',
            nianjun: '15792',
            zuihou: '2016/01/08',
            jilu: '2016/08/09',
            baoyang: '2.6'
        }
    },
    methods: {
        openPopup(){
            this.$emit('openPopup')
        }
    }
}
</script>

<style scoped lang="scss">
    .card{
        div.car-head{
            align-items: center;
            div{
                display: flex;
                align-items: center;
                p{
                    color: #666;
                }   
                img{
                    width: 10px;
                    height: 17px;
                    margin-left: 8px;
                }
            }
        }
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
                    margin-top: 12px;
                }
            }
            div.gaikuang{
                border-top: 1px solid #ddd;
                .d-flex{
                    text-align: center;
                    margin-top: 30px;
                    div{
                        width: 33.3%;
                    }
                    b{
                        line-height: 1;
                    }
                    p{
                        line-height: 1;
                        margin-top: 8px;
                        color: #999;
                    }
                }
            }
        }
    }
</style>