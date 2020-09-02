<template>
    <Card>
        <div class="car-head">
            <h1 class="title">{{title}}</h1>
        </div>
        <div class="card-cont">
            <p>1 本鉴定评估结果，基于用户所填写的车辆基本信息评估生成；</p>
            <p>2 本鉴定评估结果中的价格趋势，给予车辆正常行驶，且无重大事故的情况下进行预估；</p>
            <p>3 此报告基于2004条成交记录得出；</p>
            <p>4 该评估报告仅供参考；</p>
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
    }
}
</script>

<style scoped lang="scss">
    .card{
        div.card-cont{
            margin-top: 15px;
            p{
                line-height: 2;
                color: #999;
                font-size: 14px;
            }
        }
    }
</style>