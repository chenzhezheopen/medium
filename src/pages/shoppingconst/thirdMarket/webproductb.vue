<template>
  <div style="position:relative">
    <van-nav-bar title="一月康旅卡" left-arrow @click-left="onClickLeft" style="background-color:#ededed"/>
    <img src="../../../../static/img/market-product7.png" />
    <div class="m-l">一月康旅卡</div>
    <div class="m-r">￥1000</div>
    <hr style="background: #ededed; border: none; height: 0.15rem; clear:both" />
    <div style="margin:0.8rem 0 0 0.6rem">
      <p class="m-pp">产品权益</p>
      <ul class="m-ul">
        <li>一次性获赠12万元产品</li>
        <li>可获得1万个常孝通版通</li>
        <li>可获24万积分用于三级市场消费</li>
        <li>一定额度一级版通批发配额资格</li>
      </ul>
    </div>
   <!--  <van-submit-bar :price="35000000" button-text="立即购买" @submit="onSubmit"  /> -->
    <div class="m-bottom">
      <div class="m-b-l"> ￥1000</div>
      <button class="m-b-r" @click="goubuy">立即购买</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.back("Market");
    },
    gobuy(){
      this.$router.push("webbuy");
    }
  }
};
</script>

<style scoped>
.van-nav-bar__title {
    color:black;
    font-size: 0.35rem;
    background-color: #ededed
}

.van-nav-bar .van-icon {
    color: black;
    font-size: 0.4rem
}
.m-l {
  float: left;
  margin: 0.2rem 0 0.2rem 0.4rem;
  font-size: 0.35rem;
}

.m-r {
  float: right;
  color: #00a2ff;
  margin-right: 0.4rem;
  font-size: 0.4rem;
  margin: 0.2rem 0.4rem 0.2rem 0;
  font-weight: 300
}

.m-pp {
  font-size: 0.35rem;
}

.m-ul {
  margin-top: 0.25rem;
  color: #9a9a9a;
  margin-left: 0.3rem;
  font-size: 0.3rem;
}

.m-bottom{
  height: 8%;
  position: fixed;
  bottom: 0;
  margin-bottom: 0;
  width: 100%;
}

.m-b-l{
  float: left;
  font-size: 0.45rem;
  color: #00a2ff;
  height: 80%;
  position: absolute;
  left: 0.4rem;
  bottom: 0;
  font-weight: 300
}

.m-b-r{
  float: right;
  background-color: #00a2ff;
  color: white;
  font-size: 0.35rem;
  height: 100%;
  width: 40%;
  margin-right: 0
}
</style>

