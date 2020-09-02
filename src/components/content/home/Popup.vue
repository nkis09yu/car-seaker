<template>
    <div>
        <div @click="closePopup" class="mask"></div>
        <div class="popup">
            <div class="popup-head">
                <img @click="closePopup" src="~assets/img/home/close.png" alt="">
                <b>{{title}}</b>
            </div>
            <div class="popup-cont">
                <slot></slot>
            </div>
            <div @click="closePopup" class="popup-btn">确定</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    },
    mounted(){
        document.querySelector('body').style.overflow = 'hidden';
        this.$once('hook:beforeDestroy', () => {
            document.querySelector('body').style.overflow = null;
        })
    },
    methods: {
        closePopup(){
            this.$emit('closePopup')
        }
    }
}
</script>

<style lang="scss" scoped>
    .popup{
        z-index: 99;
        position: fixed;
        top: 50%;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        padding: 20px 16px 30px;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        .popup-head{
            display: flex;
            align-items: center;
            position: relative;
            img{
                width: 16px;
                height: 16px;
                position: absolute;
            }
            b{
                font-size: 16px;
                flex: 1;
                text-align: center;
            }
        }
        .popup-cont{
            overflow-y: auto;
            height: calc(100% - 100px);
        }
        .popup-btn{
            position: absolute;
            bottom: 30px;
            width: 50%;
            height: 40px;
            border-radius: 4px;
            background-color: #716dff;
            color: #fff;
            text-align: center;
            line-height: 40px;
            left: 25%;
        }
    }
    .mask{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #000;
        opacity: .6;
        z-index: 88;
    }
</style>