<template>
    <div class="maintenance">
        <Head>
            <p class="bold">{{name}}</p>
            <p class="vin">VIN：{{vin}}</p>
            <p>时间：{{date}}</p>
        </Head>
        <div class="content">
            <Rating @openPopup="openPopup" title="历史车况综合评级"/>
            <VehicleOverview title="车辆概况"/>
            <Maintenance title="非重要维修历史"/>
            <Mileage title="历史里程"/>
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
import Rating from '@/components/content/home/CarCondition/Rating'
import VehicleOverview from '@/components/content/home/CarCondition/VehicleOverview'
import Mileage from '@/components/content/home/CarCondition/Mileage'
import Maintenance from '@/components/content/home/CarCondition/Maintenance'
export default {
    components: { Popup, Head, Rating, VehicleOverview, Mileage, Maintenance },
    data(){
        return {
            name: '雪佛兰 科鲁兹 2013款 1.8L SE AT',
            vin: 'LSVFF26R3D2134566',
            date: '2020-08-05 10:10:10',
            showPopup: false
        }
    },
    methods: {
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