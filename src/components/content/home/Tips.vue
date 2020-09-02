<template>
    <div class="c-tips">
        <div class="tips-title bold">“小查询 大用途”</div>
        <div class="c-list" v-for="(item, index) in tips" :key="index">
            <div>
                <img :src="item.img" alt="">
                <p>{{item.title}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tips: Array
    }
}
</script>

<style scoped lang="scss">
    .c-tips{
        overflow: hidden;
        margin-top: 30px;
        .tips-title{
            text-align: center;
            font-size: 17px;
            margin-bottom: 20px;
        }
        .c-list{
            overflow: hidden;
            img{
                width: 100%;
            }
            p{
                text-align: center;
                line-height: 1.5;
                margin: 20px 0 30px 0;
            }
        }
    }
</style>