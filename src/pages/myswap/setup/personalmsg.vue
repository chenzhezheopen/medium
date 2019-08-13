<template>
  <div class="s-bg">
    <van-row class="s-headeras">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas" @click="goback" />
      </van-col>
      <van-col span="20" style="text-align:center">个人信息</van-col>
      <van-col span="2"></van-col>
    </van-row>

    <van-cell-group style="margin-top:0.2rem">
      <van-cell title="我的头像" value="" size="large" is-link @click="goimg"/>
      <img src="../../../../static/img/myimg.png" class="s-img">
      <van-cell title="我的账号"  v-model="tel" size="large" />
      <!-- <van-cell title="我的二维码" value="" size="large" is-link @click="gocode"/> -->
      <!-- <img src="../../../../static/img/icon_ico.png" class="s-imgs"> -->
      <!--    <van-cell v-model="tel" size="large"  style="color:white; background-color:#00a2ff;margin-top:10%" :border="false" /> -->

    </van-cell-group>

  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
       tel:'',
    };
  },
   created(){
     
    this.getDataList()
  },
  methods: {
      getDataList(){
      let data = {
       
      };
      let _this = this;
          this.tc = {
          role:'',
          tel:'',
          img:'',
            
        
          };
         
      this.$ajax.get('/cxt/user/getInfo', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          // console.log(res.data.data);
          this.tc=res.data.data
          this.tel=res.data.data.tel
           this.r=res.data.data.role
        
           
        });
    },
    goback() {
      this.$router.back("/set");
    },
    goimg(){
      this.$router.push("/myimg");
    },
    gocode(){
        this.$router.push("/mycode");
    }
  }
};
</script>

<style scoped>
.s-bg {
  background-color: #ededed;
  height: 100%;
  width: 100%;
  position: relative;
}

.s-headeras {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.35rem;
  background-color: white;
}

.s-header-iconas {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.45rem;
}

.s-img{
    position: absolute;
    z-index: 2;
    width: 8.5%;
    right: 10%;
    top:6%
}

.s-imgs{
    position: absolute;
    z-index: 2;
    width: 6.5%;
    right: 10%;
    top:75%
}
</style>
