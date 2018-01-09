//这里抽象出共用网络访问模块,这里采用fetch
//但由于fetch存在浏览器兼容性问题,有些浏览器并未支持,故这里采用fetch-ie8
//详见 https://www.npmjs.com/package/fetch-ie8
//https://github.com/camsong/fetch-jsonp
//created by hanxiao2018

let fetchJsonp = require('fetch-jsonp')

let network = {
  //  post json data and receive json data
  postWithJson(url, params){
    return fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(response => {
      return response.json();
    }).catch(exception => {
      console.log('postWithJson error: ', exception)
    })
  },


  //JSONP only supports GET method
  fetchWithJsonp(url){
    return fetchJsonp(url, {
      timeout: 5000,
    }).then(response => {
      return response.json();
    }).catch(exception => {
      console.log('fetchWithJsonp error: ', exception)
    })
  },
};

export default network
