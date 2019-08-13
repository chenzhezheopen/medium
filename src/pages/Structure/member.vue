<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
      </van-col>
      <van-col span="1"></van-col>
      <van-col span="21">{{this.$route.query.coname}}</van-col>
    </van-row>


    <van-row class="top">
      <!-- 头部返回 -->
      <van-col span="2"></van-col>
      <van-col span="6" style="color:#00a2ff;font-size:0.35rem">
        <span @click="goback">{{this.$route.query.coname}}</span>
      </van-col>
      <van-col span="2">
        <van-icon name="arrow" class="icon" />
      </van-col>
      <van-col span="12" style="font-size:0.35rem">{{this.$route.query.name}}</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="hr">
    

    <div style="margin-top:1.8rem ;padding-top:0.2rem">
      <div v-for="(item,index) in pagemember" :key="index">
        <!-- 成员 -->

        <div class="a" @click="godetail(item.id)">
          <van-row>
            <van-col span="1"></van-col>
            <van-col span="4">
              <div class="round">{{item.name}}</div>      <!-- 蓝圈 -->
            </van-col>
            <van-col span="18">
              <div>{{item.name}}</div>
              <div class="b">{{item.title}}</div>
            </van-col>
            <van-col span="1"></van-col>
          </van-row>
        </div>

        <hr style="margin:0.2rem 5%;width:90%" />
      </div>
    </div>

    <div style="height:1.6rem;width:100%;position:fixed;bottom:0;z-index:2;background-color:white" @click="onAdd()">
      <button class="btn">
        <van-icon name="plus" />
      </button>
      <p class="btn-p">添加同事</p>
    </div>
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
      pagemember: [],
      id: "",
      name: ""
    };
  },
  methods: {
    goback() {
      this.$router.back("Structure");
    },
    top() {
      window.scrollTo(0, 0);
    },
    godetail(id) {
      this.$router.push({
        path: "/mmdetail",
        query: {
          id: id,
          coname: this.$route.query.coname,
        }
      });
      
    },
    onAdd() {
      this.$router.push({
        path: "/add",
        query: {
          id: this.$route.query.id,
          name:this.$route.query.name,
        }
      });
        
    },

    onEdit(item, index) {
      Toast("编辑名单:" + index);
    },
    getList() {
      let _this = this;
      let data = {
        token: this.GLOBAL.token,
        id: this.$route.query.id,
        name: this.$route.query.name
      };

      //  console.log(this.dpt_id)

      this.pagemember = [
        {
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
        }
      ];
      this.$ajax
        .post("/cxt/oa/member/dept", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          this.pagemember = res.data.data;
          // console.log(res.data.data)
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
  padding-bottom: 2rem;
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
  color: #00a2ff;
}

.search {
  background-color: white;
  width: 100%;
}

.btn {
  color: white;
  background-color: #00a2ff;
  border: 0.01rem solid #00a2ff;
  font-size: 0.8rem;
  padding: 0.1rem;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 1.2rem;
  float: left;
  margin: 0.2rem 0.2rem 0.2rem 0.2rem;
  text-align: center;
}

.btn-p {
  font-size: 0.4rem;
  margin: 0.5rem;
}

.a {
  font-size: 0.35rem;
  margin: 0.2rem 0.3rem 0.1rem 0.2rem;
  position: relative;
}

.b {
  font-size: 0.3rem;
  color: #9a9a9a;
  margin: 0 0.3rem 0.1rem 0;
}
.c {
  font-size: 0.5rem;
  color: #bcbcbc;
  position: absolute;
  right: 0.1rem;
}
.top{
  width: 100%;
  position:fixed;
  top:1rem;
  padding:0.2rem 0;
  background-color: white;
  z-index: 2
}
.icon {
  font-size: 0.35rem;
  color: #bcbcbc;
  font-weight: bolder;
  position: absolute;
  top: 0.28rem;
}
.hr{
  width: 90%;
  position:fixed;
  top:1.8rem;
  background-color: white;
  z-index: 2;
  margin: 0 5%
}
.round {
  background-color: #00a2ff;
  color: white;
  border: 0.01rem solid #00a2ff;
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 0.85rem;
  font-size: 0.32rem;
  line-height: 0.85rem;
  text-align: center;
  overflow: hidden;
}
</style>