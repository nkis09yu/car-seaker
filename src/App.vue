<template>
  <div id="app">
    <keep-alive exclude="Promotion,SuggestPage">
      <router-view  id="main-page-routerview"/>
    </keep-alive>
    <div class="main-tab-bar">
      <MainTabBar/>
    </div>
  </div>
</template>
<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";

export default {
  components: {MainTabBar},
  data() {
    return {
    }
  },
  methods: {
  
  },
  mounted() {
  },
  computed:{
    //showMainTabbar(){
    //  return this.$route.fullPath.indexOf('/promotion/promotionpost')===-1
    //      && this.$route.fullPath.indexOf('/login')===-1;
    //},

  },
  created() {
  
  }
}
</script>

<style>
@import "assets/css/base.css";
@import "assets/css/custom_weui.css";

#app {
  height: 100vh;
  background: #f8f8f8;
}

.main-tab-bar {
  position: fixed;
  z-index: 9;
  height: 55px;
  width: 100%;
  bottom:0;
}

#main-page-routerview {
  height: calc(100% - 55px);
}
</style>
