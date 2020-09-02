<template>
    <div class="head">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .head{
        overflow: hidden;
        background-image: linear-gradient(#716dff, #4c47ff);
        padding: 30px 0 60px;
        p{
            text-align: center;
            color: #fff;
        }
    }
</style>