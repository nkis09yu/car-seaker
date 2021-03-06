import {request} from "./request";
import constParams from "@/common/constParams";

//获取url参数
export function getUrlParams() {
  let url = window.location.href;
  let paramsStr = url.substr(url.indexOf('?') + 1, (url.indexOf('#')-url.indexOf('?')-1));
  let params = paramsStr.split('&');
  let paramMap = {};
  params.forEach(val => {
    let kv = val.split('=');
    paramMap[kv[0]] = kv[1];
  })
  return paramMap;
}

//根据code获取openid
export function getOpenId(code) {
  return request({
    url: constParams.baseUrl+'?s=/Home/User/getopenid&code=' + code,
    method: 'get'
  })
}

//根据openid获取用户信息
export function getUserInfo(openid) {
  return request({
    url:constParams.baseUrl+'?s=/Home/User/login&openid=' +openid,
    method: 'get',
  })
}

//获取jssdk签名信息
export function getJsSdkSign(url){
  return request({
    url:'http://yingyanchaxun.com/api/search_vehicle_index.php',
    params:{
        s:'/Home/Jssdk/getSignPackage',
        url:url
    },
    method:'get'
  })
}


export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowPrice;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}
