<template>
    <Card>
        <div class="d-flex al-center jc-between car-head">
            <h1 class="title">{{title}}</h1>
            <p>（点击可查看详情）</p>
        </div>
        <div class="card-cont">
            <div class="cc-list">
                <div @click="ckClick(1, 0)" class="cc-item">
                    <div>
                        <img v-if="carConditionData.scoreCarWater === 5" src="@/assets/img/home/pspc-l.png" alt="">
                        <img v-if="carConditionData.scoreCarWater !== 5" src="@/assets/img/home/pspc-h.png" alt="">
                        <img v-if="carConditionData.scoreCarWater === 5" class="yz" src="~assets/img/home/zhengchang.png" alt="">
                        <img v-if="carConditionData.scoreCarWater !== 5" class="yz" src="~assets/img/home/yichang.png" alt="">
                    </div>
                    <p :class="carConditionData.scoreCarWater === 5 ? 'normal' : 'error'" class="fp">{{carConditionData.scoreCarWater}}分</p>
                    <p class="hui">泡水排查</p>
                </div>
                <div @click="ckClick(1, 1)" class="cc-item">
                    <div>
                        <img v-if="carConditionData.scoreCarFire === 5" src="@/assets/img/home/hspc-l.png" alt="">
                        <img v-if="carConditionData.scoreCarFire !== 5" src="@/assets/img/home/hspc-h.png" alt="">
                        <img v-if="carConditionData.scoreCarFire === 5" class="yz" src="~assets/img/home/zhengchang.png" alt="">
                        <img v-if="carConditionData.scoreCarFire !== 5" class="yz" src="~assets/img/home/yichang.png" alt="">
                    </div>
                    <p :class="carConditionData.scoreCarFire === 5 ? 'normal' : 'error'" class="fp">{{carConditionData.scoreCarFire}}分</p>
                    <p class="hui">火烧排查</p>
                </div>
                <div @click="ckClick(1, 2)" class="cc-item">
                    <div>
                        <img v-if="carConditionData.scoreCarAccident === 5" src="@/assets/img/home/sgpc-l.png" alt="">
                        <img v-if="carConditionData.scoreCarAccident !== 5" src="@/assets/img/home/sgpc-h.png" alt="">
                        <img v-if="carConditionData.scoreCarAccident === 5" class="yz" src="~assets/img/home/zhengchang.png" alt="">
                        <img v-if="carConditionData.scoreCarAccident !== 5" class="yz" src="~assets/img/home/yichang.png" alt="">
                    </div>
                    <p :class="carConditionData.scoreCarAccident === 5 ? 'normal' : 'error'" class="fp">{{carConditionData.scoreCarAccident}}分</p>
                    <p class="hui">事故排查</p>
                </div>
                <div @click="ckClick(1, 3)" class="cc-item">
                    <div>
                        <img v-if="carConditionData.scoreCarEngineAndGearbox === 5" src="@/assets/img/home/fdj-l.png" alt="">
                        <img v-if="carConditionData.scoreCarEngineAndGearbox !== 5" src="@/assets/img/home/fdj-h.png" alt="">
                        <img v-if="carConditionData.scoreCarEngineAndGearbox === 5" class="yz" src="~assets/img/home/zhengchang.png" alt="">
                        <img v-if="carConditionData.scoreCarEngineAndGearbox !== 5" class="yz" src="~assets/img/home/yichang.png" alt="">
                    </div>
                    <p :class="carConditionData.scoreCarEngineAndGearbox === 5 ? 'normal' : 'error'" class="fp">{{carConditionData.scoreCarEngineAndGearbox}}分</p>
                    <p class="hui">发动机</p>
                </div>
            </div>
            <div v-show="showD1" class="cc-detail">
                <div :class="pLeft" class="sanjiao">
                    <img class="sanjiao" src="~assets/img/home/sanjiao.png" alt="">
                </div>
                <div class="maintenance-list">
                    <div class="maintenance-item" v-for="(item, index) in dData" :key="index">
                        <div class="m-top d-flex">
                            <p class="tt lb">维修</p>
                            <p style="color: #333" class="cc">{{$moment(item.repairRecord.repairBeginDate).format('YYYY/MM/DD')}}</p>
                        </div>
                        <div class="m-center d-flex">
                            <p class="tt hl">项目</p>
                            <p style="color: #666" class="cc">{{recordItems(item.repairRecord.recordItems)}}</p>
                        </div>
                        <div class="m-bottom d-flex">
                            <p class="tt hl">材料</p>
                            <p style="color: #666" class="cc">{{material(item.repairRecord.material)}}</p>
                        </div>
                    </div>
                </div>
                <div v-show="!dData.length" style="line-height: 1">无相关记录</div>
            </div>
            <div class="cc-list">
                <div @click="ckClick(2, 0)" class="cc-item">
                    <div>
                        <img v-if="carConditionData.scoreCarEngineAndGearbox === 5" src="@/assets/img/home/bsx-l.png" alt="">
                        <img v-if="carConditionData.scoreCarEngineAndGearbox !== 5" src="@/assets/img/home/bsx-h.png" alt="">
                        <img v-if="carConditionData.scoreCarEngineAndGearbox === 5" class="yz" src="~assets/img/home/zhengchang.png" alt="">
                        <img v-if="carConditionData.scoreCarEngineAndGearbox !== 5" class="yz" src="~assets/img/home/yichang.png" alt="">
                    </div>
                    <p :class="carConditionData.scoreCarEngineAndGearbox === 5 ? 'normal' : 'error'" class="fp">{{carConditionData.scoreCarEngineAndGearbox}}分</p>
                    <p class="hui">变速箱</p>
                </div>
                <div @click="ckClick(2, 1)" class="cc-item">
                    <div>
                        <img v-if="carConditionData.scoreComponent === 5" src="@/assets/img/home/zybj-l.png" alt="">
                        <img v-if="carConditionData.scoreComponent !== 5" src="@/assets/img/home/zybj-h.png" alt="">
                        <img v-if="carConditionData.scoreComponent === 5" class="yz" src="~assets/img/home/zhengchang.png" alt="">
                        <img v-if="carConditionData.scoreComponent !== 5" class="yz" src="~assets/img/home/yichang.png" alt="">
                    </div>
                    <p :class="carConditionData.scoreComponent === 5 ? 'normal' : 'error'" class="fp">{{carConditionData.scoreComponent}}分</p>
                    <p class="hui">重要部件</p>
                </div>
                <div @click="ckClick(2, 2)" class="cc-item">
                    <div>
                        <img v-if="carConditionData.scoreCarOutside === 5" src="@/assets/img/home/cswg-l.png" alt="">
                        <img v-if="carConditionData.scoreCarOutside !== 5" src="@/assets/img/home/cswg-h.png" alt="">
                        <img v-if="carConditionData.scoreCarOutside === 5" class="yz" src="~assets/img/home/zhengchang.png" alt="">
                        <img v-if="carConditionData.scoreCarOutside !== 5" class="yz" src="~assets/img/home/yichang.png" alt="">
                    </div>
                    <p :class="carConditionData.scoreCarOutside === 5 ? 'normal' : 'error'" class="fp">{{carConditionData.scoreCarOutside}}分</p>
                    <p class="hui">车身外观</p>
                </div>
                <div @click="ckClick(2, 3)" class="cc-item">
                    <div>
                        <img v-if="carConditionData.mileageInfo.ErrorMileageTimes === 0" src="@/assets/img/home/lcjl-l.png" alt="">
                        <img v-if="carConditionData.mileageInfo.ErrorMileageTimes !== 0" src="@/assets/img/home/lcjl-h.png" alt="">
                        <img v-if="carConditionData.mileageInfo.ErrorMileageTimes === 0" class="yz" src="~assets/img/home/zhengchang.png" alt="">
                        <img v-if="carConditionData.mileageInfo.ErrorMileageTimes !== 0" class="yz" src="~assets/img/home/yichang.png" alt="">
                    </div>
                    <p class="normal fp">{{carConditionData.mileageInfo.MileageBaseInfos.length}}条</p>
                    <p class="hui">里程记录</p>
                </div>
            </div>
            <div v-show="showD2" class="cc-detail">
                <div :class="pLeft" class="sanjiao">
                    <img class="sanjiao" src="~assets/img/home/sanjiao.png" alt="">
                </div>
                <div v-show="!showM" class="maintenance-list">
                    <div class="maintenance-item" v-for="(item, index) in dData" :key="index">
                        <div class="m-top d-flex">
                            <p class="tt lb">维修</p>
                            <p style="color: #333" class="cc">{{$moment(item.repairRecord.repairBeginDate).format('YYYY/MM/DD')}}</p>
                        </div>
                        <div class="m-center d-flex">
                            <p class="tt hl">项目</p>
                            <p style="color: #666" class="cc">{{recordItems(item.repairRecord.recordItems)}}</p>
                        </div>
                        <div class="m-bottom d-flex">
                            <p class="tt hl">材料</p>
                            <p style="color: #666" class="cc">{{material(item.repairRecord.material)}}</p>
                        </div>
                    </div>
                    <div v-show="!dData.length" style="line-height: 1">无相关记录</div>
                </div>
                
                <!-- 里程记录 -->
                <div class="licheng" v-show="showM">
                    <div class="d-flex">
                        <div><p class="bold">{{carConditionData.mileageInfo.TraveledMileage}}km</p><p>已行驶里程数</p></div>
                        <div><p class="bold">{{carConditionData.mileageInfo.ErrorMileageTimes}}条</p><p>异常里程记录</p></div>
                    </div>
                    <div class="m-list">
                        <div class="m-item" v-for="(item, index) in carConditionData.mileageInfo.MileageBaseInfos" :key="index">
                            <p>{{$moment(item.date).format('YYYY/MM/DD')}} | {{item.mile}}km</p>
                            <p>{{item.type}}</p>
                        </div>
                    </div>
                </div>

                
            </div>
            <div class="cc-list">
                <div @click="ckClick(3, 0)" class="cc-item">
                    <div>
                        <img v-if="carConditionData.recordsMaintenance.length === 0" src="@/assets/img/home/byjl-l.png" alt="">
                        <img v-if="carConditionData.recordsMaintenance.length !== 0" src="@/assets/img/home/byjl-h.png" alt="">
                        <img v-if="carConditionData.recordsMaintenance.length === 0" class="yz" src="~assets/img/home/zhengchang.png" alt="">
                        <img v-if="carConditionData.recordsMaintenance.length !== 0" class="yz" src="~assets/img/home/yichang.png" alt="">
                    </div>
                    <p :class="carConditionData.recordsMaintenance.length === 0 ? 'normal' : 'error'" class="fp">{{carConditionData.recordsMaintenance.length}}条</p>
                    <p class="hui">保养记录</p>
                </div>

                <div @click="ckClick(3, 1)" class="cc-item">
                    <div>
                        <img v-if="carConditionData.scoreCarOwnerCherishment === 5" src="@/assets/img/home/cswg-l.png" alt="">
                        <img v-if="carConditionData.scoreCarOwnerCherishment !== 5" src="@/assets/img/home/cswg-h.png" alt="">
                        <img v-if="carConditionData.scoreCarOwnerCherishment === 5" class="yz" src="~assets/img/home/zhengchang.png" alt="">
                        <img v-if="carConditionData.scoreCarOwnerCherishment !== 5" class="yz" src="~assets/img/home/yichang.png" alt="">
                    </div>
                    <p :class="carConditionData.scoreCarOwnerCherishment === 5 ? 'normal' : 'error'" class="fp">{{carConditionData.scoreCarOwnerCherishment}}分</p>
                    <p class="hui">车主爱惜度</p>
                </div>

                <div @click="ckClick(3, 2)" class="cc-item">
                    <div>
                        <img v-if="carConditionData.recordsRepair.length === 0" src="@/assets/img/home/qita-l.png" alt="">
                        <img v-if="carConditionData.recordsRepair.length !== 0" src="@/assets/img/home/qita-h.png" alt="">
                        <img v-if="carConditionData.recordsRepair.length === 0" class="yz" src="~assets/img/home/zhengchang.png" alt="">
                        <img v-if="carConditionData.recordsRepair.length !== 0" class="yz" src="~assets/img/home/yichang.png" alt="">
                    </div>
                    <p :class="carConditionData.recordsRepair.length === 0 ? 'normal' : 'error'" class="fp">{{carConditionData.recordsRepair.length}}条</p>
                    <p class="hui">其它维修</p>
                </div>
            </div>
            <div v-show="showD3" class="cc-detail">
                <div :class="pLeft" class="sanjiao">
                    <img class="sanjiao" src="~assets/img/home/sanjiao.png" alt="">
                </div>
                <!-- 保养记录 -->
                <div v-show="baoyang" class="maintenance-list">
                    <div class="maintenance-item" v-for="(item, index) in recordsMaintenance" :key="index">
                        <div class="m-top d-flex">
                            <p class="tt lb">保养</p>
                            <p style="color: #333" class="cc">{{$moment(item.repairBeginDate).format('YYYY/MM/DD')}} | {{item.mileage}}km</p>
                        </div>
                        <div class="m-center d-flex">
                            <p class="tt hl">项目</p>
                            <p style="color: #666" class="cc">{{recordItems(item.recordItems)}}</p>
                        </div>
                        <div class="m-bottom d-flex">
                            <p class="tt hl">材料</p>
                            <p style="color: #666" class="cc">{{material(item.material)}}</p>
                        </div>
                    </div>
                    <div v-show="!recordsMaintenance.length" style="line-height: 1">无相关记录</div>
                </div>
                <!-- 车主爱惜度 -->
                <div v-show="aixi" class="aixi">
                    <div class="d-flex" style="padding-top: 0">
                        <p>年均行驶里程</p>
                        <p>{{carConditionData.avgYearMileage}}公里</p>
                    </div>
                    <div class="d-flex">
                        <p>年均保养次数</p>
                        <p>{{carConditionData.avgYearMaintenanceTimes}}次</p>
                    </div>
                    <div class="d-flex">
                        <p>最后保养时间</p>
                        <p>{{$moment(carConditionData.lastMaintenanceTime).format('YYYY/MM/DD')}}</p>
                    </div>
                    <div class="d-flex" style="border: none;padding-bottom: 0">
                        <p>最后记录时间</p>
                        <p>{{$moment(carConditionData.lastRepTime).format('YYYY/MM/DD')}}</p>
                    </div>
                </div>
                <!-- q其它维修 -->
                <div v-show="qita" class="maintenance-list">
                    <div class="maintenance-item" v-for="(item, index) in recordsRepair" :key="index">
                        <div class="m-top d-flex">
                            <p class="tt lb">维修</p>
                            <p style="color: #333" class="cc">{{$moment(item.repairBeginDate).format('YYYY/MM/DD')}} | {{item.mileage}}km</p>
                        </div>
                        <div class="m-center d-flex">
                            <p class="tt hl">项目</p>
                            <p style="color: #666" class="cc">{{recordItems(item.recordItems)}}</p>
                        </div>
                        <div class="m-bottom d-flex">
                            <p class="tt hl">材料</p>
                            <p style="color: #666" class="cc">{{material(item.material)}}</p>
                        </div>
                    </div>
                     <div v-show="!recordsMaintenance.length" style="line-height: 1">无相关记录</div>
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
        carConditionData: {
            type: Object,
        }
    },
    computed: {
        recordItems(){
            return function(items){
                let recordItems = '';
                for(var i=0;i<items.length;i++){
                    recordItems += items[i].description+';'
                }
                return recordItems;
            }
        },
        material(){
            return function(item){
                let material = JSON.parse(item);
                let materialStr = ''
                for(let i =0;i<material.length;i++){
                    materialStr += `${material[i].name}：${material[i].count}；`;
                }
                return materialStr
            }
        }
    },
    data(){
        return {
            showD1: false,
            dData: [],
            showD2: false,
            showD3: false,
            pLeft: 'p-left0',
            recordsMaintenance: [],//保养记录
            recordsRepair: [],//其它维修
            showM: false,
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
            ],
            baoyang: false,
            aixi: false,
            qita: false,
        }
    },
    methods: {
        ckClick(type, i){
            let ti = type.toString()+i;
            [this.showD1, this.showD2, this.showD3] = [false, false, false];
            if(type === 1){
                ti=== this.index ? ( this.showD1 = false,this.index = null ) : (this.showD1 = true,this.index = ti);
                if(i === 0){
                    this.dData = this.carConditionData.carWater;
                }else if(i === 1){
                    this.dData = this.carConditionData.carFire;
                }else if(i ===2){
                    this.dData = this.carConditionData.carFire;
                }else if(i ===3){
                    this.dData = this.carConditionData.carEngineAndGearbox;
                }
            }else if(type === 2){
                ti === this.index ? ( this.showD2 = false,this.index = null ) : (this.showD2 = true,this.index = ti);
                i === 3 ? this.showM = true : this.showM = false;
                if(i === 0){
                    this.dData = this.carConditionData.carEngineAndGearbox;
                }else if(i === 1){
                    this.dData = this.carConditionData.carComponent;
                }else if(i ===2){
                    console.log(1);
                    this.dData = this.carConditionData.carOutSide;
                }else if(i ===3){
                    this.dData = [];
                }

            }else if(type ===3){
                ti === this.index ? ( this.showD3 = false,this.index = null ) : (this.showD3 = true,this.index = ti);
                if(i === 0){
                    [this.baoyang, this.aixi, this.qita] = [true, false, false];
                    this.recordsMaintenance = this.carConditionData.recordsMaintenance;
                }else if(i === 1){
                    [this.baoyang, this.aixi, this.qita] = [false, true, false];
                }else if(i ===2){
                    [this.baoyang, this.aixi, this.qita] = [false, false, true];
                    this.recordsRepair = this.carConditionData.recordsRepair;
                }

           }
            if(i === 0){
                this.pLeft = 'p-left0';
            }else if(i===1){
                this.pLeft = 'p-left25';
            }else if(i===2){
                this.pLeft = 'p-left50';
            }else if(i===3){
                this.pLeft = 'p-left75';
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .card{
        div.car-head{
            justify-content: flex-start;
            align-items: flex-end;
            margin-bottom: 0;
            p{
                color: #999;
            }
        }
        .error{
            color: #ff0000;
            line-height: 1;
        }
        .normal{
            color: #716dff;
            line-height: 1;
        }
        .hui{
            color: #999;
            line-height: 1;
        }

        div.card-cont{
            .cc-list{
                overflow: hidden;
                
                div.cc-item{
                    margin-top: 40px;
                    float: left;
                    width: 25%;
                    text-align: center;
                    .fp{
                        margin: 18px 0 10px;
                    }
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
                    
                    
                }

            }
            .cc-detail{
                margin-top: 24px;
                padding: 20px 12px;
                background-color: #f8f8f8;
                border-radius: 4px;
                position: relative;
                .p-left0{
                    left: 0;
                }
                .p-left25{
                    left: 25%;
                }
                .p-left50{
                    left: 50%;
                }
                .p-left75{
                    left: 75%;
                }
                div.sanjiao{
                    position: absolute;
                    width: 25%;
                    top: -12px;
                    img{
                        width: 16px;
                        height: 12px;
                        position: absolute;
                        top: 0;
                        left: 50%;
                        margin-left: -8px;
                    }
                }
                .maintenance-item{
                    padding-bottom: 20px;
                    border-bottom: 1px solid #ddd;
                    .d-flex{
                        margin-top: 20px;
                        align-self: flex-start;
                    }
                    p.tt{
                        display: table;
                        margin-right: 12px;
                        padding: 2px 6px;
                        border-radius: 2px;
                    }
                    .lb{
                        background-color: #716dff;
                        color: #fff;
                    }
                    .hl{
                        background-color: #eee;
                    }
                    .cc{
                        flex: 1;
                        line-height: 1.8;
                    }
                }
                .licheng{
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
                .aixi{
                    .d-flex{
                        border-bottom: 1px solid #ddd;
                        justify-content: space-between;
                        padding: 20px 0;
                        p{
                            line-height: 1;
                        }
                    }
                }
            }
        }
    }
</style>