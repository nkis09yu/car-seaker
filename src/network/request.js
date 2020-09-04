import Axios
  from "axios";

export function request(config) {

  //1.创建Axios实例
  let instance = Axios.create({
    //baseUrl有跨域问题，暂不设置
    // baseURL: 'http://152.136.185.210:8000/api/z8',
    // baseURL: 'http://yingyanchaxun.com/api/search_vehicle_index.php',
    timeout: 5000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'withCredentials': true
    }
  });

  //2.配置拦截器
  instance.interceptors.request.use(config => {

    return config;
  }, err => {
    return err;
  })

  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    return err;
  })

  //3.发送请求并返回
  return instance(config);
}


