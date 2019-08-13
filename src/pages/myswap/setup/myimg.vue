<template>
  <div>
    <van-row class="s-headeras">
      <van-col span="4">
        <van-icon name="arrow-left" class="s-header-iconas" @click="goback" />
      </van-col>
      <van-col span="17">头像</van-col>
      <van-col span="3" ><p style="font-size:0.7rem" @click="change">···</p></van-col>
    </van-row>

    <div class="s-bg">
      <img src="../../../../static/img/myimg.png" class="s-img">
    </div>

    <van-popup
  v-model="show"
  position="bottom"
  :style="{ height: '14.5%' }"
>
  <van-cell-group>
      <van-cell size="small" title="从手机相册选择"/>
      <van-cell size="small" title="保存到手机"/>
  </van-cell-group>
</van-popup>

  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      show:false
    };
  },
  methods: {
    goback() {
      this.$router.back("/personalmsg");
    },
    change(){
      this.show=true
    }
  }
};
</script>

<style scoped>
.s-bg {
  background-color: #ededed;
  width: 100%;
  margin-top: 1.2rem
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
    width: 70%;
    padding: 0.5rem 15%
}


</style>
