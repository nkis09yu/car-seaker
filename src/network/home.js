import {request} from "./request";

export function getHomeMultiData(type,page){
  return request({
    url:'/home/multidata',
  })
}
export function getHomeGoods(params){
  return request({
    url:'/home/data',params
  })
}

export function getMaintenanceReport(){
  return request({
    url: '/api/search_vehicle_index.php?s=/Home/Report/getMaintenanceReport',
    method: 'post',
    params: {
      reportid: 1
    }
  })
}
