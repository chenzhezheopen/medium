
<template>
  <div style=" overflow: hidden;">
    <van-row class="m-header">
      <van-col span="2"></van-col>
      <van-col span="6">工作</van-col>
      <van-col span="16"></van-col>
    </van-row>
    <!-- <van-row class="search">
      <van-col span="24" style="text-align:center">
    <van-search placeholder="搜索" v-model="s" @search='search(s)' />-->
    <!-- a -->
    <!-- <div id="title" v-show="!root">
          <div v-for="(item,index) in parents_list" :key="index" style="overflow:hidden;">
          <div v-if="index>0" style="float:left;padding-left:.2rem;box-sizing:border-box;font-size:.3rem;" @click="getList(item.id,true,item.name)">
            <span style="color:grey;">{{item.name}}</span>
          </div>
          <div v-else style="float:left;padding-left:.2rem;box-sizing:border-box;font-size:.3rem;" @click="getList(item.id,true,item.name)">
            <span style="color:blue;">{{item.name}}</span>
          </div>
        </div>
    </div>-->
    <!-- </van-col>
    </van-row>-->
    <!-- <van-row class="title">
      <van-col span="2"></van-col>
      <van-col span="20">
        
      </van-col>
      <van-col span="2"></van-col>
    </van-row>-->
    <!-- <van-row class="line">
      <van-col span="24"></van-col>
    </van-row>-->
    <!-- <van-row style="margin-top:2.7rem;padding-top:0.2rem">

      <van-col span="22" v-show="!root">
        <div v-for="(item,index) in parents_list" :key="index" style="overflow:hidden;">
          <div v-if="index>0" style="float:left;padding-left:.2rem;box-sizing:border-box;font-size:.3rem;" @click="getList(item.id,true,item.name)">
            <span style="color:blue;">{{item.name}}</span>
          </div>
          <div v-else style="float:left;padding-left:.2rem;box-sizing:border-box;font-size:.3rem;" @click="getList(item.id,true,item.name)">
            <span style="color:grey;">{{item.name}}</span>
          </div>
        </div>
       
      </van-col>
      
    </van-row>-->
    <!-- <van-row style="margin-top:0.6rem;padding-top:0.2rem">
      <van-col span="22">
        <div style="padding-left:.2rem;box-sizing:border-box;font-size:.3rem;" @click="getList(temp_id,true,temp_name)">{{temp_name}}</div>
      </van-col>
    </van-row>-->
    <van-row style="padding-top:0.5rem;margin-top:1rem">
      <van-col span="2"></van-col>
      <van-col span="3">
        <van-icon name="cluster-o" class="b" />
      </van-col>
      <van-col span="19" style="font-size:0.35rem">常州孝道文化产业股份有限公司</van-col>
    </van-row>
    <hr style="margin:0.2rem 5%;width:90%" />

    <div v-for="(item,index) in pageData" :key="index">
      <div @click="gofgs(item.id,item.name)">
        <van-row>
          <van-col span="5"></van-col>
          <van-col span="17" style="font-size:0.35rem">{{item.name}}</van-col>
          <van-col span="2">
            <van-icon name="arrow" class="d" />
          </van-col>
        </van-row>
        <hr style="margin:0.2rem 5%;width:90%" />
      </div>
    </div>

    <div style="height:0.2rem;background-color:#ededed;width:100%"></div>

    <van-row style="margin-top:0.2rem">
      <van-col span="2"></van-col>
      <van-col span="3">
        <van-icon name="exchange" class="b" />
      </van-col>
      <van-col span="17" style="font-size:0.35rem">工作流</van-col>
      <van-col span="2">
        <van-icon name="arrow" class="d" />
        <!-- 做跳转 -->
      </van-col>
    </van-row>
    <hr style="margin:0.2rem 5%;width:90%" />

    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/webhome" icon="apps-o">网站</van-tabbar-item>
      <van-tabbar-item replace to="/Market" icon="shopping-cart-o">购物</van-tabbar-item>
      <van-tabbar-item replace to="/Structure" icon="comment-circle-o">工作</van-tabbar-item>
      <van-tabbar-item replace to="/myswap" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
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
      active: 3,
      n: "",
      value: "",
      pageData: "",
      temp_id: 0,
      temp_name: "",
      parents_list: "",
      root: false
    };
  },

  created() {
    this.top();
    this.getList(0);
  },
  methods: {
    gofgs(id, name) {
      this.$router.push({
        path: "/department",
        query: {
          id: id,
          coname: name
        }
      });
      console.log(id);
      console.log(name);
    },
    top() {
      window.scrollTo(0, 0);
    },
    getList(id, tag, name) {
      let _this = this;
      let data = {
        pId: id,
        token: this.GLOBAL.token
      };

      this.pageData = [
        {
          id: 7,
          name: "中华孝道园",
          des: "",
          parent_id: 0,
          sort: 0,
          state: 0,
          ctime: "2019-07-16 20:38:48",
          utime: null
        }
      ];

      this.$ajax
        .post("/cxt/oa/dept/detail", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          this.pageData = res.data.data.dept;
          // if(res.data.data.parents&&res.data.data.parents.length>1){
          //   this.temp_id=res.data.data.parents[1].id;
          //   this.temp_name = res.data.data.parents[0].name;
          //   this.temp_name = '上一级';
          //   this.parents_list = res.data.data.parents;

          // }else if(res.data.data.parents&&res.data.data.parents.length==1){
          //   this.temp_id=0;
          //   this.temp_name = '总裁办';
          //   this.temp_name = '上一级';
          //   this.parents_list = res.data.data.parents;
          //   this.root = false;
          // }else{
          //   this.temp_id=0;
          //   this.temp_name = '  ';
          //   this.root = true;
          // }
          // console.log(this.parents_list);
          // if(tag){
          //   this.temp_id=id;
          //   this.temp_name = name;
          // }
        });
    },
    top() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped>
.p {
  position: absolute;
  right: 1rem;
  bottom: 0rem;
  font-size: 0.3rem;
}
.m-bg {
  background-color: #ededed;
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

.search {
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  background-color: white;
}

#title {
  z-index: 2;
  width: 100%;
  background-color: white;
  text-align: left;
  margin-left: 0.5rem;
  padding-bottom: 0.2rem;
}

.line {
  position: fixed;
  top: 2.3rem;
  z-index: 2;
  width: 100%;
  background-color: #ededed;
  height: 0.2rem;
}

.a {
  font-size: 0.4rem;
  margin: 0.3rem 0.3rem 0.3rem 1.3rem;
  position: relative;
}

.c {
  font-size: 0.5rem;
  color: #bcbcbc;
  position: absolute;
  right: 0.1rem;
}
.b {
  font-size: 0.5rem;
}
.d {
  font-size: 0.45rem;
  color: #bcbcbc;
  position: absolute;
  right: 0.35rem;
}
</style>

