<template>
  <div style="background-color:white">
   
   
    
    
<h1 @click="gohome"> 欢迎来到常孝天下，点击进入</h1>

 
  
  </div>
</template>
<script>

import Vue from 'vue'
 import global_ from '../global'//引用文件
 
    Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
export default {
  

  data() {
   
  },
  created(){
       window.setToken = b => {
      this.setToken(b);
      
    };
    console.log(this.GLOBAL.token);
   
     window.setSystemInfo = s => {
      this.setSystemInfo(s);
    };
    this.setcolor();
  },
  mounted() {
    
     



  },

  methods: {
   
    setSystemInfo(s){
            this.GLOBAL.systemName = s;
           
    },
      
 
    setcolor(){
        
    if(this.GLOBAL.systemName==='android'){
        
       window.android.setStatusBarColor("#ededed");
    }
    if(this.GLOBAL.systemName==='ios'){
     
      
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
       
       window.android.shareActive("我是帅逼");
    }
    if(this.GLOBAL.systemName==='ios'){
     
        
       window.webkit.messageHandlers.shareActive.postMessage("我是傻逼");
    }
      
    },
   
    gohome(){
      console.log(this.GLOBAL.token)
        this.$router.push('/home')
    }
    
  
  },

  
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
