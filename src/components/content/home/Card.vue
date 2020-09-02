<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
    .card{
        background-color: #fff;
        border-radius: 4px;
        padding: 20px 16px; 
        margin-top: 20px;
        div.car-head{
            margin-bottom: 20px;
            h1.title{
                font-size: 17px;
                color: #333;
                margin: 0;
                line-height: 1;
            }
        }
    }
</style>