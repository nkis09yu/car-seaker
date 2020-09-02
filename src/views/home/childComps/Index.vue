<template>
    <div class="wrapper">
        <div class="banner"><img src="~assets/img/home/home-banner.png" alt=""></div>
        <div class="content">
            <div class="br-16 white wwcc">
                <div class="tab d-flex">
                    <p @click="tabActiveIndex = index" :class="{'active': tabActiveIndex==index}" class="tab-item bold" v-for="(tab, index) in tabs" :key="index">{{tab}}</p>
                </div>
                <div class="cont">
                    <!-- 维保记录 -->
                    <div class="jilu" v-show="tabActiveIndex === 0">
                        <div :class="{'focus': focus}" class="input">
                            <input @blur="focus=false" @focus="focus=true" v-model.trim="vin" type="text" placeholder="请输入17位VIN码">
                            <img src="~assets/img/home/sao.png" alt="扫VIN">
                        </div>
                        <div @click="weibao" class="btn">立即查询</div>

                        <div class="btn shili">示例报告</div>
                        <div class="tips d-flex">
                            <div class="d-flex">
                                <p class="color-999">常规品牌：</p>
                                <p>￥</p>
                                <b class="fz-34">20.00</b>
                            </div>
                            <div class="d-flex">
                                <p class="color-999">特殊品牌：</p>
                                <p>￥</p>
                                <b class="fz-34">20.00</b>
                                <p>起</p>
                            </div>
                        </div>
                    </div>
                    <!-- 维保碰撞 -->
                    <div class="pengzhuang" v-show="tabActiveIndex === 1">
                        <div :class="{'focus': focus}" class="input">
                            <input @blur="focus=false" @focus="focus=true" v-model.trim="vin" type="text" placeholder="请输入17位VIN码">
                            <img src="~assets/img/home/sao.png" alt="扫VIN">
                        </div>
                        <div @click="pengzhuang" class="btn">立即查询</div>
                        <div @click="$router.push('/home/maintenance')" class="btn shili">示例报告</div>
                        <div class="tips d-flex">
                            <div class="d-flex">
                                <p class="color-999">常规品牌：</p>
                                <p>￥</p>
                                <b class="fz-34">20.00</b>
                            </div>
                            <div class="d-flex">
                                <p class="color-999">特殊品牌：</p>
                                <p>￥</p>
                                <b class="fz-34">20.00</b>
                                <p>起</p>
                            </div>
                        </div>
                    </div>
                    <!-- 车况估价 -->
                    <div class="gujia" v-show="tabActiveIndex === 2">
      
                        <div class="gujia-list">
                            <div class="gujia-item">
                                <p class="title">VIN码</p>
                                <div class="vin"><input type="text" placeholder="请输入" v-model.trim="vincode"><img src="~assets/img/home/sao.png" alt=""></div>
                            </div>
                            <div class="gujia-item">
                                <p class="title">品牌车型</p>
                                <div @click="pinpai" class="xz"><p>{{pp}}</p><img src="~assets/img/home/youjiantou.png" alt=""></div>
                            </div>
                            <div class="gujia-item">
                                <p class="title">上牌城市</p>
                                <div @click="chengshi" class="xz"><p>{{city}}</p> <img src="~assets/img/home/youjiantou.png" alt=""></div>
                            </div>
                            <div class="gujia-item">
                                <p class="title">上牌时间</p>
                                <div @click="shijian" class="xz"><p>{{date}}</p> <img src="~assets/img/home/youjiantou.png" alt=""></div>
                            </div>
                            <div class="gujia-item">
                                <p class="title">表显里程</p>
                                <div class="sr"><input type="text" placeholder="请输入" v-model.trim="licheng"><p>万公里</p></div>
                            </div>
                            <div class="gujia-item">
                                <p class="title">车身颜色</p>
                                <div @click="yanse" class="xz"><p>{{color}}</p> <img src="~assets/img/home/youjiantou.png" alt=""></div>
                            </div>
                            <div class="gujia-item">
                                <p class="title">过户次数</p>
                                <div @click="guohu" class="xz"><p>{{nums}}</p> <img src="~assets/img/home/youjiantou.png" alt=""></div>
                            </div>
                        </div>
                        <div @click="gujia" class="btn">立即查询</div>
                        <div  @click="$router.push('/home/evaluation')" class="btn shili">示例报告</div>
                        <div class="tips d-flex">
                            <div class="d-flex">
                                <p class="color-999">常规品牌：</p>
                                <p>￥</p>
                                <b class="fz-34">20.00</b>
                            </div>
                            <div class="d-flex">
                                <p class="color-999">特殊品牌：</p>
                                <p>￥</p>
                                <b class="fz-34">20.00</b>
                                <p>起</p>
                            </div>
                        </div>
                    </div>
                    <!-- 车型识别 -->
                    <!-- <div class="shibie" v-show="tabActiveIndex === 3">
                        <div :class="{'focus': focus}" class="input">
                            <input @blur="focus=false" @focus="focus=true" v-model.trim="vin" type="text" placeholder="请输入17位VIN码">
                            <img src="~assets/img/home/sao.png" alt="扫VIN">
                        </div>
                        <div @click="shibie" class="btn">立即查询</div>
                        <div  @click="$router.push('/home/identify')" class="btn shili">示例报告</div>
                        <div class="tips d-flex">
                            <div class="d-flex">
                                <p class="color-999">查询价格：</p>
                                <p>￥</p>
                                <b class="fz-34">20.00</b>
                            </div>
                        </div>
                    </div> -->
                </div>

            </div>


            <Tips v-show="tabActiveIndex === 0" :tips="weibapTips" />
            <Tips v-show="tabActiveIndex === 1" :tips="pengzhuangTips" />
            <Tips v-show="tabActiveIndex === 2" :tips="gujiaTips" />
            <!-- <Tips v-show="tabActiveIndex === 3" :tips="shibieTips" /> -->
            <!-- <div class="br-16 white tehui">
                <h1>特惠1元查询</h1>
                <div class="d-flex">
                    <div>
                        <img src="~assets/img/home/chexing.png" alt="">
                        <p>车型匹配</p>
                    </div>
                    <div>
                        <img src="~assets/img/home/jianban.png" alt="">
                        <p>简版估价</p>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import { areaList } from '@/assets/js/areaList.js'
