<template>
  <div class="s-bg">
    <van-row class="s-headeras">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas" @click="goback" />
      </van-col>
      <van-col span="20" style="text-align:center">修改手机号</van-col>
      <van-col span="2"></van-col>
    </van-row>

    <van-cell-group>
      <van-field v-model="oldnum" type="tel" label="原手机号" placeholder="请输入原手机号码" />

      <van-field v-model="oldcode" type="number" label="验证码" placeholder="输入原手机验证码">
        <van-button slot="button" size="small" type="primary" class="s-btn">发送验证码</van-button>
      </van-field>
    </van-cell-group>

    <van-cell-group style="margin-top:0.2rem">
      <van-field v-model="newnum" type="tel" label="新手机号" placeholder="请输入新手机号码" />

      <van-field v-model="newcode" type="number" label="验证码" placeholder="输入新手机验证码">
        <van-button slot="button" size="small" type="primary" class="s-btn">发送验证码</van-button>
      </van-field>
    </van-cell-group>

    <button class="s-btns">保存</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      oldnum: "",
      newnum: "",
      oldcode: "",
      newcode: "",
    };
  },
  methods: {
    goback() {
      this.$router.back("/set");
    },
    
  }
};
</script>

<style scoped>
.s-bg {
  background-color: #ededed;
  height: 100%;
  width: 100%;
}

.s-headeras {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.35rem;
  background-color: #ededed;
}

.s-header-iconas {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.45rem;
}

.s-btn {
  color: #00a2ff;
  background-color: white;
  border: 0.01rem solid #00a2ff;
  border-radius: 0.1rem;
}

.s-btns{
    background-color: #00a2ff;
    color: white;
    font-size: 0.35rem;
    width: 80%;
    margin: 1.2rem 10%;
    padding:0.2rem 0;
    border-radius: 0.1rem
}
</style>
