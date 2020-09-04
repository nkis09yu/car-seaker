<template>
    <div class="model-selector" @click="closeModel">
        <div class="brand">
            <div class="brand-list list">
                <div 
                    @click.stop="fetchSeries(brandItem.id, brandIndex)" 
                    :class="['brand-item','item',{'active': brandActive === brandIndex}]" 
                    v-for="(brandItem, brandIndex) in brand" 
                    :key="brandIndex">{{brandItem.brandName}}
                </div>
            </div>
        </div>
        <div v-show="showSeries" class="series">
            <div class="series-list list">
                <div 
                    @click.stop="fetchModels(seriesItem.id, seriesIndex)" 
                    :class="['series-item', 'item', {'active': seriesActive === seriesIndex}]" 
                    v-for="(seriesItem, seriesIndex) in series" 
                    :key="seriesIndex">{{seriesItem.series}}
                </div>
            </div>
        </div>
        <div v-show="showModel" class="model">
            <div class="model-list list">
                <div
                    @click.stop="chooseModel(modelItem)" 
                    class="model-item item" 
                    v-for="(modelItem, modelIndex) in model" 
                    :key="modelIndex">{{modelItem.model}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModelSelector',
    data(){
        return {
            brand: [],//品牌
            brandActive: null,
            series: [],//车系
            seriesActive: null,
            model: [],//车型
            showSeries: false,
            showModel: false,
        }
    },

    mounted(){
        this.fetchBrand();
        document.querySelector('body').style.overflow = 'hidden';
        this.$once('hook:beforeDestroy', () => {
            document.querySelector('body').style.overflow = 'auto';
        });
    },

    methods: {
        fetchBrand(){
            let loading = this.$weui.loading('加载中...');
            this.$axios.post('/api/search_vehicle_index.php?s=/Home/Report/getCbsBrand')
            .then( res => {
                this.brand = res.data.data;
                this.brandActive
                loading.hide();
            })
            .catch( err => {
                loading.hide();
            })
        },

        fetchSeries(seriesId, index){
            let loading = this.$weui.loading('加载中...');
            this.$axios.post('/api/search_vehicle_index.php?s=/Home/Report/getCbsSeries', this.qs.stringify({
                brand_id: seriesId
            }))
            .then( res => {
                this.series = res.data.data;
                this.brandActive = index;
                this.showSeries = true;
                this.showModel = false;
                loading.hide();
            })
            .catch( err => {
                loading.hide();
            })
        },
        fetchModels(modelId, index){
            let loading = this.$weui.loading('加载中...');
            this.$axios.post('/api/search_vehicle_index.php?s=/Home/Report/getCbsModels', this.qs.stringify({
                series_id: modelId
            }))
            .then( res => {
                this.model = res.data.data;
                this.seriesActive = index;
                this.showModel = true;
                loading.hide();
            })
            .catch( err => {
                loading.hide();
            })
        },

        chooseModel(item){
            this.$emit('chooseModel', item)
        },

        closeModel(){
            this.$emit('closeModel')
        }

    }
}
</script>

<style lang="scss" scoped>

    .model-selector{
        z-index: 999;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba($color: #000000, $alpha: .7);
        .list{
            .item{
                padding: 8px 10px;
                border-bottom: 1px solid #eee;
                text-align: center;
            }
        }
        .brand{
            width: 33.33%;
            background-color: #fff;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            overflow-y: auto;
            .active{
                background-color: #f8f8f8;
            }
        }
        .series{
            border-left: 1px solid #eee;
            position: absolute;
            background-color: #f8f8f8;
            width: 33.33%;
            left: 33.33%;
            top: 0;
            bottom: 0;
            overflow-y: auto;
            .active{
                background-color: #fff;
            }
        }
        .model{
            border-left: 1px solid #eee;
            position: absolute;
            background-color: #fff;
            width: 33.33%;
            left: 66.66%;
            top: 0;
            bottom: 0;
            overflow-y: auto;
        }
        
    }
</style>