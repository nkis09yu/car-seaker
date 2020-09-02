<template>
    <Card>
        <div class="d-flex al-center jc-between car-head">
            <h1 class="title">{{title}}</h1>
        </div>
        <div class="card-cont">
            <div class="d-flex">
                <div>
                    <b>{{rData.mileageInfo.TraveledMileage}}</b>
                    <p>已行驶/km</p>
                </div>
                <div>
                    <b>{{rData.mileageInfo.ExpectMileage}}</b>
                    <p>预估里程/km</p>
                </div>
                <div>
                    <b>{{rData.avgYearMileage}}</b>
                    <p>年均里程/km</p>
                </div>
            </div>
            <div class="d-flex" style="margin-top: 30px">
                <div>
                    <b>{{$moment(rData.lastMaintenanceTime).format('YYYY/MM/DD')}}</b>
                    <p>最后保养</p>
                </div>
                <div>
                    <b>{{$moment(rData.lastRepTime).format('YYYY/MM/DD')}}</b>
                    <p>最后记录</p>
                </div>
                <div>
                    <b>{{rData.avgYearMaintenanceTimes}}</b>
                    <p>年均保养/次</p>
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
        rData: Object
    },
    data(){
        return {
            yixingshi: 21168,
            yugu: 81612,
            nianjun: 15792,
            baoyang: '2016/01/08',
            jilu: '2016/01/08',
            nianjunbaoyang: '2.6'
        }
    },
    methods: {
    }
}
</script>

<style scoped lang="scss">
    .card{
        div.card-cont{
            b,p{
                line-height: 1;
            }
            .d-flex{
                justify-content: space-between;
                div{
                    text-align: center;
                    width: 33.3%;
                    p{
                        margin-top: 12px;
                        color: #999;
                    }
                }
            }
        }
    }
</style>