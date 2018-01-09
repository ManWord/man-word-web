//这里抽象出共用网络访问模块,这里采用fetch
//但由于fetch存在浏览器兼容性问题,有些浏览器并未支持,故这里采用fetch-ie8
//详见 https://www.npmjs.com/package/fetch-ie8
//created by hanxiao2018

//function paramsFormat(obj) {
//  let arr = [];
//  let index = 0;
//  for (let item in obj) {
//    arr[index++] = [item, obj[item]];
//  }
//  return new URlSearchParams(arr).toString();
//}
//
//function commonFetch(url, options, method) {
//  let params = paramsFormat(options);
//  let initObj = {};
//
//  if (method === 'GET') {
//    url += '?' + params;
//    initObj = {
//      method: method,
//      credentials: 'include'
//    }
//  } else {
//    initObj = {
//      method: method,
//      credentials: 'include',
//      headers: new Headers({
//        'Accept': 'application/json',
//        'Content-Type': 'application/x-www-form-urlencoded'
//      }),
//      body: params
//    }
//  }
//
//  fetch(url, initObj).then((res) => {
//    return res.json()
//  }).then((res) => {
//    return res;
//  })
//}

let network = {
//  GET(url, options) {
//    return commonFetch(url, options, 'GET');
//  },
//
//  POST(url, options) {
//    return commonFetch(url, options, 'POST');
  }
//  request(options){
//    let url = options.url;
//    let data = options.data || {};
//    let method = options.method || 'POST';
//    let dataType = options.dataType || "json";
//
//
//    fetch(url).then(response => response.json())
//      .then(data => {
//
//      }).catch(e => {
//
//    });
//  },
//};

//export default network;
