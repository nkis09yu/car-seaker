<template>
  <div class="post-fix-container">
  <div class="promotion-post-page-container" @touchmove="touchControl">
    <div class="post-page-head-container">
      <img id="post-background" @load="drawCanvas" :src="backgroundPic" alt="">
      <div class="qrcode-container" :style="{height:calcSize(295.5)+'px'}">
        <div
            :style="{left:((windowWidth-40)/2 - calcSize(65)/2)+'px',width:calcSize(65)+'px',height: calcSize(65)+'px',top:calcSize(-33)+'px'}"
            class="post-user-icon-container">
          <img id="post-user-head-icon" @load="drawCanvas"
               :src="$store.state.userInfo.headimgurl"
               alt="头像">
          <!---->
        
        </div>
        <div :style="{top:calcSize(35)+'px'}" class="post-message-container">
          {{ userinfoDisplay }}
        </div>
        <div :style="{top:calcSize(81.5)+'px',height:calcSize( 160)+'px'}" class="post-qrcode-container">
          <div :style="{width:calcSize( 160)+'px',left:(windowWidth/2-20-calcSize(160)/2)+'px'}">
            <img id="post-qr-code-pic" @load="drawCanvas"
                 :style="{width:calcSize(140)+'px',height:calcSize(140)+'px',left:calcSize(10)+'px',top:calcSize(10)+'px'}"
                 src="~assets/img/promotion/post/qrcode.png"
                 alt="二维码">
          </div>
        </div>
        <div :style="{top:calcSize( 261.5)+'px'}" class="post-limit-container">
          {{ limitDate }}
        </div>
      </div>
    </div>
    
    <div class="post-button-container">
      <div @click="changePostImg">
        <img
            src="~assets/img/promotion/post/change_post.png"
            alt="换一张">
        <div>换一张</div>
      </div>
      <div @click="getPromotionPost">获取海报</div>
      <div @click="showGuide=true">分享海报</div>
    </div>
    <div @click.stop v-show="showGuide" class="post-push-guide">
      <div>
        <img
            src="~assets/img/promotion/post/push_guide.png"
            alt="引导">
      </div>
      <div @click="showGuide=false">我知道了</div>
    </div>
    <canvas id="canvas" width="375px" height="630px"
            style="display: none"></canvas>
  
  </div>

  </div>
</template>

<script>
import {wx} from 'weixin-js-sdk'
import {promotionPostUpload} from "@/network/Promotion";
import Axios
  from "axios";