import Tips from '@/components/content/home/Tips'
export default {
    components: {
        Tips
    },
    data(){
        return {
            tabs: ['维保记录', '维保碰撞', '车况估价'],
            tabActiveIndex: 0,
            vin: '',//vin码
            vincode: '',
            focus: false,
            price: 20.00,//价格
            licheng: '',//表显里程
            pp: '请选择',
            city: '请选择',
            date: '请选择',
            color: '请选择',
            nums: '请选择',
            weibapTips: [
                {
                    img: require('@/assets/img/home/wpg-1.jpg'),
                    title: '黎某看上一辆29万某品牌3系的车'
                },{
                    img: require('@/assets/img/home/weibao-2.jpg'),
                    title: '通过“维保记录”查出该车有泡水维修记录，发动机、变速器、底盘都有问题'
                },{
                    img: require('@/assets/img/home/wpg-3.jpg'),
                    title: '一次查询避免损失29万元'
                },
            ],
            pengzhuangTips: [
                {
                    img: require('@/assets/img/home/wpg-1.jpg'),
                    title: '黎某看上一辆29万某品牌3系的车'
                },{
                    img: require('@/assets/img/home/pengzhuang-2.jpg'),
                    title: '通过“碰撞记录”查出该车前部发生事故，并且该车烧机油而冒蓝烟'
                },{
                    img: require('@/assets/img/home/wpg-3.jpg'),
                    title: '一次小查询，避免大损失'
                },
            ],
            gujiaTips: [
                {
                    img: require('@/assets/img/home/wpg-1.jpg'),
                    title: '黎某看上一辆29万某品牌3系的车'
                },{
                    img: require('@/assets/img/home/gujia-2.jpg'),
                    title: '通过“车况估价”查出该车重要部件有多次维修记录，且多个重要部件有更换记录'
                },{
                    img: require('@/assets/img/home/wpg-3.jpg'),
                    title: '买车有风险，估价不可免'
                },
            ],
            // shibieTips: [
            //     {
            //         img: require('@/assets/img/home/shibie-1.jpg'),
            //         title: '通过“车型识别”查出该车基本参数配置、加装配置、生产情况、指导价等'
            //     },{
            //         img: require('@/assets/img/home/shibie-2.jpg'),
            //         title: '查询车型识别很重要，不要因小失大'
            //     }
            // ]
        }
    },
    mounted(){
    },
    methods: {
        pinpai(){
            const that = this;
            this.$weui.picker([
            {
                label: '品牌',
                value: 0,
            },{
                label: '车系',
                value: 1
            },{
                label: '车型',
                value: 2
            }
            ], {
                defaultValue: [0],
                onConfirm: function (result) {
                    that.pp = result[0].label;
                },
            });
        },
        chengshi(){
            const that = this;
            this.$weui.picker(areaList,
            {
                defaultValue: [areaList[0]['label'], areaList[0]['children'][0]],
                onConfirm: function (result) {
                    that.city = result[1].label;
                },
                title: '请选择城市'
            });
        },
        shijian(){
            const that = this;
            this.$weui.datePicker({
                start: 2000, // 从今天开始
                end: 2030,
                defaultValue: [2020, 6],
                depth:2,
                onConfirm: function(result){
                    that.date = result[0].label + result[1].label;
                },
                id: 'datePicker'
            });
        },
        yanse(){
            let that = this;
            this.$weui.picker([
            {
                label: '紫色',
                value: 0
            },{
                label: '蓝色',
                value: 1
            },{
                label: '红色',
                value: 2
            },
            {
                label: '黄色',
                value: 3
            },{
                label: '白色',
                value: 4
            },{
                label: '灰色',
                value: 5
            },
            {
                label: '米色',
                value: 6
            },{
                label: '棕色',
                value: 7
            },{
                label: '粉红',
                value: 8
            },
            {
                label: '香槟色',
                value: 9
            },{
                label: '橙色',
                value: 10
            },{
                label: '黑色',
                value: 11
            },
            {
                label: '金色',
                value: 12
            },{
                label: '银色',
                value: 13
            },{
                label: '绿色',
                value: 14
            },{
                label: '其他',
                value: 15
            }
            ], {
                defaultValue: [0],
                onConfirm: function (result) {
                    that.color = result[0].label;
                },
            });
        },
        guohu(){
            let that = this;
            this.$weui.picker([
            {
                label: '0次',
                value: 0,
            },{
                label: '1次',
                value: 1
            },{
                label: '2次',
                value: 2
            },{
                label: '3次',
                value: 3
            },{
                label: '4次',
                value: 4
            },{
                label: '5次',
                value: 5
            },{
                label: '6次',
                value: 6
            },{
                label: '7次',
                value: 1
            },{
                label: '8次',
                value: 7
            },{
                label: '9次',
                value: 8
            },{
                label: '10次',
                value: 9
            },{
                label: '10次以上',
                value: 10
            }
            ], {
                defaultValue: [0],
                onConfirm: function (result) {
                    that.nums = result[0].label;
                },
            });
        },
        weibao(){
            this.$router.push('/home/');
        },
        pengzhuang(){
            this.$router.push('/home/maintenance');
        },
        gujia(){
            this.$router.push('/home/evaluation');
        },
        shibie(){
            this.$router.push('/home/identify');
        },
        
        // 获取城市列表
        // async areaList(){
        //     const res  = await this.$axios.post('http://yingyanchaxun.com/api/car_dealer_index.php?s=/Home/User/areaList');
        //     console.log(res);
        // }
    },
    
}
</script>

