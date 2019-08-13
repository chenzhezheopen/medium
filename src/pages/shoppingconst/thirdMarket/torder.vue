<template>
    <div>
     <van-nav-bar title="确认订单" left-arrow @click-left="onClickLeft" style="background-color:#ededed"/>
    <van-row class='ads'><van-col span='2'></van-col>
    <van-col span='18'><van-cell title="张长弓"  is-link arrow-direction="right" value="江苏省常州市" size="large" label="13688888888"  /></van-col>
    <van-col span='4'><van-icon name="arrow" class="m-header-icon" @click="godtads()"/></van-col></van-row>  

    </div>
</template>
<script>
import { AddressList } from 'vant';
import { Toast } from 'vant';
import Vue from 'vue'
 import global_ from '../../global'//引用文件
    Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
Vue.use(AddressList);
export default {
    data(){
        return{
              
        }
    },
    methods:{
      onClickLeft(){
       this.$router.push('/webproductc')
      },
        onClickRight() {
      this.$router.back("/detailaddress");
    },
      onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
    godtads(){
      this.$router.push('/taddress')
    }
    }
}
</script>
<style scoped>
.van-nav-bar .van-icon {
    color: black;
    font-size: 0.4rem
}
.ads{
    position: relative; 
}
.m-header-icon {
  position: absolute;
  color:aqua;
  top: 0.3rem;
 right: 0.2rem;
  font-size: 0.5rem;
}
</style>