export default {
  name: "PromotionPost",
  data() {
    return {
      backgroundList: [
        require('assets/img/promotion/post/post1.jpg'),
        require('assets/img/promotion/post/post2.jpg'),
        require('assets/img/promotion/post/post3.jpg')
      ],
      currentPicIndex: 0,
      wxName: '测试号',
      showGuide: false,
      baseWidth: 375,
      windowWidth: 375,
      wx: {},
      ctx: {},
      limitDate: '长按识别关注，有效期至：2020-10-20',
    }
  },
  methods: {
    touchControl(e){
      // console.log(e)
      // console.log(document.getElementsByClassName("promotion-post-page-container")[0].clientHeight)
    },
    changePostImg() {
      ++this.currentPicIndex === 3 ? this.currentPicIndex = 0 : null;
    },
    getPromotionPost() {
      //canvas生成图片并上传
      let baseImage = this.canvas.toDataURL("image/png");
      let image = this.dataURItoBlob(baseImage)
      // console.log(image)
      
      let param = new FormData()  // 创建form对象
      param.append('postPic', image)  // 通过append向form对象添加数据
      param.append('chunk', '0') // 添加form表单中其他数据
      // console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
      let config = {
        headers: {'Content-Type': 'multipart/form-data'}
      }
      Axios.post('http://localhost:9096/file/post', param, config)
          .then(res => {
            // console.log(res)
            //定义微信提示
            let toast = this.$weui.dialog({
              title: '获取提示',
              content: '获取成功，稍后请留意公众号消息',
              className: 'wx-toast-custom',
              buttons: [
                {
                  label: '我知道了',
                  type: 'primary',
                  onClick: () => {
                    toast.hide(() => {
                      this.$router.replace('/promotion/manage')
                    })
                  }
                }
              ]
            })
          })
          .catch(err => {
            console.log(err)
  
            //定义微信提示
            let toast = this.$weui.dialog({
              title: '获取失败',
              content: '获取失败，请稍后重试',
              className: 'wx-toast-custom',
              buttons: [
                {
                  label: '确定',
                  type: 'primary',
                  onClick: () => {
                    toast.hide(() => {
                      //this.$router.replace('/promotion/manage')
                    })
                  }
                }
              ]
            })
          })
      
      
      
      
    },
    dataURItoBlob(base64Data) {
      var byteString;
      if (base64Data.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(base64Data.split(',')[1]);
      else
        byteString = unescape(base64Data.split(',')[1]);
      var mimeString = base64Data.split(',')[0].split(':')[1].split(';')[0];
      var ia = new Uint8Array(byteString.length);
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ia], {type: mimeString});
    },
    calcSize(val) {
      return val * this.windowWidth / this.baseWidth;
    },
    initWx() {
      
      //wx.config({
      //  debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      //  appId: 'wx0fa060509027bf1d', // 必填，公众号的唯一标识
      //  timestamp: , // 必填，生成签名的时间戳
      //  nonceStr: '', // 必填，生成签名的随机串
      //  signature: '',// 必填，签名
      //  jsApiList: [] // 必填，需要使用的JS接口列表
      //});
      //this.wx=wx;
    },
    drawCanvas() {
      //todo 移除透明度
      this.ctx.clearRect(0,0,375,630)
      this.ctx.globalAlpha = 1
      //绘制背景色
      this.ctx.rect(0, 0, 375, 630)
      this.ctx.fillStyle = '#F8F8F8'
      this.ctx.fill()
      //绘制背景图
      this.ctx.drawImage(document.getElementById('post-background'), 0, 0, 375, 603)
      //绘制二维码背景图
      this.ctx.beginPath()
      this.ctx.fillStyle = '#FFFFFF'
      this.ctx.moveTo(20, 320)
      this.ctx.arcTo(20, 312, 28, 312, 8)
      this.ctx.lineTo(347, 312)
      this.ctx.arcTo(355, 312, 355, 320, 8)
      this.ctx.lineTo(355, 608)
      this.ctx.lineTo(20, 608)
      this.ctx.closePath()
      this.ctx.fill()
      //绘制头像
      this.ctx.save()
      this.ctx.beginPath()
      this.ctx.arc(375 / 2, 310, 33, 0, 2 * Math.PI)
      this.ctx.clip()
      this.ctx.drawImage(document.getElementById('post-user-head-icon'), 315 / 2, 280, 60, 60)
      
      this.ctx.restore()
      //绘制头像边框
      this.ctx.fillStyle = '#FFFFFF'
      this.ctx.strokeStyle = '#ffffff'
      this.ctx.lineWidth = 5
      this.ctx.arc(375 / 2, 310, 35, 0, 2 * Math.PI)
      
      this.ctx.stroke()
      //绘制姓名和文字
      this.ctx.font = 'small-caps normal 14px arial'
      this.ctx.textAlign = 'center'
      this.ctx.fillStyle = '#000000'
      this.ctx.fillText(this.userinfoDisplay, 186, 365)
      //绘制二维码边框
      this.ctx.beginPath()
      this.ctx.rect(108, 395, 160, 160)
      this.ctx.fillStyle = '#F8F8F8'
      this.ctx.fill()
      this.ctx.closePath()
      //绘制二维码
      this.ctx.drawImage(document.getElementById('post-qr-code-pic'), 118, 405, 140, 140)
      //绘制有效期文字
      this.ctx.font = 'small-caps bold 16px arial'
      this.ctx.textAlign = 'center'
      this.ctx.fillStyle = '#000000'
      this.ctx.fillText(this.limitDate, 185, 587)
      //this.ctx.fillText(this.limitDate, 185, 599)
    }
    
  },
  computed: {
    backgroundPic() {
      return this.backgroundList[this.currentPicIndex]
    },
    userinfoDisplay() {
      return '你好，我是' + (typeof (this.$store.state.userInfo.nickname) === 'undefined' ? '' : this.$store.state.userInfo.nickname) + ',向你推荐[365查车]'
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    this.initWx()
    this.canvas = document.getElementById('canvas');

    this.ctx = this.canvas.getContext('2d')
    //解决生成图片模糊，关闭抗锯齿
    this.ctx.mozImageSmoothingEnabled=false;
    this.ctx.webkitImageSmoothingEnabled=false;
    this.ctx.msImageSmoothingEnabled=false;
    this.ctx.imageSmoothingEnabled=false;

    //todo 图片模糊第二种解决方案，图片会变大
    // let devicePixelRatio = window.devicePixelRatio || 1;
    // let backingStoreRatio = this.ctx.webkitBackingStorePixelRatio ||
    //     this.ctx.mozBackingStorePixelRatio ||
    //     this.ctx.msBackingStorePixelRatio ||
    //     this.ctx.oBackingStorePixelRatio ||
    //     this.ctx.backingStorePixelRatio || 1;
    // let ratio = devicePixelRatio / backingStoreRatio;
    // this.canvas.width = this.canvas.width * ratio;
    // this.canvas.width = this.canvas.height* ratio;
    // this.ctx.scale(ratio, ratio);
    // this.ctx.translate(0.5, 0.5);

    document.getElementsByClassName("promotion-post-page-container")[0].scrollIntoView(true)

  }
}
</script>

