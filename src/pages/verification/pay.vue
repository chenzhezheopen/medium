<template>
  <div>
    <van-row class="s-headeras">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas"  /><!-- 需要做跳转 -->
      </van-col>
      <van-col span="20" style="text-align:center">输入支付密码</van-col>
      <van-col span="2">
          <van-icon name="cross" class="s-header-icon"  />  <!-- 需要做跳转 -->
      </van-col>
    </van-row>
    <div style="text-align:center">
      <p class="s-p">
        请输入支付密码
      </p>
      <!-- 密码输入框 -->
      <van-password-input :value="value"  @focus="showKeyboard = true" />

      <!-- 数字键盘 -->
      <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
      />

      <p class="ss-p">
          忘记密码？找回并完成支付
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      idnum: "",
      telnum: "",
      code: "",
      value: "",
      showKeyboard: true
    };
  },
  methods: {
    goback() {
      this.$router.back("/set");
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    }
  }
};
</script>

<style scoped>
.s-headeras {
  height: 0.9rem;
  line-height: 0.9rem;
  color: rgb(7, 7, 7);
  font-size: 0.35rem;
  background-color: #ededed;
}

.s-header-iconas {
  position: absolute;
  top: 0.25rem;
  left: 0.2rem;
  font-size: 0.45rem;
}

.s-header-icon {
  position: absolute;
  top: 0.25rem;
  right: 0.2rem;
  font-size: 0.45rem;
}

.s-p {
  color: #9a9a9a;
  font-size: 0.4rem;
  margin: 0.7rem 0 1rem 0;
}

.ss-p {
  color: #00a2ff;
  font-size: 0.3rem;
  margin: 0.3rem 0 0 0.8rem;
  text-align: left
}

ul li{
  list-style: none;
}
</style>
