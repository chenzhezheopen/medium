<template>
  <div class="s-bg">
    <van-nav-bar title="我的信息" left-arrow @click-left="onClickLeft" style="background-color:#ededed"/>
    <img src="../../../../static/img/myimg.png" class="s-img" />
    <van-cell v-model="tel" class="s-cell" />
    <van-tabs v-model="active" animated color="#00a2ff">
      <van-tab title="我的产品">
       
         <div id="mescroll" class="mescroll">  
        <!-- //id可以改,而"mescroll"的class不能删 -->
   <mescroll-vue ref="mescroll" :up="mescrollUp"  @init="mescrollInit">
      <!-- <van-cell v-for="(item,index) in lists" :key="index" :title="item.title" :value="item.ctime" :label="item.message" icon="../../../../static/img/icon_bell.png"/> -->
      <van-cell v-for="(item,index) in lists.list" :key="index" :title="item.pname" :value="item.money" :label="item.stime" icon=""/>
			    </mescroll-vue>
  
</div>
      </van-tab>
      <van-tab title="我的组织">
        <div>
          <div class="s-l">
            <!-- <van-cell title="我的区域经理" value=" " size="large" label="185*****265"  is-link style="padding-top:0.3rem" icon='../../../../static/img/myimg.png'/> -->
            <van-cell>
              <van-cell-item v-for="(item,index) in sjlist" :key="index" replace :to="item.key" :icon="item.img">{{item.name}}</van-cell-item>
            </van-cell>
          </div>
         
        </div>
        <van-row style="text-align:right">
          <van-col span="7">
            <p class="s-p">VIP会员</p>
          </van-col>
   
          <van-col span="17">
            <button class="s-btn" @click="goa">查看全部（<span>04</span>）</button>
          </van-col>
        </van-row>
        
        <div style="clear:both">
        
          <div style="width:100%;float:right">
            <van-cell value="188****8888"  size="large"  is-link  style="padding-top:0.4rem" icon='../../../../static/img/myimg.png'  @click="god"/>
          </div>
        </div>
        <div style="clear:both">
          
          <div style="width:100%;float:right">
            <van-cell value="188****8888"  size="large" icon='../../../../static/img/myimg.png' is-link style="padding-top:0.3rem"/>
          </div>
        </div>
        <van-row style="text-align:right;clear:both">
          <van-col span="7">
            <p class="s-p">普通会员</p>
          </van-col>
          <van-col span="17">
            <button class="s-btn" @click="gob">查看全部（<span>04</span>）</button>
          </van-col>
        </van-row>

        <div style="clear:both">
          <!-- <div style="width:22%;float:left">
            <qriously :value="value4" :size="size" :backgroundAlpha="backgroundAlpha" style="margin:0.1rem 0.1rem 0 0.4rem "  />
          </div> -->
          <div style="width:100%;float:right">
            <van-cell value="188****8888"  size="large" icon='../../../../static/img/myimg.png'  is-link style="padding-top:0.3rem"/>
          </div>
        </div>
        <div style="clear:both">
          
          <div style="width:100%;float:right">
            <van-cell value="188****8888"  size="large" icon='../../../../static/img/myimg.png'  is-link style="padding-top:0.3rem"/>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
 <script>
 import { Toast } from 'vant'; 
import { PullRefresh,List  } from 'vant';
import MescrollVue from 'mescroll.js/mescroll.vue'
import Vue from 'vue'
 import global_ from '../../global'//引用文件
    Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
