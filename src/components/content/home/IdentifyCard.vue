<template>
    <div class="card">
        <div class="head">
            <p>{{title}}</p>
            <div @click="open">
                <img v-show="!isOpen" src="~assets/img/home/xiajiantou.png" alt="">
                <img v-show="isOpen" src="~assets/img/home/shangjiantou.png" alt="">
            </div>
        </div>
        <div>
        </div>
        <div v-if="type=='1'" v-show="isOpen" class="list">
            <div class="item" v-for="(item, index) in list" :key="index">
                <p class="name">{{item.key}}</p>
                <p class="cont">{{item.value}}</p>
            </div>
        </div>
        <div v-if="type=='2'" v-show="isOpen" class="list">
            <div class="item" v-for="(item, index) in list" :key="index">
                <p class="name">{{item.key}}</p>
                <p v-if="item.value" class="cont bp"></p>
                <p v-if="!item.value" class="cont wu"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // 标题
        title: {
            type: String,
            required: true
        },
        // 是否展开
        isOpen: {
            type: Boolean,
            required: true
        },
        // 参数列表
        list: {
            type: Array,
            required: true
        },
        // 类型1：文字2：是否标配（true,false）
        type: {
            type: String,
            required: true
        }
    },
    methods: {
        open(){
            this.isOpen = !this.isOpen;
        }
    }
}
</script>

<style lang="scss" scoped>
    .card{
        background-color: #fff;
        padding: 0 16px;
        margin-top: 12px;
        border-radius: 4px;
        color: #333;
        .head{
            height: 56px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                font-size: 14px;
                font-weight: 900;
            }
            img{
                width: 17px;
                height: 10px;
            }
        }
        .list{
            .item{
                display: flex;
                height: 56px;
                border-top: 1PX solid #ddd;
                justify-content: space-between;
                font-size: 14px;
                line-height: 56px;
                align-items: center;
                p.name{
                    color: #666;
                }
                p.bp{
                    width: 12px;
                    height: 12px;
                    border-radius: 6px;
                    background-color: #716dff;
                }
                p.wu{
                    height: 4px;
                    width: 12px;
                    border-radius: 6px;
                    background-color: #ff6666;
                }
            }
        }
    }
</style>