<template>
    <Card>
        <div class="d-flex al-center jc-between car-head">
            <h1 class="title">{{title}}</h1>
            <div>
                <p>评级说明</p>
                <img src="~assets/img/home/youjiantou.png" alt="">
            </div>
        </div>
        <div class="card-cont">
            <div class="d-flex">
                <div class="grade-item">
                    <b>S</b>
                    <p>S M R</p>
                    <p style="color: #333; margin-top: 20px;">事故火烧泡水</p>
                </div>
                <div class="grade-item">
                    <b>4.9</b>
                    <p>满分5分</p>
                    <p style="color: #333; margin-top: 20px;">整车车况评分</p>
                </div>
                <div class="grade-item">
                    <b>A</b>
                    <p>A B C</p>
                    <p style="color: #333; margin-top: 20px;">重要部件评级</p>
                </div>
            </div>
            <div @click="$router.push('/home/carcondition')" class="btn">查看车况报告</div>
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

        }
    },
    methods: {
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
            .d-flex{
                justify-content: space-between;
                .grade-item{
                    text-align: center;
                    b{
                        font-size: 28px;
                        color: #716dff;
                    }
                    p{
                        color: #716dff;
                        margin-top: 12px;
                    }
                }
            }
            .btn{
                margin-top: 30px;
                width: 160px;
                height: 48px;
                line-height: 48px;
                text-align: center;
                margin: 30px auto 0;
                color: #fff;
                background-color: #716dff;
                border-radius: 8px;
            }
        }
    }
</style>