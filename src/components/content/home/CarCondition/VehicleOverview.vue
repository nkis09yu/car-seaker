<template>
    <Card>
        <div class="d-flex al-center jc-between car-head">
            <h1 class="title">{{title}}</h1>
            <p>（点击可查看详情）</p>
        </div>
        <div class="card-cont">
            <div class="cc-list">
                <div @click="ckClick(1,index)" class="cc-item" v-for="(item, index) in list.slice(0,4)" :key="'c1'+index">
                    <div>
                        <img :src="item.img" alt="">
                        <img v-if="item.normal" class="yz" src="~assets/img/home/zhengchang.png" alt="">
                        <img v-if="!item.normal" class="yz" src="~assets/img/home/yichang.png" alt="">
                    </div>
                    <p class="hui">{{item.name}}</p>
                </div>
            </div>
            <div v-show="showD1" class="cc-detail">
                <div :class="pLeft" class="sanjiao">
                    <img class="sanjiao" src="~assets/img/home/sanjiao.png" alt="">
                </div>
            </div>
            <div class="cc-list">
                <div @click="ckClick(2,index)" class="cc-item" v-for="(item, index) in list.slice(4,8)" :key="'c2'+index">
                    <div>
                        <img :src="item.img" alt="">
                        <img v-if="item.normal" class="yz" src="~assets/img/home/zhengchang.png" alt="">
                        <img v-if="!item.normal" class="yz" src="~assets/img/home/yichang.png" alt="">
                    </div>
                    <p class="hui">{{item.name}}</p>
                </div>
            </div>
            <div v-show="showD2" class="cc-detail">
                <div :class="pLeft" class="sanjiao">
                    <img class="sanjiao" src="~assets/img/home/sanjiao.png" alt="">
                </div>
            </div>
            <div class="cc-list">
                <div @click="ckClick(3,index)" class="cc-item" v-for="(item, index) in list.slice(8,12)" :key="'c3'+index">
                    <div>
                        <img :src="item.img" alt="">
                        <img v-if="item.normal" class="yz" src="~assets/img/home/zhengchang.png" alt="">
                        <img v-if="!item.normal" class="yz" src="~assets/img/home/yichang.png" alt="">
                    </div>
                    <p class="hui">{{item.name}}</p>
                </div>
            </div>
            <div v-show="showD3" class="cc-detail">
                <div :class="pLeft" class="sanjiao">
                    <img class="sanjiao" src="~assets/img/home/sanjiao.png" alt="">
                </div>
            </div>
            <div class="cc-list">
                <div @click="ckClick(4,index)" class="cc-item" v-for="(item, index) in list.slice(12,15)" :key="'c3'+index">
                    <div>
                        <img :src="item.img" alt="">
                        <img v-if="item.normal" class="yz" src="~assets/img/home/zhengchang.png" alt="">
                        <img v-if="!item.normal" class="yz" src="~assets/img/home/yichang.png" alt="">
                    </div>
                    <p class="hui">{{item.name}}</p>
                </div>
            </div>
            <div v-show="showD4" class="cc-detail">
                <div :class="pLeft" class="sanjiao">
                    <img class="sanjiao" src="~assets/img/home/sanjiao.png" alt="">
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
        }
    },
    data(){
        return {
            list: [
                {   
                    name: '泡水排查',
                    normal: true,
                    img: require('assets/img/home/pspc-l.png'),
                },
                {   
                    name: '火烧排查',
                    normal: true,
                    img: require('assets/img/home/hspc-l.png'),
                },
                {   
                    name: '事故排查',
                    normal: true,
                    img: require('assets/img/home/sgpc-l.png'),
                },
                {   
                    name: '里程记录',
                    normal: true,
                    img: require('assets/img/home/lcjl-l.png'),
                },
                {   
                    name: '发动机',
                    normal: true,
                    img: require('assets/img/home/fdj-l.png'),
                },
                {   
                    name: '安全气囊',
                    normal: true,
                    img: require('assets/img/home/aqqn-l.png'),
                },
                {   
                    name: '变速箱',
                    normal: true,
                    img: require('assets/img/home/bsx-l.png'),
                },
                {   
                    name: '底盘',
                    normal: true,
                    img: require('assets/img/home/dp-l.png'),
                },
                {   
                    name: '保险杠',
                    normal: true,
                    img: require('assets/img/home/bxg-l.png'),
                },
                {   
                    name: '翼子板',
                    normal: true,
                    img: require('assets/img/home/yzb-l.png'),
                },
                {   
                    name: '车门',
                    normal: true,
                    img: require('assets/img/home/cm-l.png'),
                },
                {   
                    name: '机盖',
                    normal: true,
                    img: require('assets/img/home/jg-l.png'),
                },
                {   
                    name: '车顶',
                    normal: true,
                    img: require('assets/img/home/cd-l.png'),
                },
                {   
                    name: '空调',
                    normal: true,
                    img: require('assets/img/home/kt-l.png'),
                }
            ],
            showD1: false,
            showD2: false,
            showD3: false,
            showD4: false,
            pLeft: 'p-left0',
            index: null
        }
    },
    methods: {
        ckClick(type, i){
            let ti = type.toString()+i;
            [this.showD1, this.showD2, this.showD3] = [false, false, false];
            if(type === 1){
                ti=== this.index ? ( this.showD1 = false,this.index = null ) : (this.showD1 = true,this.index = ti);
            }else if(type === 2){
                ti === this.index ? ( this.showD2 = false,this.index = null ) : (this.showD2 = true,this.index = ti);
            }else if(type ===3){
                ti === this.index ? ( this.showD3 = false,this.index = null ) : (this.showD3 = true,this.index = ti);
            }else if(type ===4){
                ti === this.index ? ( this.showD4 = false,this.index = null ) : (this.showD4 = true,this.index = ti);
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
        }
        .normal{
            color: #716dff;
        }
        .hui{
            color: #999;
        }
        p{
            line-height: 1;
        }
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
            }
        }
    }
</style>