<style scoped>
.post-fix-container{
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 200;
  overflow-y: scroll;
  overflow-x: hidden;
  background: red;
}

.promotion-post-page-container {
  width: 100vw;
  position: relative;
  background: #f8f8f8;
  z-index: 200;
}

.post-page-head-container {
  width: 100vw;
  position: relative;
  z-index: 20;
  
}

.post-page-head-container > img {
  width: 100%;
}

.promotion-post-page-container > div {
  display: block;
  /*width: 100%;*/
  /*height: auto;*/
  /*position: absolute;*/
  /*z-index: -1;*/
}

.qrcode-container {
  position: absolute;
  display: block;
  width: calc(100% - 40px);
  background: #fff;
  left: 20px;
  right: 20px;
  /*top: -295.5px;*/
  bottom: 0px;
  border-radius: 8px 8px 0px 0px;
  text-align: center;
  z-index: 20;
}

.post-user-icon-container {
  
  position: relative;
  background: #fff;
  border: 5px solid #fff;
  border-radius: 50%;
  overflow: hidden;
}

.post-user-icon-container > img {
  width: 100%;
  /*border-radius: 50%;*/
}

.post-message-container {
  position: absolute;
  width: 100%;
  font-size: 14px;
  color: #333;
  line-height: 14px;
  height: 14px;
}

.post-qrcode-container {
  width: 100%;
  background: #fff;
  position: absolute;
}

.post-qrcode-container > div {
  height: 100%;
  width: 100%;
  position: absolute;
  background: #f8f8f8;
}

.post-qrcode-container > div > img {
  position: absolute;
  background: red;
}

.post-limit-container {
  position: absolute;
  background: #ffffff;
  width: 100%;
  height: 14px;
  font-weight: bold;
  color: #333;
  line-height: 14px;
  
}

.post-button-container {
  height: 100px;
  width: 100%;
  padding-top: 30px;
  position: relative;
  /*position: absolute;*/
  background: #f8f8f8;
  z-index: 20;
  
}

.post-button-container > div {
  display: inline-block;
  position: absolute;
  z-index: 20;
}

.post-button-container > div:nth-child(1) {
  width: 24%;
  left: 20px;
  height: 40px;
  line-height: 40px;
  /*background: cornflowerblue;*/
  color: #333;
  font-size: 14px;
  
}

.post-button-container > div:nth-child(1) > img {
  width: 20px;
  position: relative;
  top: 4px;
  
}

.post-button-container > div:nth-child(1) > div {
  width: calc(100% - 20px);
  position: relative;
  height: 100%;
  line-height: 40px;
  display: inline-block;
  left: 8px;
  font-size: 14px;
  
}

.post-button-container > div:nth-child(2) {
  width: 27.37%;
  right: 38.4%;
  background: #ffa114;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
  border-radius: 4px;
  
}

.post-button-container > div:nth-child(3) {
  width: 27.37%;
  right: 20px;
  background: #716dff;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
  border-radius: 4px;
  
}

.post-push-guide {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.6);
}

.post-push-guide > div:nth-child(1) {
  width: 100%;
  /*background: red;*/
  text-align: right;
  
}

.post-push-guide > div:nth-child(1) > img {
  width: calc(100% - 40px);
  position: relative;
  right: 20px;
  top: 20px;
  
}

.post-push-guide > div:nth-child(2) {
  position: absolute;
  bottom: 120px;
  height: 52px;
  line-height: 48px;
  color: #ffffff;
  font-size: 14px;
  border: 2px solid #ffffff;
  width: 240px;
  border-radius: 8px;
  left: calc(50% - 120px);
  text-align: center;
}

</style>