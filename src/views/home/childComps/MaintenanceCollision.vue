<template>
    <div class="maintenance">
        <Head>
            <p class="bold">{{name}}</p>
            <p class="vin">VIN：{{reportData.vin}}</p>
            <p>时间：{{reportData.updateTime}}</p>
        </Head>
        <div class="content">
            <Rating :rData="reportData" @openPopup="openPopup" title="历史车况综合评级"/>
            <CarCondition :carConditionData="reportData" title="车况分析"/>
            <Mileage :rData="reportData" title="里程保养概况"/>
            <Maintenance :recordsRep="reportData.recordsRep" title="维保数据"/>
            <Collision title="碰撞数据"/>
        </div>
        <Popup v-if="showPopup" @closePopup="closePopup" title="评级说明">
            <div class="p-title bold">事故火烧泡水评级说明</div>
            <div class="p-cont">
                S：允许结构件有异常情况；允许覆盖件有损坏情况；允许发动机、变速箱、底盘、电气设备、空调等有异常；<br>
                M：允许结构件有钣金修复情况；允许加强件有损坏情况；允许气囊或安全带有更换情况；允许部件有烧焦、烟熏等情况；允许部件有清洗、晾晒、过水等情况；<br>
                R：允许结构件有切割、焊接、更换等情况；允许部件有火烧、自燃、起火等情况；允许部件有水浸、进水、涉水等情况；
            </div>
            <div class="p-title bold">整车车况评分说明</div>
            <div class="p-cont">
                S：允许结构件有异常情况；允许覆盖件有损坏情况；允许发动机、变速箱、底盘、电气设备、空调等有异常；<br>
                M：允许结构件有钣金修复情况；允许加强件有损坏情况；允许气囊或安全带有更换情况；允许部件有烧焦、烟熏等情况；允许部件有清洗、晾晒、过水等情况；<br>
                R：允许结构件有切割、焊接、更换等情况；允许部件有火烧、自燃、起火等情况；允许部件有水浸、进水、涉水等情况；
            </div>
        </Popup>
    </div>
</template>

<script>
import Popup from '@/components/content/home/Popup'
import Head from '@/components/content/home/Head'
import Rating from '@/components/content/home/MaintenanceCollision/Rating'
import CarCondition from '@/components/content/home/MaintenanceCollision/CarCondition'
import Mileage from '@/components/content/home/MaintenanceCollision/Mileage'
import Maintenance from '@/components/content/home/MaintenanceCollision/Maintenance'
import Collision from '@/components/content/home/MaintenanceCollision/Collision'
export default {
    components: { Popup, Head, Rating, CarCondition, Mileage, Maintenance, Collision },
    data(){
        return {
            name: '奥迪 A6',
            vin: 'LSVFF26R3D2134566',
            date: '2020-08-05 10:10:10',
            showPopup: false,
            reportData: {
                recordsRep: [],
                recordsIns: [],
                mileageInfo: {
                    ErrorMileageTimes: 0,
                    MileageBaseInfos :[]
                },
                recordsMaintenance: [],
                recordsRepair: []
            }
        }
    },
    mounted(){
        this.init();
    },
    methods: {
        init(){
            this.$axios.post('/api/search_vehicle_index.php?s=/Home/Report/getMaintenanceReport',{
                reportid: 1
            })
            .then( res => {
                this.reportData = res.data.data.data;
                console.log(this.reportData);
            })
        },
        openPopup(){
            this.showPopup = true;
        },
        closePopup(){
            this.showPopup = false;
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
    }
</style>