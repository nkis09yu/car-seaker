import {request} from "./request";

export function getCode(mobile) {
  return request({
    url: '/poetry/random',
    params: {
      mobile: mobile
    }
  })
}

export function promotionRegister(mobile, vcode) {
  return request({
    url: '/poetry/random',
    params: {
      mobile: mobile,
      vcode: vcode
    }
  })
}

export function promotionPostUpload(file) {
  console.log(file)
  console.log(file.get('postPic'))


  return request({
    url: 'http://localhost:9096/file/post',
    method: 'POST',

    headers: {
      'Content-Type': 'multipart/form-data'
    },
    file
  })
}

