<template>
  <div class="order-container" @touchmove.prevent>
    <div class="order-head-container">
      <TabControl @displayChanged="displayChanged" ref="tabControl"></TabControl>
    </div>
    <div class="order-body-data-container">
      <scroll :probe-type="3"
              :pull-up-load="true"
              ref="scroll"
              @reachBottom="loadMoreInfo"
              @scroll="scrollPositionChange">
        <OrderListItem @showSingleMessage="showSingleMessageMethod" v-for="item in displayOrders"
                       :order="item"></OrderListItem>
      </scroll>
    </div>
    <div v-if="showSingleMessage" class="single-message-container">
      <SingleLineMessageToast>{{ singleMessage }}</SingleLineMessageToast>
    </div>
  </div>
</template>

<script>
import TabControl from "@/components/content/order/TabControl";
import Scroll from "@/components/common/scroll/Scroll";
import OrderListItem from "@/components/content/order/OrderListItem";
import SingleLineMessageToast from "@/components/common/messageToast/SingleLineMessageToast";

export default {
  name: "Order",
  components: {SingleLineMessageToast, OrderListItem, TabControl, Scroll},
  data() {
    return {
      currentIndex: 0,
      orders: [
        {type: 1, status: 1, vin: 'ATNITM0362JS26981', time: 1590005117204, count: 23.00},
        {type: 2, status: 0, vin: 'ATNITM0362JS26652', time: 1593205117204, count: 45.00},
        {type: 3, status: 0, vin: 'ATNITM0362JS26812', time: 1591205117204, count: 52.00},
        {type: 0, status: 1, vin: 'ATNITM0362JS21232', time: 1593205117204, count: 18.00},
        {type: 1, status: 2, vin: 'ATNITM0362JS12837', time: 1593205117204, count: 27.00},
        {type: 3, status: 1, vin: 'ATNITM0362JS26123', time: 1593205117204, count: 9.9}
      ],
      showSingleMessage: false,
      singleMessage: '',
      timer: -1,
      preIndex:0
    }
  },
  methods: {
    loadMoreInfo() {
    
    },
    scrollPositionChange() {
    
    },
    displayChanged(val) {
      this.currentIndex = val;
      console.log(this.currentIndex)
    },
    showSingleMessageMethod(val) {
      this.singleMessage = val;
      this.showSingleMessage = true;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.showSingleMessage = false
      }, 1000)
    }
  },
  computed: {
    displayOrders() {
      
      return this.currentIndex === 0 ? this.orders : this.orders.filter(item => {
        return item.status === (this.currentIndex - 1);
      })
    }
  },
  activated() {
    this.currentIndex = 10;
    let fromProfile = this.$route.query.fromProfile;
    let index = (typeof fromProfile === 'undefined') ? this.preIndex : parseInt(fromProfile)
    this.$refs.tabControl.activeIndex = index
    // todo 防止窗口高度变化导致不能滚动的解决方案
    setTimeout(() => {
      this.currentIndex = index
    }, 50)
  },
  deactivated() {
    this.preIndex=this.currentIndex;
  },
  watch: {
    currentIndex() {
      //this.$refs.scroll.refreshHeight();
      this.$refs.scroll.backTop(0, 0, 0);
    }
  }
}
</script>

<style scoped>
.order-container {
  width: 100vw;
  height: 100vh;
  background: #f8f8f8;
}

.order-head-container {
  width: 100%;
  height: 11.733vw;
}

.order-body-data-container {
  width: calc(100% - 40px);
  height: calc(100vh - 31.733vw);
  position: relative;
  left: 20px;
  top: 5.333vw;
}

.single-message-container {
  position: fixed;
  width: 100%;
  text-align: center;
  top: 50vh;
  
  height: 54px;
}
</style>