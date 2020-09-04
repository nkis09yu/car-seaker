<template>
  <div class="promotion-manage" @touchmove.self.prevent>
    <!--顶部显示余额模块-->
    <div class="title-container">
      <PromotionTitle @toCashOutPage="toOtherPage('/promotion/cashout')"></PromotionTitle>
    </div>
    <!--获取推广展示-->
    <div class="push-container">
      <PromotionManagePush @emitToast="emitToast"></PromotionManagePush>
    </div>
    
    <!--其他信息选择-->
    <div class="promotion-display-container">
      <PromotionManageItemList @click.native="toOtherPage('/promotion/profitrecords')"
                               :image="require('assets/img/promotion/manage/profit_record.png')"
                               :text="'收益记录'"
                               :arrow="require('assets/img/common/arrow_right_gray.png')"/>
      <PromotionManageItemList @click.native="toOtherPage('/promotion/cashoutrecords')"
                               :image="require('assets/img/promotion/manage/cash_out_record.png')"
                               :text="'提现记录'"
                               :arrow="require('assets/img/common/arrow_right_gray.png')"/>
      <PromotionManageItemList @click.native="showMessage('推广规则')"
                               :image="require('assets/img/promotion/manage/promotion_rules.png')"
                               :text="'推广规则'"
                               :arrow="require('assets/img/common/arrow_right_gray.png')"/>
    </div>
    
    <!--显示信息的toast-->
    <Toast v-if="toastIndex===1" @toastClicked="toastClicked">
      <div @click.stop>
        <img style="width: 64vw;height: 64vw"
             :src="qrCodePath"
             alt="">
      </div>
      <div @click.stop style="color: #666;margin-top: 20px">
        长按二维码，可保存到手机
      </div>
    </Toast>
    <Toast v-if="toastIndex===2" @toastClicked="toastClicked">
      <div>推广海报还没写</div>
    </Toast>
    <Toast v-if="toastIndex===3" @toastClicked="toastClicked">
      <div @click.stop
           style="width:80%;margin-left:30px;text-align:left;word-break:break-all;line-height: 200%;color: #333;">
        {{ promotionUrl }}
      </div>
      <div @click.stop="copyPromotionLink"
           style="margin-top: 30px;margin-left: calc(50% - 80px);background: #716dff;width: 160px;height: 40px;line-height: 40px;color: white;font-size: 14px;border-radius: 4px;">
        复制链接
      </div>
    </Toast>
  </div>
</template>

<script>
import Toast
  from "@/components/common/toast/Toast";
import PromotionManageItemList from "@/components/content/promotion/PromotionManageItemList";
import PromotionManagePush from "@/components/content/promotion/PromotionManagePush";
import PromotionTitle from "@/components/content/promotion/PromotionTitle";

export default {
  name: "PromotionManagePage",
  components: {PromotionTitle, PromotionManagePush, PromotionManageItemList, Toast},
  data() {
    return {
      balance: 480.00,
      toastIndex: 999,
      qrCodePath: require('assets/img/test/qrcode.png'),
      promotionUrl: 'http://www.baidu.com/asdhjfa;sdjflasdfjas;df/asdfasdkjflasdf;'
    }
  },
  methods: {
    showMessage(val) {
      alert(val)
    },
    toOtherPage(val){
      this.$router.push(val)
    },
    //toCashOutPage() {
    //  this.$router.replace('')
    //},
    toastClicked() {
      this.toastIndex = 999
    },
    emitToast(val) {
      this.toastIndex = val
    },
    copyPromotionLink() {
      this.$copyText(this.promotionUrl)
          .then(res => {
            //提示复制成功
            console.log('复制成功')
            alert('复制成功')
          })
    }
  }
}
</script>

<style
    scoped>

.promotion-manage {
  background: #f8f8f8 url("~assets/img/promotion/manage/promotion_manage_background.png") no-repeat left top;
  background-size: 100%;
  width: 100vw;
  height: 100vh;
  text-align: center;
}

.title-container {
  position: absolute;
  top: 30px;
  left: 20px;
  height: 44px;
  width: calc(100% - 40px);
}

.push-container {
  position: absolute;
  width: calc(100% - 40px);
  left: 20px;
  background: white;
  border-radius: 4px;
  top: 104px;
}

.promotion-display-container {
  position: absolute;
  width: calc(100% - 40px);
  left: 20px;
  top: 232px;
  display: flex;
  height: 208px;
  justify-content: space-between;
  flex-direction: column;
}

</style>