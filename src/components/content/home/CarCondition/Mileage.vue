<template>
    <Card>
        <div class="d-flex al-center jc-between car-head">
            <h1 class="title">{{title}}</h1>
        </div>
        <div class="card-cont">
            <div class="d-flex">
                <div><p class="bold">2500.25km</p><p>已行驶里程数</p></div>
                <div><p class="bold">0条</p><p>异常里程记录</p></div>
            </div>
            <div class="m-list">
                <div class="m-item" v-for="(item, index) in mList" :key="index">
                    <p>{{item.date}} | {{item.mileage}}km</p>
                    <p>{{item.desc}}</p>
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
            yixingshi: 21168,
            yugu: 81612,
            nianjun: 15792,
            baoyang: '2016/01/08',
            jilu: '2016/01/08',
            nianjunbaoyang: '2.6',
            mList: [
                {
                    date: '2019/09/20',
                    mileage: '2996',
                    desc: '首次进店'
                },
                {
                    date: '2019/12/13',
                    mileage: '3996',
                    desc: '正常数据'
                },
                {
                    date: '2019/05/10',
                    mileage: '1231',
                    desc: '正常数据'
                },
                {
                    date: '2019/11/26',
                    mileage: '444',
                    desc: '首次进店'
                },
            ]
        }
    },
    methods: {
    }
}
</script>

<style scoped lang="scss">
    .card{
        div.card-cont{
            p{
                line-height: 1;
            }
            .d-flex{
                justify-content: space-between;
                padding-bottom: 20px;
                div{
                    text-align: center;
                    width: 33.3%;
                    p.bold{
                        color: #333;
                    }
                    p{
                        margin-top: 12px;
                        color: #999;
                    }
                }
            }
            .m-list{
                .m-item{
                    padding: 20px 0;
                    border-top: 1px solid #ddd;
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
</style>