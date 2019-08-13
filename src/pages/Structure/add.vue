
<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
      </van-col>
      <van-col span="20" style="text-align:center;color:#00a2ff">{{this.$route.query.name}}</van-col>
      <van-col span="2"></van-col>
    </van-row>

    <van-row style="margin-top:1rem;padding-top:0.3rem">
      <van-col span="2"></van-col>
      <van-col span="20">
        <van-field
          readonly
          clickable
          label="职务"
          :value="value"
          placeholder="请选择职位"
          @click="showPicker = true"
          style="font-size:0.3rem"
        />

        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </van-popup>

        <van-field v-model="name" label="姓名" placeholder="请输入姓名" style="font-size:0.3rem" />
        <van-field v-model="tel" label="手机号" placeholder="请输入手机号" style="font-size:0.3rem" />
        <van-field v-model="bank" label="银行卡号" placeholder="请输入银行卡号" style="font-size:0.3rem" />
        <van-cell-group style="margin-top:0.1rem" :border="true">
          <van-field
            v-model="message"
            label="备注"
            type="textarea"
            placeholder="请输入备注"
            rows="6"
            autosize
            style="font-size:0.3rem"
          />
        </van-cell-group>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>
    
        <button class="btn-a" @click="onSave">保存</button>
     
        <button class="btn-b" @click="onDelete">取消</button>
    
    <van-dialog v-model="show1" message="保存成功！" show-Confirm-Button @confirm="onClear"></van-dialog>
    <van-dialog v-model="show2" message="确认删除？" show-Confirm-Button  show-cancel-button @confirm="onClear" ></van-dialog>
  </div>
</template>

<script>
import Vue from "vue";
import global_ from "../global"; //引用文件
Vue.prototype.GLOBAL = global_; //挂载到Vue实例上面
import { Toast } from "vant";
export default {
  name: "Addi",
  data() {
    return {
      message:'',
      value: "",
      show1: false,
      show2: false,
      name: "",
      tel: "",
      bank: "",
      showPicker: false,
      columns: [
        "总监",
        "部长",
        "副部长",
        "部长助理",
        "经理",
        "副经理",
        "主管",
        "班长",
        "专员",
        "会计",
        "出纳",
        "普通员工",
        "业务经理",
        "总经理",
        "区域经理",
        "督训"
      ]
    };
  },
  methods: {
    goback() {
      this.$router.back("/member");
    },
    top() {
      window.scrollTo(0, 0);
      let _this = this;
      let data = {
        token: this.GLOBAL.token,
        name: this.$route.query.name
      };
      console.log(data.name);
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    onSave() {
      this.show1 = true;
      let _this = this;
      let data = {
        token: this.GLOBAL.token,
        name: this.name,
        phone: this.tel,
        title: this.value,
        bank_num:this.bank,
        des:this.message,
        department_id: this.$route.query.id
      };
      console.log(data.department_id);

      this.$ajax
        .post("/cxt/oa/member/add", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {});

      console.log(this.name);
      console.log(this.tel);
      console.log(this.value);
      console.log(this.bank);
    },
    onDelete() {
      this.show2=true;
      
    },
    onClear() {
      this.value = "";
      this.name = "";
      this.tel = "";
      this.bank = "";
    }

  },
  created() {
    this.top();
  }
};
</script>

<style scoped>
.m-bg {
  background-color: white;
  overflow: hidden;
}

.m-header {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.4rem;
  background-color: #ededed;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
}

.m-header-icon {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.5rem;
  color:#00a2ff
}

.search {
  position: fixed;
  top: 1rem;
  z-index: 2;
  width: 100%;
}

.line {
  position: fixed;
  top: 1rem;
  z-index: 2;
  width: 100%;
  background-color: #ededed;
  height: 0.2rem;
}

.list {
  font-size: 0.35rem;
  text-align: center;
  width: 100%;
}

.btn-a {
  color: white;
  background-color: #00a2ff;
  border: 0.01rem solid #00a2ff;
  font-size: 0.35rem;
  width: 100%;
  height: 1.1rem;
  line-height: 1.1rem;
  position: fixed;
  bottom: 1.1rem
}

.btn-b {
  color: black;
  background-color: #ededed;
  border: 0.01rem solid #ededed;
  font-size: 0.35rem;
  width: 100%;
  height: 1.1rem;
  line-height: 1.1rem;
  position: fixed;
  bottom: 0
}
</style>

