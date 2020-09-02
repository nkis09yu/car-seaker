<template>
    <Card>
        <div class="d-flex al-center jc-between car-head">
            <h1 class="title">{{title}} {{maintenanceList.length}}</h1>
        </div>
        <div class="card-cont">
            <div class="maintenance-list">
                <div class="maintenance-item" v-for="(item, index) in maintenanceList" :key="index">
                    <div class="m-top d-flex">
                        <p class="tt lb">时间</p>
                        <p class="cc">{{item.weibao}}</p>
                    </div>
                    <div class="m-center d-flex">
                        <p class="tt hl">项目</p>
                        <b class="cc">{{item.xiangmu}}</b>
                    </div>
                    <div class="m-bottom d-flex">
                        <p class="tt hl">材料</p>
                        <p class="cc">{{item.cailiao}}</p>
                    </div>
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
            maintenanceList: [
                {
                    weibao: '2020/02/10 | 400公里',
                    xiangmu: '索赔 免费保养；首保；',
                    cailiao: '机油滤清器维修包（机油格）：1；发动机机油（1升-DEXOS 1，）：1；发动机机油（4升-DEXOS）；'
                },
                {
                    weibao: '2020/02/10 | 400公里',
                    xiangmu: '索赔 免费保养；首保；',
                    cailiao: '机油滤清器维修包（机油格）：1；发动机机油（1升-DEXOS 1，）：1；发动机机油（4升-DEXOS）；'
                },
                {
                    weibao: '2020/02/10 | 400公里',
                    xiangmu: '索赔 免费保养；首保；',
                    cailiao: '机油滤清器维修包（机油格）：1；发动机机油（1升-DEXOS 1，）：1；发动机机油（4升-DEXOS）；'
                },
                {
                    weibao: '2020/02/10 | 400公里',
                    xiangmu: '索赔 免费保养；首保；',
                    cailiao: '机油滤清器维修包（机油格）：1；发动机机油（1升-DEXOS 1，）：1；发动机机油（4升-DEXOS）；'
                },
                {
                    weibao: '2020/02/10 | 400公里',
                    xiangmu: '索赔 免费保养；首保；',
                    cailiao: '机油滤清器维修包（机油格）：1；发动机机油（1升-DEXOS 1，）：1；发动机机油（4升-DEXOS）；'
                }
            ]
        }
    },
    methods: {
    }
}
</script>

<style scoped lang="scss">
    .card{
        div.card-cont{
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
        }
    }
</style>