<template>
    <div id="report-page" @touchmove.prevent>
        <Head>
            <p class="name bold">{{reportData.modelName}}</p>
            <p class="vin">VIN：{{model.vin}}</p>
            <div @click="showGk = !showGk" class="d-flex gk">
                <p>车辆概况</p>
                <img v-show="!showGk" src="~assets/img/home/xiajiantou.png" alt="">
                <img v-show="showGk" src="~assets/img/home/shangjiantou.png" alt="">
            </div>
            <div v-show="showGk" class="gaikuang">
                <div class="d-flex">
                    <div><b>123900</b><p>厂商指导价</p></div>
                    <div><b>6档手自一体变速箱</b><p>变速箱</p></div>
                    <div><b>1.598</b><p>排量</p></div>
                </div>
                <div class="d-flex">
                    <div><b>汽油</b><p>燃料形式</p></div>
                    <div><b>201212</b><p>上市日期</p></div>
                    <div><b>停产</b><p>是否停产</p></div>
                </div>
            </div>
        </Head>
        <div class="content">
            <VehicleValuation :preciseValuationData="reportData.preciseValuationData" title="车辆估价"/>
            <CarIndex title="车况指数"/>
            <Rating title="历史车况综合评级"/>
            <Gongxu :valuationData="reportData.preciseValuationData" title="本城市供需比"/>
            <Chekuangbi :modelRatio="reportData.preciseValuationData.modelRatio" title="市场车况占比"/>
            <Fenxi title="市场成交分析"/>
            <Record :dealRecords="reportData.preciseValuationData.dealRecords" title="成交记录"/>
            <ReportDescription title="报告说明"/>
        </div>
    </div>
</template>

<script>
import Head from '@/components/content/home/Head'
import VehicleValuation from '@/components/content/home/vehicleConditionEvaluation/VehicleValuation'
import CarIndex from '@/components/content/home/vehicleConditionEvaluation/CarIndex'
import Rating from '@/components/content/home/vehicleConditionEvaluation/Rating'
import Gongxu from '@/components/content/home/vehicleConditionEvaluation/Gongxu'
import Chekuangbi from '@/components/content/home/vehicleConditionEvaluation/Chekuangbi'
import Fenxi from '@/components/content/home/vehicleConditionEvaluation/Fenxi'
import Record from '@/components/content/home/vehicleConditionEvaluation/Record'
import ReportDescription from '@/components/content/home/vehicleConditionEvaluation/ReportDescription'
export default {
    name: 'Report',
    components: { Head, VehicleValuation, CarIndex, Rating, Gongxu, Chekuangbi, Fenxi, Record, ReportDescription},
    data(){
        return {
            model: {
                name: '2017款标致307三厢1.6手动舒适版',
                vin: 'LSVFF26R3D2134566',
            },
            reportData: {
                dealRecords: [],
                preciseValuationData: {
                    priceData: {},//价格数据
                    modelRatio: {},//市场车况占比
                    dealRecords: []//成交记录
                }
                // valuationData: {}
            },
            showGk: false
        }
    },

    mounted(){
        this.fetch();
    },
    methods: {
        fetch(){
            this.$axios.post('/api/search_vehicle_index.php?s=/Home/Report/getCbsPreciseReport',{
                reportid: 1
            })
            .then( res => {
                this.reportData = res.data.data;
                console.log(this.reportData);
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