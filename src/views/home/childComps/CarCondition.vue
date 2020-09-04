<template>
    <div class="maintenance">
        <Head>
            <p class="bold">{{reportData.maintenanceData.modelName ? reportData.maintenanceData.modelName : '-'}}</p>
            <p class="vin">VIN：{{reportData.maintenanceData.makeReportDate ? reportData.maintenanceData.makeReportDate : '-'}}</p>
            <p>时间：{{reportData.maintenanceData.vin ? reportData.maintenanceData.vin : '-'}}</p>
        </Head>
        <div class="content">
            <Rating :maintenanceData="reportData.maintenanceData" title="历史车况综合评级"/>
            <VehicleOverview :maintenanceData="reportData.maintenanceData" title="车辆概况"/>
            <ImportantComponents v-if="reportData.maintenanceData.componentAnalyzeRepairRecords && reportData.maintenanceData.componentAnalyzeRepairRecords.length" :componentAnalyzeRepairRecords="reportData.maintenanceData.componentAnalyzeRepairRecords" title="重要部件维修记录"/>
            <CarBody v-if="reportData.maintenanceData.outsideAnalyzeRepairRecords && reportData.maintenanceData.outsideAnalyzeRepairRecords.length" :outsideAnalyzeRepairRecords="reportData.maintenanceData.outsideAnalyzeRepairRecords" title="车身外观维修记录"/>
            <Structure v-if="reportData.maintenanceData.constructAnalyzeRepairRecords &&reportData.maintenanceData.constructAnalyzeRepairRecords.length" :constructAnalyzeRepairRecords="reportData.maintenanceData.constructAnalyzeRepairRecords" title="结构部件维修记录"/>
            <Maintenance :normalRepairRecords="reportData.maintenanceData.normalRepairRecords" title="全部维修记录"/>
        </div>
    </div>
</template>

<script>
import Popup from '@/components/content/home/Popup'
import Head from '@/components/content/home/Head'
import Rating from '@/components/content/home/CarCondition/Rating'
import ImportantComponents from '@/components/content/home/CarCondition/ImportantComponents'
import CarBody from '@/components/content/home/CarCondition/CarBody'
import Structure from '@/components/content/home/CarCondition/Structure'
import VehicleOverview from '@/components/content/home/CarCondition/VehicleOverview'
// import Mileage from '@/components/content/home/CarCondition/Mileage'
import Maintenance from '@/components/content/home/CarCondition/Maintenance'
export default {
    components: { Popup, Head, Rating, ImportantComponents, CarBody, Structure, VehicleOverview, Maintenance },
    data(){
        return {
            name: '雪佛兰 科鲁兹 2013款 1.8L SE AT',
            vin: 'LSVFF26R3D2134566',
            date: '2020-08-05 10:10:10',
            showPopup: false,
            reportData: {
                maintenanceData: {
                    outsideAnalyzeRepairRecords: [],
                    normalRepairRecords: []
                }
            }
        }
    },
    mounted(){
        this.fetch();
    },
    methods: {
        fetch(){
            this.loading = this.$weui.loading('加载中...');
            this.$axios.post('/api/search_vehicle_index.php?s=/Home/Report/getCbsPreciseReport', this.qs.stringify({
                reportid: this.$route.query.reportid
            }))
            .then( res => {
                this.reportData = res.data.data;
                this.loading.hide();
            })
            .catch( err => {
                this.loading.hide();
                console.log(err);
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .maintenance{
        padding-bottom: 50px;
        width: 100vw;
        color: #333;
        font-size: 14px;
        background-color: #f8f8f8;
        p{
            line-height: 1.2;
        }
        .head{
            p.bold{
                color: #fff;
                font-size: 17px;
                opacity: 1;
            }
            p{
                opacity: .8;
            }
            p.vin{
                margin: 12px 0;
            }
        }
        .content{
            padding: 0 16px;
            margin-top: -50px;
            position: relative;
        }
        .p-title{
            color: #666;
            margin-top: 20px;
        }
        .p-cont{
            margin-top: 12px;
            line-height: 1.5;
        }
    }
</style>