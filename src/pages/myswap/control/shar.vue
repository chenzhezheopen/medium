<template>
	<div class="shar_main">
		<van-row class="s-headeras" style="background:#222222;">
	      <van-col span="2">
	        <van-icon name="arrow-left" class="s-header-iconas" @click="onClickLeft" />
	      </van-col>
	      <van-col span="20" style="text-align:center;color:#ffffff;">分时图</van-col>
	      <van-col span="2">
	      </van-col>
	    </van-row>
		<!--<div class="hello">
   			<chart ref="chart1" id="time_part"  :auto-resize="true"></chart>
 		</div>-->
 		<div class="jack">
   			<chart ref="chart2" id="time_cloumn"  :auto-resize="true"></chart>
 		</div>
		<div class="tabbar">
 			<div class="tabbar_plate2" @click="plate">
 				<center>
 					<img src="../../../../static/img/book.png"/><br />
 					<a>盘口</a>
 				</center>
 			</div>
 			<div class="tabbar_shar2" @click="shar">
 				<center>
 					<img src="../../../../static/img/进度svg check.png"/><br />
 					<a>分时</a>
 				</center>
 			</div>
 			<div class="tabbar_large2" @click="large">
 				<center>
 					<img src="../../../../static/img/K线图.png"/><br />
 					<a>k线</a>
 				</center>
 			</div>
 		</div>
 		<div class="pull">
 			<table border="" cellspacing="0" cellpadding="0">
 				<tr><td><a style="font-size: 0.2rem; margin-left: 0.2rem; color: #ffffff; font-weight: bold;">卖</a><a style="font-size: 0.2rem; margin-left: 0.2rem; color:red; font-weight: bold;">{{maths1}}</a></td><th rowspan="3" style="font-size:1rem; color: #ffffff;">{{maths1}}</th></tr>
 				<tr><td><a style="font-size: 0.2rem; margin-left: 0.2rem; color: #ffffff; font-weight: bold;">买</a><a style="font-size: 0.2rem; margin-left: 0.2rem; color:red; font-weight: bold;">{{maths1}}</a></td></tr>
 				<tr><td><a style="font-size: 0.2rem; margin-left: 0.2rem; color: #ffffff; font-weight: bold;">仓</a><a style="font-size: 0.2rem; margin-left: 0.2rem; color:red; font-weight: bold;">{{maths1}}</a></td></tr>
 			</table>
 		</div>
	</div>
</template>

