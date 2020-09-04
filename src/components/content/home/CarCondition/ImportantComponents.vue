<template>
    <Card>
        <div class="d-flex al-center jc-between car-head">
            <h1 class="title">{{title}} {{componentAnalyzeRepairRecords.length}}</h1>
        </div>
        <div class="card-cont">
            <div class="maintenance-list">
                <div class="maintenance-item" v-for="(item, index) in componentAnalyzeRepairRecords" :key="index">
                    <div class="m-top d-flex">
                        <p class="tt lb">概述</p>
                        <p class="cc">{{item.date}} | {{item.mileage}}公里 | {{item.type}}</p>
                    </div>
                    <div class="m-center d-flex">
                        <p class="tt hl">项目</p>
                        <b class="cc">{{item.content}}</b>
                    </div>
                    <div class="m-bottom d-flex">
                        <p class="tt hl">材料</p>
                        <p class="cc">{{item.materal}}</p>
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
        },
        componentAnalyzeRepairRecords: Array
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