<style lang="scss" scoped>
    .wrapper{
        width: 100vw;
        font-size: 14px;
        color: #333;
        padding-bottom: 55px;
        background-color: #f8f8f8;
        .banner{
            img{
                width: 100%;
            }
        }
        .content{
            position: relative;
            padding: 0 20px;
            margin-top: -44px;
            .wwcc{
                padding: 20px;
                .tab{
                    justify-content: space-between;
                    align-items: center;
                    .active{
                        font-size: 17px;
                        color: #716dff;
                        position: relative;
                    }
                    .active::after{
                        content: '';
                        position: absolute;
                        width: 20px;
                        height: 2px;
                        background-color: #716dff;
                        bottom: -8px;
                        left: 50%;
                        margin-left: -10px;
                    }
                }
                .cont{
                    margin-top: 40px;
                    .input{
                        display: flex;
                        background-color: #f8f8f8;
                        border-radius: 4px;
                        height: 56px;
                        padding: 0 12px;
                        align-items: center;
                        border: 1px solid #fff;
                        input{
                            font-size: 14px;
                            flex: 1;
                            height: 40px;
                            border: none;
                            outline: none;
                            background-color: transparent;
                        }
                        img{
                            width: 20px;
                            height: 20px;
                            margin-left: 40px;
                        }
                    }
                    .focus{
                        border-color: #716dff !important;
                    }
                    .btn{
                        line-height: 52px;
                        width: 100%;
                        text-align: center;
                        color: #fff;
                        background-color: #716dff;
                        border-radius: 8px;
                        margin-top: 20px;
                    }
                    .shili{
                        color: #716dff;
                        background-color: #f8f8f8;
                    }
                    .gujia-list{
                        .gujia-item{
                            margin-top: 8px;
                            line-height: 56px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding: 0 12px;
                            background-color: #f8f8f8;
                            border-radius: 4px;
                            div{
                                display: flex;
                                align-items: center;
                                p{
                                    color: #999;
                                }
                                input{
                                    text-align: right;
                                    border: none;
                                    outline: none;
                                    height: 40px;
                                    background-color: transparent;
                                    flex: 1;
                                    width: 30%;
                                }
                            }
                            div.vin{
                                img{
                                    width: 20px;
                                    height: 20px;
                                    margin-left: 20px;
                                }
                            }
                            div.xz{
                                
                                img{
                                    width: 10px;
                                    height: 17px;
                                    margin-left: 8px;
                                }
                            }
                            div.sr{ 
                                flex: 1;
                                p{
                                    color: #333;
                                    margin-left: 12px;
                                }
                            }
                        }
                    }
                }
                .tips{
                    margin-top: 30px;
                    justify-content: space-between;
                    div{
                        font-size: 14px;
                        display: flex;
                        align-items: center;
                    }
                }
            }
            .tehui{
                padding: 20px;
                margin-top: 20px;
                h1{
                    font-size: 17px;
                }
                .d-flex{
                    margin-top: 20px;
                    div{
                        margin-right: 50px;
                        text-align: center;
                        img{
                            width: 44px;
                            height: 44px;
                        }
                        p{
                            margin: 12px;
                            font-size:14px;
                        }
                    }
                }
            }
        }
    }
</style>