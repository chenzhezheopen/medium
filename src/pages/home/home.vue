<template>
  <div style="background-color:white">
    <!-- <van-row class="ss-header">
<van-col span="2">
</van-col>
<van-col span="20" style="text-align:center">首页</van-col>
<van-col span="2"></van-col>
    </van-row>-->
    <div class="swiper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <h2 class="header" style="text-align:center">
      深圳文化产权交易所
      文化产业板挂牌公告
    </h2>
    <div style="height:2.6rem;">
      <img src="../../../static/img/lba.png" />
    </div>
    <van-row style="margin-top:0.3rem">
      <van-col span="2"></van-col>
      <van-col span="20">
        <p
          class="p"
        >常州孝行天下文化传播有限公司提交的“文化产业板”挂牌申请材料齐备，符合本所“文化产业板”挂牌要求。现准予其在“文化产业板”挂牌,挂牌简称为孝行天下，挂牌代码为900393。</p>

        <p class="p">特此公告。</p>
       
      </van-col>
      <van-col span="2"></van-col>
    </van-row>

  <van-tabbar v-model="active">
     
      <van-tabbar-item v-for="(item,index) in barList" :key="index" replace :to="item.key" :icon="item.img">{{item.name}}</van-tabbar-item>
    </van-tabbar>  
     <div class="testp">能进ios么？</div> 
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import Vue from 'vue'
 import global_ from '../global'//引用文件
 
    Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
export default {
  

  data() {
    return {
      active: 0,
      images: [
        "../../../static/img/ba.png",
        "../../../static/img/bb.png",
        "../../../static/img/bc.png",
        "../../../static/img/bd.png"
      ],
      barList:''
    };
  },
  created(){
      this.getBar()
  },
  mounted() {
    
 
  },

  methods: {
   
    /* setSystemInfo(s){
            this.GLOBAL.systemName = s;
            console.log(this.GLOBAL.systemName)
    },
      
 
    setcolor(){
          console.log(this.GLOBAL.systemName)
    if(this.GLOBAL.systemName==='android'){
        console.log('android')
       window.android.setStatusBarColor("#ededed");
    }
    if(this.GLOBAL.systemName==='ios'){
     
        console.log('ios')
       window.webkit.messageHandlers.setStatusBarColor.postMessage("#ededed");
    }
    },

    setToken(b) {
      this.GLOBAL.token = b;
      console.log( this.GLOBAL.token)
      
    
    },
   
   
    sweep() {
             console.log(this.GLOBAL.systemName)
    if(this.GLOBAL.systemName==='android'){
        console.log('android')
       window.android.shareActive("我是帅逼");
    }
    if(this.GLOBAL.systemName==='ios'){
     
        console.log('ios')
       window.webkit.messageHandlers.shareActive.postMessage("我是傻逼");
    }
      
    }, */
     
   
    getBar(){
      let _this = this;
      let data = {
       token:this.GLOBAL.token
      };
      console.log(JSON.stringify(data))
      
      this.barlist=[{

      }]

      this.$ajax.get('/cxt/base/rootMenus', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
             this.barList=res.data.data
            let obj=$('.testp')
                obj.text(JSON.stringify(res.data))
             console.log( JSON.stringify(res.data))
        });
          
     
    },
    
  
  },
  components: {
    swiper,
    swiperSlide
  }
  
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 4rem;
}
.van-swipe {
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  color: #fff;
  background: #fff;
}

.m-h {
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  background: white;
}

.m-img {
  margin: 0.2rem 0;
  overflow: hidden;
}

.p {
  text-indent: 2em;
  font-size: 0.3rem;
}
.ss-header {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.35rem;
  background-color: #ededed;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

.ss-header-icon {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.45rem;
}

.header {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.35rem;
  background-color: #ededed;
}
</style>
