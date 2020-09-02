<template>
    <div class="wrapper">
        <Head>
            <p class="name bold">{{model.name}}</p>
            <p class="vin">VIN：{{model.vin}}</p>
        </Head>
        <div class="content">
            <div class="basc-info">
                <div class="bi">
                    <div><p>{{model.zhidaojia}}</p><p>厂商指导价</p></div>
                    <div><p>{{model.biansuxiang}}</p><p>变速箱</p></div>
                    <div><p>{{model.pailiang}}</p><p>排量</p></div>
                </div>
                <div class="bi">
                    <div><p>{{model.ranliao}}</p><p>燃料形式</p></div>
                    <div><p>{{model.shangshi}}</p><p>上市日期</p></div>
                    <div><p>{{model.tingchan}}</p><p>是否停产</p></div>
                </div>
                
            </div>
            <IdentifyCard title="基本配置" type="1" :isOpen="false" :list="jibenpeizhi"/>
            <IdentifyCard title="车身参数" type="1" :isOpen="false" :list="jibenpeizhi"/>
            <IdentifyCard title="发动机参数" type="1" :isOpen="false" :list="jibenpeizhi"/>
            <IdentifyCard title="变速箱参数" type="1" :isOpen="false" :list="jibenpeizhi"/>
            <IdentifyCard title="底盘参数" type="1" :isOpen="false" :list="jibenpeizhi"/>
            <IdentifyCard title="车轮制动" type="1" :isOpen="false" :list="jibenpeizhi"/>
            <div class="tips"><p>以下配置信息注解</p><p class="bp"></p><p>标配</p><p class="wu"></p><p>无</p></div>
            <IdentifyCard title="安全配置" type="2" :isOpen="false" :list="anquanpeizhi"/>
            <IdentifyCard title="操控配置" type="2" :isOpen="false" :list="anquanpeizhi"/>
            <IdentifyCard title="内部配置" type="2" :isOpen="false" :list="anquanpeizhi"/>
            <IdentifyCard title="座椅配置" type="2" :isOpen="false" :list="anquanpeizhi"/>
            <IdentifyCard title="多媒体配置" type="2" :isOpen="false" :list="anquanpeizhi"/>
            <IdentifyCard title="灯光配置" type="2" :isOpen="false" :list="anquanpeizhi"/>
            <IdentifyCard title="玻璃/后视镜" type="2" :isOpen="false" :list="anquanpeizhi"/>
            <IdentifyCard title="空调/冰箱" type="2" :isOpen="false" :list="anquanpeizhi"/>
        </div>
    </div>
</template>

<script>
import Head from '@/components/content/home/Head'
import IdentifyCard from '@/components/content/home/IdentifyCard'
export default {
    components: {
        Head,
        IdentifyCard
    },
    data(){
        return {
            model: {
                name: '2017款标致307三厢1.6手动舒适版',
                vin: 'LSVFF26R3D2134566',
                zhidaojia: 123900,
                biansuxiang: '6档手自一体变速箱',
                pailiang: 1.598,
                ranliao: '汽油',
                shangshi: 201212,
                tingchan: '停产'
            },
            jibenpeizhi: [{
                key: '品牌',
                value: '上汽大众'
            },{
                key: '车辆类型',
                value: '轿车类'
            },{
                key: '车上指导价',
                value: '123900'
            },{
                key: '排量',
                value: '1.598'
            },{
                key: '变速箱',
                value: '6档手自一体变速箱'
            },{
                key: '驱动方式',
                value: '-'
            },{
                key: '油耗',
                value: '-'
            },{
                key: '发动机',
                value: '-'
            },{
                key: '长×宽×高(mm)',
                value: '3970*1682*1462'
            },{
                key: '年款',
                value: '2013'
            },{
                key: '上市日期',
                value: '201212'
            },{
                key: '是否停产',
                value: '停产'
            },{
                key: '环保标准',
                value: '国四'
            },{
                key: '产地属性',
                value: '合资'
            },{
                key: '整车质保',
                value: '三年或10万公里'
            }],
            anquanpeizhi: [{
                    key: '驾驶座椅安全气囊',
                    value: true
                },{
                    key: '副驾驶安全气囊',
                    value: true
                },{
                    key: '前排侧气囊',
                    value: false
                },{
                    key: '后排侧气囊',
                    value: false
                },{
                    key: '前排头部气囊（气帘）',
                    value: true
                },{
                    key: '后排侧气囊（气帘）',
                    value: true
                },{
                    key: '主动安全',
                    value: false
                }
            ]
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .wrapper{
        background-color: #f8f8f8;
        padding-bottom: 50px;
        color: #333;
        .head{
            p.name{
                font-size: 17px;
            }
            p.vin{
                font-size: 14px;
                opacity: .8;
                margin-top: 12px;
            }
            
        }
        .content{
            margin-top: -50px;
            padding: 0 16px;
            .basc-info{
                background-color: #fff;
                // height: 150px;
                border-radius: 4px;
                padding: 20px 16px;
                
                div.bi{
                    display: flex;
                    justify-content: space-between;
                    div{
                        flex: 1;
                        p{
                            text-align: center;
                            font-size: 14px;
                        }
                        p:first-child{
                            font-weight: 900;
                        }
                        p:last-child{
                            color: #999;
                            margin-top: 12px;
                        }
                    }
                }
                
            }
            .tips{
                display: flex;
                margin: 20px 0;
                font-size: 14px;
                align-items: center;
                p.bp{
                    width: 12px;
                    height: 12px;
                    border-radius: 6px;
                    background-color: #716dff;
                    margin: 0 8px 0 12px;
                }
                p.wu{
                    height: 4px;
                    width: 12px;
                    border-radius: 6px;
                    background-color: #ff6666;
                    margin: 0 8px 0 20px;
                }
            }
        }
        
    }

</style>