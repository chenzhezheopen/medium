<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
      </van-col>
      <van-col span="1"></van-col>
      <van-col span="21">{{this.$route.query.coname}}</van-col>
    </van-row>

    <div class="m-top">
      <van-row style="text-align:center">
        <van-col span="8"></van-col>
        <van-col span="8">{{memberdetail.departmentName}}</van-col>
        <van-col span="8"></van-col>
      </van-row>
    </div>
    <div class="top">
      <van-row style="text-align:center">
        <van-col span="8"></van-col>
        <van-col span="8">{{memberdetail.name}}</van-col>
        <van-col span="8"></van-col>
      </van-row>
    </div>
    
    <van-row style="margin-top:0.2rem">
      <van-col span="1"></van-col>
      <van-col span="22" style="color:#9a9a9a;font-size:0.35rem">职务</van-col>
      <van-col span="1"></van-col>
    </van-row>
    <van-row style="margin-top:0.1rem">
      <van-col span="1"></van-col>
      <van-col span="22" style="color:black;font-size:0.38rem">{{memberdetail.title}}</van-col>
      <van-col span="1"></van-col>
    </van-row>
    <van-row style="margin-top:0.1rem">
      <van-col span="1"></van-col>
      <van-col span="22"><hr></van-col>
      <van-col span="1"></van-col>
    </van-row>

    <van-row style="margin-top:0.2rem">
      <van-col span="1"></van-col>
      <van-col span="22" style="color:#9a9a9a;font-size:0.35rem">姓名</van-col>
      <van-col span="1"></van-col>
    </van-row>
    <van-row style="margin-top:0.1rem">
      <van-col span="1"></van-col>
      <van-col span="22" style="color:black;font-size:0.38rem">{{memberdetail.name}}</van-col>
      <van-col span="1"></van-col>
    </van-row>
    <van-row style="margin-top:0.1rem">
      <van-col span="1"></van-col>
      <van-col span="22"><hr></van-col>
      <van-col span="1"></van-col>
    </van-row>

    <van-row style="margin-top:0.2rem">
      <van-col span="1"></van-col>
      <van-col span="22" style="color:#9a9a9a;font-size:0.35rem">电话</van-col>
      <van-col span="1"></van-col>
    </van-row>
    <van-row style="margin-top:0.1rem">
      <van-col span="1"></van-col>
      <van-col span="22" style="color:black;font-size:0.38rem">{{memberdetail.phone}}</van-col>
      <van-col span="1"></van-col>
    </van-row>
    <van-row style="margin-top:0.1rem">
      <van-col span="1"></van-col>
      <van-col span="22"><hr></van-col>
      <van-col span="1"></van-col>
    </van-row>
    

  </div>
</template>

<script>
import Vue from "vue";
import global_ from "../global"; //引用文件
Vue.prototype.GLOBAL = global_; //挂载到Vue实例上面
export default {
  data() {
    return {
      s: "",
      memberdetail: "",
      id: "",
      name: ""
    };
  },
  methods: {
    goback() {
      this.$router.go(-1)
    },
    top() {
      window.scrollTo(0, 0);
    },
    getList() {
      let _this = this;
      let data = {
        token: this.GLOBAL.token,
        id: this.$route.query.id
      };

      this.memberdetail = {
        id: 2,
        name: "",
        email: "",
        phone: "",
        staff_no: "",
        title: "",
        bank_num: "",
        department_id: 25,
        department_incharge: 1,
        password: "",
        sex: 1,
        state: 0,
        des: "",
        sort: 0,
        ctime: "2019-07-17 13:08:35",
        utime: null
      };
      this.$ajax
        .post("/cxt/oa/member/info", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          this.memberdetail = res.data.data;
          console.log(this.memberdetail)
        });
    }
  },
  created() {
    this.top();
    this.getList();
  }
};
</script>

<style scoped>
.m-bg {
  background-color: white;
  padding-bottom: 1rem;
}

.m-header {
  height: 1rem;
  line-height: 1rem;
  color:white;
  font-size: 0.4rem;
  background-color: #00a2ff;
}

.m-header-icon {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.5rem;
  color: white;
}

.m-top {
  height: 1rem;
  line-height: 1rem;
  color:black;
  font-size: 0.4rem;
  background-color: #00a2ff;
}
.top {
  height: 1.4rem;
  line-height: 1.4rem;
  color:black;
  font-size: 0.4rem;
  background-color: #00a2ff;
}
</style>