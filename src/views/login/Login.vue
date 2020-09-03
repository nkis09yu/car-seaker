<template>
  <div id="login-page" @touchmove.prevent>
  </div>
</template>

<script>
import constParams from "@/common/constParams";
import {getUrlParams, getUserInfo, getOpenId} from "@/network/common";

export default {
  name: "Login",
  data() {
    return {
      targetPage: '',
      userInfo: {}
    }
  },
  methods: {

    judgeLogin() {

      let urlParams = getUrlParams();
      let state = urlParams.state;
      if (typeof state == 'undefined'||state=="undefined"||state.indexOf("undefined")!=-1 || state == 'login') {
        state = 'home';
      }

      this.targetPage = state

      //未登录
      if (!this.$store.state.login) {
        console.log('not login')
        if (urlParams.code === '' || urlParams.code === undefined) {
          let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + constParams.appId + '&redirect_uri=' + encodeURIComponent(constParams.redirectUrl) + '&response_type=code&scope=snsapi_base&state=' + state + '#wechat_redirect';
          console.log(url)
          window.location.href = url;
        } else {
          getOpenId(urlParams.code)
              .then(json => {
                let openid = json.data.openid;
                let hasSubscribe = json.data.has_subscribe
                console.log(json.data.openid, 'openid')
                console.log(json.data.has_subscribe, 'sub')
                this.$store.commit('setOpenId', openid)
                this.$store.commit('setHasSubscribe', hasSubscribe)
                //TODO 根据关注状态判断是否跳转关注页面

                getUserInfo(openid)
                    .then(json => {
                      let url=window.location.href;
                      this.$store.commit('setUserInfo', json.data);
                      this.$store.commit('setLogin', 1);
                      //TODO 重写url 利用state跳转页面 重写导致wxjs签名失败？
                      //history.replaceState({},'',(url.substr(0,url.indexOf('?'))+'#'+urlParams.state))
                      this.$router.push('/'+this.targetPage)
                    })
              })
        }
      } else {
        console.log('login ok')
        this.$router.replace('/'+this.targetPage)
      }
      
      // this.$router.replace("/home")
    }
    
  },
  created() {
    this.judgeLogin();
  }
}
</script>

<style scoped>
#login-page {
  position: relative;
  height: 120vh;
  width: 100vw;
  background: #ffffff;
  z-index: 99;
}
</style>