<script>
import echarts from "echarts";
export default{
	name:'plate_main',
	data(){
		return{
			maths1:0,
			message:{
    			code:"",
    			type:""
    		},
    		
    		rData:[],
    		rcreat:[]
		}
	},
	mounted(){
//		this.charts()
		this.maths1=(Math.random()*1000).toFixed(2)
		this.getcon(this.$route.query.stage,'minute')
	},
	methods:{
		cloumn(){
			this.pillar=echarts.init(document.getElementById("time_cloumn"))
			this.datas=this.rData.reverse().map(function (item) {
					    return item[0];
					})
			this.data=this.rData.reverse().map(function (item) {
					    return item[7];
				})
			this.option2 = {
                // x轴配置
                grid:[
                    // 第一个grid
                    {
                        top:10,// 图表的外边距
                        height:260,// 图表的高度
                        width:'90%',//因为是左右各一个图表，使用百分比的方式显得更方便，
                    },
                    // 第二个grid，第二个图表是在第一个图表的下方，所以要把它定位到底部
                    {
                        top:270,//设置上方的外边距是第一个图表的高度再加10，使用top是方便我们调整下方grid的高度
                        width:'90%',// 宽度与第一个图表一个大
                        height:130,
                    }
                ],
                // 多个图表则会存在对个x轴y轴，所以这里的配置我们也换成数组的方式
                // x轴配置，
                xAxis:[
                        // 第一个grid的x轴属性
                        {
                            // 告诉echarts，这个第一个grid的x轴
                            gridIndex:0,
                            type: 'category',
                            // x轴显示的数据
                            data: []
                        },
                        // 第二个grid的x轴属性
                        {
                            // 告诉echarts，这个第一个grid的x轴
                            gridIndex:1,
                            type: 'category',
                            // x轴显示的数据
                            data: this.datas
                        }
                    ],
                // y轴配置
                yAxis: [
                    // 第一个grid的y轴属性
                    {
                        gridIndex:0,
                        type: 'value'
                    },
                    // 第二个grid的y轴属性
                    {
                        gridIndex:1,
                        type: 'value'
                    }
                ],
                // 数据可以通过xAxisIndex，yAxisIndex属性，来指定是哪个grid的数据
                series: [{
                    xAxisIndex:0,
                    yAxisIndex:0,
                    data: this.data,
                    type: 'line'
                },{
                    xAxisIndex:1,
                    yAxisIndex:1,
                    data: this.data,
                    type: 'bar'
                }]
            };
            this.pillar.setOption(this.option2)
			
		},
//		charts(){
//			this.part=echarts.init(document.getElementById("time_part"))
//			this.option1 = {
//              // x轴配置
//              xAxis: {
//                  type: 'category',
//                  // x轴显示的数据
//                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//              },
//              // y轴配置
//              yAxis: {
//                  type: 'value'
//              },  
//              series: [{
//                  data: [1, 5, 5, 8, 2, 9, 4],
//                  // line类型是折线图，bar类型是柱状图
//                  type: 'line'
//              }]
//          };
//          this.part.setOption(this.option1)
//		},
		onClickLeft() {
	      this.$router.push("/company");
	    },
		ceshi() {
	    },
	    plate(){
	    	this.$router.push({path:'/plate?stage='+this.$route.query.stage})
	    },
	    shar(){
	    	this.$router.push({path:'/shar?stage='+this.$route.query.stage})
	    },
	    large(){
	    	this.$router.push({path:'/large?stage='+this.$route.query.stage})
	    },
	    getcon(code,type){
    		let _this = this
    		_this.message={
    			code:code,
    			type:type
    		}
	    	 this.$ajax.post('/cxt/currency/index',_this.$qs.stringify(_this.message),{
	          headers: _this.Base.initAjaxHeader(1, _this.message)
	        })
	        .then(res => {
	        	for(let value in res.data.data.K){
	        		_this.rcreat[value]=[
	        		res.data.data.K[value].ctime,
	        		res.data.data.K[value].openPrice.toString(),
	        		res.data.data.K[value].recyclePrice.toString(),
	        		res.data.data.K[value].amplitude.toString(),
	        		res.data.data.K[value].lifting.toString(),
	        		res.data.data.K[value].minPrice.toString(),
	        		res.data.data.K[value].maxPrice.toString(),
	        		res.data.data.K[value].dealCount.toString(),
	        		"-"]
	        	}
	        	
	        	_this.rData=_this.rcreat;
	        	this.cloumn()
	        });
	        
    	}
	}
	
}
</script>

<style>
/*#time_part{
	width: 100%;
	height: 100%;
}*/
/*.hello{
	width: 100%;
	height: 5rem;
}*/
.pull>table{
	width: 100%;
}
.pull td{
	width: 45%;
}
.pull th{
	width: 45%;
}
.pull{
	width: 100%;
	height: 11%;
	background: rgba(33,32,45,1);
	left:0px; 
	bottom:0px;
}
.jack{
	width: 100%;
	height: 10rem;
	/*margin-left: 5%;*/
}
#time_cloumn{
	height: 100%;
	width: 100%;
}
.tabbar{
	width: 100%;
	height: 7%;
	position:fixed; 
	left:0px; 
	background: #323233;
	bottom:0px;
}
.tabbar>div{
	width: 33.3%;
	height: 100%;
	float: left;
}
.tabbar img{
	width: 20%;
}
.tabbar a{
	color: #9A9A9A;
}
.tabbar_shar2{
	background:#FF800E;
}
.tabbar_shar2 a{
	color: #ffffff;
}
.shar_main{
	overflow-x: hidden;
	width: 100%;
	height: 100%;
}
.s-headeras {
  height: 1rem;
  line-height: 1rem;
  color: #ffffff;
  font-size: 0.35rem;
  background-color:#ffffff;
}

.s-header-iconas {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.45rem;
}
.image{
	margin-top:-0.2rem;
}
</style>