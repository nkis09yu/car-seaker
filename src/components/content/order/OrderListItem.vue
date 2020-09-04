<template>
  <div class="order-list-item-box">
    <div class="order-list-item-title">
      <div>{{ getType(order.type) }}-{{ getStatus(order.status) }}</div>
      <div @click="toOtherPage(order)">查看</div>
      <div @click="toOtherPage(order)"><img src="~assets/img/common/arrow_right_gray.png" alt=">"></div>
    </div>
    <div class="order-list-item-vin">
      <div>VIN码: {{ order.vin }}</div>
      <div @click="copyVin(order.vin)">复制VIN</div>
    </div>
    <div class="order-list-item-time">查询时间: {{ getFormatTime(order.time) }}</div>
    <div class="order-list-item-count">查询金额: {{ order.count.toFixed(2) }}元</div>
  </div>
</template>

<script>
import {formatDate} from "@/common/constUtils";
import SingleLineMessageToast from "@/components/common/messageToast/SingleLineMessageToast";

export default {
  name: "OrderListItem",
  components: {SingleLineMessageToast},
  props: {
    order: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    getType(val) {
      switch (val) {
        case 0:
          return '维保记录';
        case 1:
          return '车型识别';
        case 2:
          return '车况估价';
        case 3:
          return '维保碰撞';
        
      }
    },
    getStatus(val) {
      switch (val) {
        case 0:
          return '查询中';
        case 1:
          return '已完成';
        case 2:
          return '已退款';
      }
    },
    toOtherPage(order) {
      if (order.status === 0) {
        this.$emit('showSingleMessage', '订单查询中，请稍等')
      } else {
        let path = ''
        switch (order.type) {
          case 0:
            path = "/home/maintenance?reportid=1&weibao=1";
            break;
          case 1:
            path = "/home/maintenance?reportid=1&weibao=1";
            break;
          case 2:
            path = "/home/maintenance?reportid=1&weibao=1";
            break;
          case 3:
            path = "/home/maintenance?reportid=1";
            break;
        }
        this.$router.push('/home/maintenance?reportid=1&weibao=1')
      }
    },
    getFormatTime(val) {
      return formatDate(new Date(val), 'yyyy-MM-dd  hh:mm:ss')
    },
    copyVin(val) {
      this.$copyText(val)
          .then(res => {
            this.$emit('showSingleMessage', '复制成功')
          })
    }
  }
}
</script>

<style scoped>
.order-list-item-box {
  height: 43.5vw;
  width: 100%;
  padding: 0px 20px;
  position: relative;
  border-radius: 4px;
  background: #ffffff;
  margin-bottom: 20px;
}

.order-list-item-title {
  font-size: 17px;
  color: #333333;
  height: 15.2vw;
  line-height: 15.2vw;
  font-weight: bold;
  border-bottom: 1px solid #dddddd;
  position: relative;
}

.order-list-item-title > div {
  display: inline-block;
}

.order-list-item-title > div:nth-child(2) {
  position: absolute;
  right: 18px;
  text-align: right;
  color: #333333;
  font-weight: normal;
}

.order-list-item-title > div:nth-child(3) {
  position: absolute;
  right: 0;
  width: 10px;
  vertical-align: middle;
}

.order-list-item-title > div:nth-child(3) > img {
  width: 10px;
  vertical-align: -2px;
}

.order-list-item-vin {
  font-size: 14px;
  height: 14px;
  line-height: 14px;
  position: relative;
  top: 20px;
  color: #666666;
}

.order-list-item-vin > div {
  display: inline-block;
}

.order-list-item-vin > div:nth-child(2) {
  position: absolute;
  right: 0;
  font-size: 14px;
  color: #333333;
  
}

.order-list-item-time {
  position: relative;
  top: 32px;
  font-size: 14px;
  height: 14px;
  line-height: 14px;
  color: #666666;
}

.order-list-item-count {
  position: relative;
  top: 44px;
  font-size: 14px;
  height: 14px;
  line-height: 14px;
  color: #666666;
}
</style>