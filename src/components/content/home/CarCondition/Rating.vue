<template>
    <Card>
        <div class="card-cont">
            <div class="gaikuang">
                <div class="d-flex" style="margin-top: 20px">
                    <div><b>{{maintenanceData.mileageEstimate}}</b><p>预估里程/km</p></div>
                    <div><b>{{maintenanceData.mainTainTimes}}</b><p>年均保养/次</p></div>
                    <div><b>{{maintenanceData.mileageEveryYear}}</b><p>年均里程/km</p></div>
                </div>
                <div class="d-flex">
                    <div><b>{{maintenanceData.lastMainTainTime}}</b><p>最后保养</p></div>
                    <div><b>{{maintenanceData.lastRepairTime}}</b><p>最后维修</p></div>
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
        maintenanceData: {
            type: Object,
            default: function(){
                return {
                    mileageEstimate: 0
                }
            }
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
        padding-top: 5px;
        div.card-cont{
            div.gaikuang{
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