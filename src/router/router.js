import Vue
  from 'vue'
import VueRouter
  from 'vue-router'

import {judgeUserAgent} from 'common/constUtils'
import constUrls
  from "@/common/constUrls";
Vue.use(VueRouter)

const Home = () => import('views/home/Home');
const HomeIndex = () => import('views/home/childComps/Index');
const MaintenanceCollision = () => import('views/home/childComps/MaintenanceCollision');
const VehicleConditionEvaluation = () => import('views/home/childComps/VehicleConditionEvaluation');
const CarCondition = () => import('views/home/childComps/CarCondition');
const VehicleIdentify = () => import('views/home/childComps/VehicleIdentify');
const Promotion = () => import('views/promotion/Promotion');
const Order = () => import('views/order/Order');
const Profile = () => import('views/profile/Profile');
const PromotionRegister = () => import('views/promotion/childComps/PromotionRegister');
const PromotionManagePage = () => import('views/promotion/childComps/PromotionManagePage');
const CashOutPage = () => import('views/promotion/childComps/CashOutPage');
const CashOutSuccessPage = () => import('views/promotion/childComps/CashOutSuccessPage');
const CashOutRecords = () => import('views/promotion/childComps/CashOutRecords');
const PromotionPost = () => import('views/promotion/childComps/PromotionPost');
const ProfitRecords = () => import('views/promotion/childComps/ProfitRecords');
const Login = () => import('views/login/Login');
const MyProfile = () => import('views/profile/childComps/MyProfile');
const ContactUs = () => import('views/profile/childComps/ContactUs');
const SuggestPage = () => import('views/profile/childComps/SuggestPage');
const SuggestSuccess = () => import('views/profile/childComps/SuggestSuccess');
const routes = [
  {
    path: '',
    redirect: '/login'
    //redirect: '/profile'
  },
  {
    path: '/',
    redirect: '/login'
    //redirect: '/profile'
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: ''
    },
    component: Login
  },
  {
    path:'/home',
    name: 'Home',
    meta: {
      title: '首页'
    },
    component: Home,
    children: [
      {
        path: '',
        name: 'HomeIndex',
        meta: {
          title: '首页'
        },
        component: HomeIndex
      },
      {
        path: 'maintenance',
        name: 'MaintenanceCollision',
        meta: {
          title: '维保碰撞'
        },
        component: MaintenanceCollision
      },
      {
        path: 'evaluation',
        name: 'VehicleConditionEvaluation',
        meta: {
          title: '车况估价'
        },
        component: VehicleConditionEvaluation
      },
      {
        path: 'carcondition',
        name: 'CarCondition',
        meta: {
          title: '车况估价'
        },
        component: CarCondition
      },
      {
        path: 'identify',
        name: 'VehicleIdentify',
        meta: {
          title: '车型识别'
        },
        component: VehicleIdentify
      },
    ]
  },
  {
    path: '/order',
    name: 'Order',
    meta: {
      title: '订单'
    },
    component: Order
  },
  {
    path: '/promotion',
    name: 'Promotion',
    meta: {
      title: '推广'
    },
    component: Promotion,
    children: [
      {
        path: 'register',
        name: 'PromotionRegister',
        meta: {
          title: '推广注册'
        },
        component: PromotionRegister
      },
      {
        path: 'manage',
        name: 'PromotionManagePage',
        meta: {
          title: '推广管理'
        },
        component: PromotionManagePage
      },
      {
        path: 'cashout',
        name: 'CashOutPage',
        meta: {
          title: '余额提现'
        },
        component: CashOutPage
      },
      {
        path: 'cashoutsuccess',
        name: 'CashOutSuccessPage',
        meta: {
          title: '提现成功'
        },
        component: CashOutSuccessPage
      },
      {
        path: 'cashoutrecords',
        name: 'CashOutRecords',
        meta: {
          title: '提现记录'
        },
        component: CashOutRecords
      },
      {
        path: 'promotionpost',
        name: 'PromotionPost',
        meta: {
          title: '推广海报'
        },
        component: PromotionPost
      },
      {
        path: 'profitrecords',
        name: 'ProfitRecords',
        meta: {
          title: '收益记录'
        },
        component: ProfitRecords
      }
    ]
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      title: '我的'
    },
    component: Profile,
  },
  {
    path: '/myprofile',
    name: 'MyProfile',
    meta: {
      title: '个人资料'
    },
    component: MyProfile
  },
  {
    path: '/contactus',
    name: 'ContactUs',
    meta: {
      title: '联系我们'
    },
    component: ContactUs
  },
  {
    path: '/suggestpage',
    name: 'SuggestPage',
    meta: {
      title: '意见反馈'
    },
    component: SuggestPage
  },
  {
    path: '/suggestsuccess',
    name: 'SuggestSuccess',
    meta: {
      title: '意见反馈'
    },
    component: SuggestSuccess
  }
]

const router = new VueRouter({
  //mode: 'history',
  routes
})

//判断登录状态
router.beforeEach((to, from, next) => {
  //TODO 判断登录状态 开发阶段关闭
  // let login = router.app.$options.store.state.login;
  // console.log(to.path)
  // //1.判断登录状态
  // if (to.path === '/login') {
  //   next();
  // } else {

  //   if (login) {
  //     //2.已登录，跳转
  //     console.log('已登录，跳转')
  //     next();
  //   } else {
  //     //3.未登录,跳转登录授权页面
  //     router.replace({
  //       path: '/login',
  //       query: {
  //         target: to.path.indexOf('/'+1)
  //       }
  //     })
  //   }
  // }
  // console.log(to);

  // document.title = to.meta.title;
  // TODO 判断是否微信浏览器(发布后放开)
  // let ua = judgeUserAgent();
  // if (!ua) {
  //   window.location = constUrls.NOT_MICRO_MESSAGE_URL;
  //   return;
  // } else {
  //   next()
  // }
  next()
})

router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  if (isChunkLoadFailed) {
    location.reload();
  }

});

export default router
