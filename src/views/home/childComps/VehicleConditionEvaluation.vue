<template>
    <div id="report-page" @touchmove.prevent>
        <Head>
            <p class="name bold">{{reportData.maintenanceData.modelName ? reportData.maintenanceData.modelName : '-'}}</p>
            <p class="vin">报告时间：{{reportData.maintenanceData.vin ? reportData.maintenanceData.vin : '-'}}</p>
            <div @click="showGk = !showGk" class="d-flex gk">
                <p>车辆概况</p>
                <img v-show="!showGk" src="~assets/img/home/xiajiantou.png" alt="">
                <img v-show="showGk" src="~assets/img/home/shangjiantou.png" alt="">
            </div>
            <div v-show="showGk" class="gaikuang">
                <div class="d-flex">
                    <div><b>{{reportData.preciseValuationData.carAge ? reportData.preciseValuationData.carAge : '-'}}</b><p>车龄</p></div>
                    <div><b>{{reportData.preciseValuationData.firstPlateTime ? reportData.preciseValuationData.firstPlateTime : '-'}}</b><p>上牌日期</p></div>
                    <div><b>{{reportData.preciseValuationData.miles ? reportData.preciseValuationData.miles : '-'}}</b><p>行驶里程</p></div>
                </div>
                <div class="d-flex">
                    <div><b>{{reportData.preciseValuationData.dealNums ? reportData.preciseValuationData.dealNums : '-'}}</b><p>过户次数</p></div>
                    <div><b>{{reportData.preciseValuationData.carColor ? reportData.preciseValuationData.carColor : '-'}}</b><p>车辆颜色</p></div>
                    <div><b>{{reportData.preciseValuationData.modelAnaly == 1 ? '是' : '否'}}</b><p>热门车型</p></div>
                </div>
            </div>
        </Head>
        <div class="content">
            <VehicleValuation :preciseValuationData="reportData.preciseValuationData" title="车辆估价" />
            <PriceTrend :monthsPrice="reportData.preciseValuationData.monthsPrice" :monthsAgoPrice="reportData.preciseValuationData.monthsAgoPrice" title="价格走势" />
            <!-- <CarIndex title="车况指数" /> -->
            <!-- <Rating title="车辆概况" /> -->
            <VehicleProfile :maintenanceData="reportData.maintenanceData" title="车辆概况" />
            <Gongxu :valuationData="reportData.preciseValuationData" title="本城市供需比" />
            <Chekuangbi :modelRatio="reportData.preciseValuationData.modelRatio" title="市场车况占比" />
            <Fenxi :marketPriceAnalyse="reportData.preciseValuationData.marketPriceAnalyse" title="市场成交分析" />
            <Record :dealRecords="reportData.preciseValuationData.dealRecords" title="成交记录" />
            <ReportDescription title="报告说明"/>
        </div>
    </div>
</template>

<script>
import Head from '@/components/content/home/Head'
import VehicleValuation from '@/components/content/home/vehicleConditionEvaluation/VehicleValuation'
import PriceTrend from '@/components/content/home/vehicleConditionEvaluation/PriceTrend'
// import CarIndex from '@/components/content/home/vehicleConditionEvaluation/CarIndex'
// import Rating from '@/components/content/home/vehicleConditionEvaluation/Rating'
import VehicleProfile from'@/components/content/home/vehicleConditionEvaluation/VehicleProfile'
import Gongxu from '@/components/content/home/vehicleConditionEvaluation/Gongxu'
import Chekuangbi from '@/components/content/home/vehicleConditionEvaluation/Chekuangbi'
import Fenxi from '@/components/content/home/vehicleConditionEvaluation/Fenxi'
import Record from '@/components/content/home/vehicleConditionEvaluation/Record'
import ReportDescription from '@/components/content/home/vehicleConditionEvaluation/ReportDescription'
export default {
    name: 'Report',
    components: { Head, VehicleValuation, PriceTrend, VehicleProfile, Gongxu, Chekuangbi, Fenxi, Record, ReportDescription},
    data(){
        return {
            reportData: {
                maintenanceData: {
                },
                dealRecords: [],
                preciseValuationData: {
                    priceData: {},//价格数据
                    modelRatio: {},//市场车况占比
                    dealRecords: []//成交记录
                }
                // valuationData: {}
            },
            showGk: false,
        }
    },
    mounted(){
        this.fetch();
    },
    methods: {
        fetch(){
            let loading = this.$weui.loading('加载中...');
            this.$axios.post('/api/search_vehicle_index.php?s=/Home/Report/getCbsPreciseReport', this.qs.stringify({
                reportid: this.$route.query.reportid
            }))
            .then( res => {
                this.reportData = res.data.data;
                console.log(this.reportData);
                loading.hide();
            })
            .catch( err => {
                loading.hide();
                console.log(err);
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    #report-page{
        color: #333;
        width: 100vw;
        background-color: #f8f8f8;
        padding-bottom: 50px;
        font-size: 14px;
        .head{
            p.name{
                font-size: 17px;
            }
            p.vin{
                opacity: .8;
                margin-top: 12px;
            }
            div.gk{
                margin-top: 10px;
                // margin-bottom: 60px;
                justify-content: center;
                align-items: center;
                opacity: .8;
                img{
                    width: 17px;
                    height: 10px;
                    margin-left: 8px;
                }
            }
            div.gaikuang{
                .d-flex{
                    // justify-content: space-between;
                    text-align: center;
                    margin-top: 30px;
                    div{
                        width: 33.3%;
                    }
                    b{
                        color: #fff;
                        line-height: 1;
                    }
                    p{
                        opacity: .8;
                        line-height: 1;
                        margin-top: 8px;
                    }
                }
            }
            
        }
        .content{
            padding: 0 16px;
            margin-top: -50px;
            position: relative;
        }
    }
</style>