export default {
   components: {
			    MescrollVue // 注册mescroll组件
			  },
  data() {
    return {
      lists:'',
       token:"",
      mescroll: null, // mescroll实例对象
			     
			      mescrollUp: { // 上拉加载的配置.
			        callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
			        //以下是一些常用的配置,当然不写也可以的.
				page: {
					num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
					size: 20 //每页数据条数,默认10
				},
				htmlNodata: '<p class="upwarp-nodata">-- END --</p>',
				noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据;
						// /* 	避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
						// 	这就是为什么无更多数据有时候不显示的原因 */
				toTop: {
					//回到顶部按钮
					src: "./static/img/mescroll-totop.png", //图片路径,默认null,支持网络图
					offset: 1000 //列表滚动1000px才显示回到顶部按钮
				},
				empty: {
					//列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
					// warpId: "xxid", //父布局的id (1.3.5版本支持传入dom元素)
					icon: "./static/img/mescroll-empty.png", //图标,默认null,支持网络图
					tip: "暂无相关数据~" //提示
				}
            },
            mescrollDown:{
              // 上拉加载的配置.
			        callback: this.downCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
              //以下是一些常用的配置,当然不写也可以的.
              use: true, //是否初始化下拉刷新; 默认true
        auto: false, //是否在初始化完毕之后自动执行下拉回调callback; 默认true
        autoShowLoading: true, //如果在初始化完毕之后自动执行下拉回调,是否显示下拉刷新进度; 默认false
        isLock: false, //是否锁定下拉,默认false;
        isBoth: false, //下拉刷新时,如果滑动到列表底部是否可以同时触发上拉加载;默认false,两者不可同时触发;
        offset: 60, //触发刷新的距离,默认80
        outOffsetRate: 0.2, //超过指定距离范围外时,改变下拉区域高度比例;小于1,越往下拉高度变化越小;
        // mustToTop: !isIOS, //是否列表必须滑动到顶部才能下拉;因为列表回弹效果(-webkit-overflow-scrolling:touch)是iOS专属样式,所以iOS默认false,其他为true;
        hardwareClass: "mescroll-hardware", //硬件加速样式;解决iOS下拉因隐藏进度条而闪屏的问题,参见mescroll.min.css
        warpClass: "mescroll-downwarp", //容器,装载布局内容,参见mescroll.min.css
        resetClass: "mescroll-downwarp-reset", //高度重置的动画,参见mescroll.min.css
        htmlContent: '<p class="downwarp-progress"></p><p class="downwarp-tip">下拉刷新</p>', //布局内容
        inited: function(mescroll, downwarp) {
          console.log("down --> inited");
          //初始化完毕的回调,可缓存dom
          mescroll.downTipDom = downwarp.getElementsByClassName("downwarp-tip")[0];
          mescroll.downProgressDom = downwarp.getElementsByClassName("downwarp-progress")[0];
        },
        inOffset: function(mescroll) {
          console.log("down --> inOffset");
          //进入指定距离offset范围内那一刻的回调
          if(mescroll.downTipDom) mescroll.downTipDom.innerHTML = "下拉刷新";
          if(mescroll.downProgressDom) mescroll.downProgressDom.classList.remove("mescroll-rotate");
        },
        outOffset: function(mescroll) {
          console.log("down --> outOffset");
          //下拉超过指定距离offset那一刻的回调
          if(mescroll.downTipDom) mescroll.downTipDom.innerHTML = "释放更新";
        },
        onMoving: function(mescroll, rate, downHight) {
          //下拉过程中的回调,滑动过程一直在执行; rate下拉区域当前高度与指定距离offset的比值(inOffset: rate<1; outOffset: rate>=1); downHight当前下拉区域的高度
          console.log("down --> onMoving --> mescroll.optDown.offset="+mescroll.optDown.offset+", downHight="+downHight+", rate="+rate);
          if(mescroll.downProgressDom) {
            var progress = 360 * rate;
            mescroll.downProgressDom.style.webkitTransform = "rotate(" + progress + "deg)";
            mescroll.downProgressDom.style.transform = "rotate(" + progress + "deg)";
          }
        },
        beforeLoading: function(mescroll, downwarp) {
          console.log("down --> beforeLoading");
          //准备触发下拉刷新的回调
          return false; //如果要完全自定义下拉刷新,那么return true,此时将不再执行showLoading(),callback();
        },
        showLoading: function(mescroll) {
          console.log("down --> showLoading");
          //触发下拉刷新的回调
          if(mescroll.downTipDom) mescroll.downTipDom.innerHTML = "加载中 ...";
          if(mescroll.downProgressDom) mescroll.downProgressDom.classList.add("mescroll-rotate");
        }
     
            },
			      dataList: [], // 列表数据
      lists:[{
      title:'',
      ctime:'',
      message:''
      },],
    
     deviceList: [],//用于存放加载的数据
            totalPage: 0,
            pageNumber: 0,
            loading: false,//控制上拉加载的加载动画
            finished: false,//控制在页面往下移动到底部时是否调用接口获取数据
            isLoading: false, ///控制下拉刷新的加载动画
            nodata:false,
       token:'',
      tel: "",
      active: 2,
       // 可以自定义，必填项。
            value1: '../../../../static/img/myimg.png',
            value2: '../../../../static/img/myimg.png',
            value3: '../../../../static/img/myimg.png',
            value4: '../../../../static/img/myimg.png',
            value5: 'http://lxchuan12.github.io/',
            // 二维码大小 默认 100
            size: 50,
            // 背景透明度，默认透明 0 
            backgroundAlpha:1,
    };
  },
  created(){
   
    this.getDataList()
     this.getDataListm()
  },
  
    
  methods: {
    mescrollInit (mescroll) {
			      this.mescroll = mescroll  // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
          },
           downCallback (page,mescroll) {
            console.log(mescroll);
               let data ={
                  // token:this.GLOBAL.token,
                  token: localStorage.getItem('token'),
                  	page: this.pageNumber, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
					          size: 20
              };
              let _this=this;
              this.downlists=[{
                 pname:'',
                 stime:'',
                 money:''
              }];
               this.$ajax.post('/cxt/market/top/deals', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => { 
              _this.downlists=res.data.data.list;
              
               let arr = _this.downlists
               if(arr.length>0){
                 _this.pageNumber++;
               }else{
                 _this.nodata = true;
               }
			  
              if(_this.nodata){
                return
              }
              console.log(arr);
              _this.lists = _this.lists.concat(arr)
			        // 数据渲染成功后,隐藏下拉刷新的状态
			        _this.$nextTick(() => {
              // console.log(mescroll);
			          mescroll.endSuccess(arr.length,true);
			        })
        
        });
			      
			    },
			    upCallback (page,mescroll) {
               let data ={
                  // token:this.GLOBAL.token,
                  token: localStorage.getItem('token'),
                  	page: this.pageNumber, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
					          size: 20
              };
              let _this=this;
              this.uplists=[{
                 pname:'',
                 stime:'',
                 money:''
              }];
               this.$ajax.post('/cxt/market/top/deals', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => { 
              _this.uplists=res.data.data.list
              
               let arr = _this.uplists
               if(arr.length>0){
                 _this.pageNumber++;
               }else{
                 _this.nodata = true;
               }
			      
              if(_this.nodata){
                 mescroll.endSuccess(arr.length,true);
                 return;
              }
            
              _this.lists = _this.lists.concat(arr)
			        // 数据渲染成功后,隐藏下拉刷新的状态
			        _this.$nextTick(() => {
              // console.log(mescroll);
			          mescroll.endSuccess(arr.length,true);
			        })
        
        });
			   
			    },
   getDataListm(){

      let data = {
         token:this.GLOBAL.token
      };
     
     console.log(data)
      let _this = this;
          this.tc =[{
          role:'',
          tel:'',
          img:'',
            
        
          }] 
         
      this.$ajax.post('/cxt/user/selfInfo', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          // console.log(res.data.data);
          this.tc=res.data.data
          this.tel=res.data.data.tel
           this.r=res.data.data.role
           console.log(this.tc)
        
           
        });
    },
    getDataList(){
      let data = {
        //  token:this.GLOBAL.token,
        token: localStorage.getItem('token'),
         page:0,
         size:''
      };
      let _this = this;
          this.lists = {
         pname:'',
         stime:'',
         money:''
            
        
          };
         console.log(localStorage.getItem('token'));
      this.$ajax.get('/cxt/market/top/deals', _this.$qs.stringify({
        token: localStorage.getItem('token'),
         page:0,
         size:20
      }), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
         
         this.lists=res.data.data
        console.log(this.lists)
           
        });
    },
    onClickLeft() {
      this.$router.back("/myswap");
    },
    goa(){
      this.$router.push("/vipmember");
    },
    gob(){
      this.$router.push("/commonmember");
    },
    goc(){
      this.$router.push("/codea");
    },
    god(){
      this.$router.push("/hermessage");
    }
  }
};
</script>
 
 <style scoped>
 .s-bg{
  padding-bottom: 1rem;
  background-color: white
}

.van-nav-bar__title {
    color:black;
    font-size: 0.35rem;
    background-color: #ededed
}

.van-nav-bar .van-icon {
    color: black;
    font-size: 0.4rem
}
.s-img {
  width: 20%;
  margin: 0.2rem 40% 0.5rem 40%;
}
.s-cell {
  padding-left:40%;
  padding-bottom: 0.3rem;
}
.left {
  float: left;
  width: 28%;
}
.mid {
  float: left;
  width: 47%;
}
.right {
  float: right;
  width: 25%;
}

.s-l {
  width: 100%;
  float: left;
}

.s-img-s {
  width: 50%;
  margin: 0.15rem 0.15rem 0.15rem 0.7rem;
}

.s-img-b {
  width: 70%;
  margin: 0 0.15rem 0 0.4rem;
}

.s-p{
  color: #00a2ff;
  font-size:0.4rem;
  
  margin: 0.1rem 0 0.1rem 0.3rem
}

.s-btn{
  color: #9a9a9a;
  margin: 0.25rem ;
  font-size:0.15rem 0.25rem;
}
</style>
 