<template>
    <div>
        <van-nav-bar title="我的法币" left-arrow @click-left="onClickLeft" class="mm-header"/>
        <div style="text-align:center;padding:0.6rem 0.8rem 0.3rem 0.6rem; background-color:#ededed">
            <div class="mm-p">
                <p>我的法币</p>
            </div>
            <div>
                <img src="../../../../static/img/myswap_k.png" class="mm-img">
                <p class="mm-pm">
                    <span id="mm-sp-a">{{tc.money}}</span>&nbsp;&nbsp;&nbsp;法币
                </p>
                <p class="mm-pd" @click="gomycoindetail">提现明细</p>
            </div>
            <van-button type="default" class="m-button-c" @click="gowallet">提现</van-button>
        </div>    
    </div>
</template>
<script>
import Vue from 'vue'
 import global_ from '../../global'//引用文件
    Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
export default {
    data() {
    return{
      tc:'',
        token:''
    }
},
 created(){
     
    this.getDataList()
  },
    methods:{
          getDataList(){
      let data = {
        token:this.GLOBAL.token
      };
      let _this = this;
          this.tc = {
          role:'',
          tel:'',
          img:'',
            
        
          };
         
      this.$ajax.get('/cxt/user/getBalance', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          // console.log(res.data.data);
          this.tc=res.data.data
        
        
           
        });
    },
       onClickLeft(){
           this.$router.back('/mytotal')
       },
       gomycoindetail(){
           this.$router.push('/mycoindetail')
       },
       gowallet(){
           this.$router.push('/wallet')
       }
    }
}
</script>
 <style scoped>
 .mm-header{
     background-color:#00a2ff;
 }
 .van-nav-bar__title {
 color:white;
 font-size: 0.35rem
 }

 .van-nav-bar .van-icon {
    color: white;
    font-size: 0.4rem
}

.mm-img{
    width: 15%;
    height: 15%
}

.mm-p{
    text-align: left;
    font-size: 0.3rem;
    margin-bottom: 0.2rem
}

.mm-pm{
    font-size: 0.3rem;
    color: #9a9a9a;
    margin: 0.2rem 0 0 15%
}
 .mm-pd{
    font-size: 0.3rem;
    color: #00a2ff;
    margin: 0.3rem 0 0.2rem 0
}

 .m-button-c {
  font-size: 0.3rem;
  margin: 0.3rem 0 0.15rem 0;
  color: white;
  background-color: #00a2ff;
  border: none;
  width: 35%;
  border-radius: 0.1rem
}

#mm-sp-a{
    font-size: 0.45rem;
    color:black;
}



</style>
 