import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    promotionRegistered: true,
    wxCode: '0',
    hasSubscribe: false,
    openId: '',
    userInfo: {},
    login: false,

    CbsPreciseReport: {},//车况估价报告

  },
  mutations: {
    setOpenId(state, val) {
      state.openId = val;
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    setHasSubscribe(state, val) {
      state.hasSubscribe = (val == 1);
    },
    setLogin(state, val) {
      state.login = (val == 1);
    },


    GET_CBS_PRECISE_REPORT(state, reportData){
      state.CbsPreciseReport = reportData;
    }
  },
  actions: {
    // 获取车况估价报告
    getCbsPreciseReport({commit}, reportid){
      Axios.post('/api/search_vehicle_index.php?s=/Home/Report/getCbsPreciseReport',{
          reportid: reportid
      })
      .then( res => {
          commit('GET_CBS_PRECISE_REPORT', res.data.data);
      })
      .catch( err => {
          console.log(err);
      })
    }
  },
  modules: {}
})
