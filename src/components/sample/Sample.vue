<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="hello">
    <Header></Header>
    <div class="sampleBody">
      <span class="text">{{sampleBody}}</span>
      <button class="requestBtn" v-on:click="doFetchWithJsonp">{{fetchWithJsonp}}</button>
      <button class="postJsonBtn" v-on:click="doPostWithJson">{{postWithJson}}</button>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './module/Header.vue'
  import Footer from './module/Footer.vue'
  import network from '../../utils/network'


  export default {
    name: 'Sample',
    components: {
      Header,
      Footer
    },
    data () {
      return {
        sampleBody: 'I am Sample guy !',
        fetchWithJsonp: 'fetch data with jsonp',
        postWithJson: 'post data with json'
      }
    },

    methods: {
      doFetchWithJsonp(){
        network.fetchWithJsonp('https://suggest.taobao.com/sug?code=utf-8&q=%E5%8D%AB%E8%A1%A3&callback=cb')
          .then(data => {
            alert("I come from network : " + data.result[0]);
          });
      },

      doPostWithJson(){
        //json必须同域名下发起请求,否则无法生效
        alert("sorry! you must associate with your domain name!");
//        let url = 'http://www.life2smile.com:80/shopping/v1/update.action';
//        let params = {
//          version: "0.0.1",
//          deviceId: "865759035259782"
//        };
//        network.postWithJson(url, params).then(data => {
//          alert("I come from network : " + data);
//        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sampleBody {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    background-color: gainsboro;
  }

  .text {
    color: rebeccapurple;
    font-size: 32px;
  }

  .requestBtn, .postJsonBtn {
    width: 300px;
    height: 50px;
    margin-top: 20px;
  }
</style>
