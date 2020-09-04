<template>
    <Card>
        <div class="d-flex al-center jc-between car-head">
            <h1 class="title">{{title}}</h1>
        </div>
        <div class="card-cont">
            <div class="cc-list">
                <div class="cc-item">
                    <div>
                        <img v-if="!maintenanceData.carWaterFlag" src="~assets/img/home/pspc-l.png" alt="">
                        <img v-if="maintenanceData.carWaterFlag" src="~assets/img/home/pspc-h.png" alt="">
                        <img v-if="!maintenanceData.carWaterFlag" class="yz" src="~assets/img/home/zhengchang.png" alt="">
                        <img v-if="maintenanceData.carWaterFlag" class="yz" src="~assets/img/home/yichang.png" alt="">
                    </div>
                    <p style="color: #999">泡水排查</p>
                </div>
                <div class="cc-item">
                    <div>
                        <img v-if="!maintenanceData.carFireFlag" src="~assets/img/home/hspc-l.png" alt="">
                        <img v-if="maintenanceData.carFireFlag" src="~assets/img/home/hspc-h.png" alt="">
                        <img v-if="!maintenanceData.carFireFlag" class="yz" src="~assets/img/home/zhengchang.png" alt="">
                        <img v-if="maintenanceData.carFireFlag" class="yz" src="~assets/img/home/yichang.png" alt="">
                    </div>
                    <p style="color: #999">火烧排查</p>
                </div>
                <div class="cc-item">
                    <div>
                        <img v-if="!maintenanceData.carComponentRecordsFlag" src="~assets/img/home/zybj-l.png" alt="">
                        <img v-if="maintenanceData.carComponentRecordsFlag" src="~assets/img/home/zybj-h.png" alt="">
                        <img v-if="!maintenanceData.carComponentRecordsFlag" class="yz" src="~assets/img/home/zhengchang.png" alt="">
                        <img v-if="maintenanceData.carComponentRecordsFlag" class="yz" src="~assets/img/home/yichang.png" alt="">
                    </div>
                    <p style="color: #999">重要部件</p>
                </div>
                <div class="cc-item">
                    <div>
                        <img v-if="!maintenanceData.carOutsideRecordsFlag" src="~assets/img/home/cswg-l.png" alt="">
                        <img v-if="maintenanceData.carOutsideRecordsFlag" src="~assets/img/home/cswg-h.png" alt="">
                        <img v-if="!maintenanceData.carOutsideRecordsFlag" class="yz" src="~assets/img/home/zhengchang.png" alt="">
                        <img v-if="maintenanceData.carOutsideRecordsFlag" class="yz" src="~assets/img/home/yichang.png" alt="">
                    </div>
                    <p style="color: #999">车身外观</p>
                </div>
                <div class="cc-item">
                    <div>
                        <img v-if="!maintenanceData.carConstructRecordsFlag" src="~assets/img/home/dp-l.png" alt="">
                        <img v-if="maintenanceData.carConstructRecordsFlag" src="~assets/img/home/dp-h.png" alt="">
                        <img v-if="!maintenanceData.carConstructRecordsFlag" class="yz" src="~assets/img/home/zhengchang.png" alt="">
                        <img v-if="maintenanceData.carConstructRecordsFlag" class="yz" src="~assets/img/home/yichang.png" alt="">
                    </div>
                    <p style="color: #999">结构部件</p>
                </div>
                <div class="cc-item">
                    <div>
                        <img v-if="!maintenanceData.mileageIsNormalFlag" src="~assets/img/home/lcjl-l.png" alt="">
                        <img v-if="maintenanceData.mileageIsNormalFlag" src="~assets/img/home/lcjl-h.png" alt="">
                        <img v-if="!maintenanceData.mileageIsNormalFlag" class="yz" src="~assets/img/home/zhengchang.png" alt="">
                        <img v-if="maintenanceData.mileageIsNormalFlag" class="yz" src="~assets/img/home/yichang.png" alt="">
                    </div>
                    <p style="color: #999">里程排查</p>
                </div>
            </div>
            <div @click="$router.push('/home/carcondition?reportid='+$route.query.reportid)" class="btn">查看车况报告</div>
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
                    carWaterFlag: 1
                }
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .card{
        div.card-cont{
            .cc-list{
                overflow: hidden;
                div.cc-item{
                    margin-top: 42px;
                    float: left;
                    width: 25%;
                    text-align: center;
                    div{
                        width: 28px;
                        height: 28px;
                        position: relative;
                        margin: 0 auto;
                        img{
                            width: 28px;
                            height: 28px;
                        }
                        img.yz{
                            position: absolute;
                            width: 12px;
                            height: 12px;
                            right: -14px;
                            top: -14px;
                        }
                    }
                    p{
                        margin-top: 20px;
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