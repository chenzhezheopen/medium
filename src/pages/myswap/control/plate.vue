<template>
	<div class="plate_main">
		<van-row class="s-headeras" style="background:#222222;">
	      <van-col span="2">
	        <van-icon name="arrow-left" class="s-header-iconas" @click="onClickLeft" />
	      </van-col>
	      <van-col span="20" style="text-align:center;color:#ffffff;">盘口</van-col>
	      <van-col span="2">
	      </van-col>
	    </van-row>
	    <div class="container">
	    	<div class="navbar">
	    		<table>
	    			<tr>
	    				<th @click="pic=1" :class="{'mystyle':pic==1}">盘口</th>
	    				<th @click="pic=2" :class="{'mystyle':pic==2}">成交明细</th>
	    			</tr>				   
	    		</table>
	    	</div>
	    	<div class="foot">
	    		<table cellspacing="0" :class="{play:pic==2}" cellpadding="0">
					<tr>
						<td rowspan="2">卖价<a>{{pData[pData.length-1].nowPrice}}</a></td>
						<td rowspan="2">卖量<a>{{pData[pData.length-1].nowPrice}}</a></td>
					</tr>
					<tr>

					</tr>
					<tr>
						<td rowspan="2">买价<a>{{pData[pData.length-1].nowPrice}}</a></td>
						<td rowspan="2">买量<a>{{pData[pData.length-1].nowPrice}}</a></td>
					</tr>
					<tr>

					</tr>
					<tr>
						<td rowspan="2">最新<a>{{pData[pData.length-1].nowPrice}}</a></td>
						<td rowspan="2">涨跌<a>{{pData[pData.length-1].nowPrice}}</a></td>
					</tr>
					<tr>

					</tr>
					<tr>
						<td rowspan="2">开盘<a>{{pData[pData.length-1].openPrice}}</a></td>
						<td rowspan="2">成交量<a>{{pData[pData.length-1].dealCount}}</a></td>
					</tr>
					<tr>

					</tr>
					<tr>
						<td rowspan="2">最高<a>{{pData[pData.length-1].maxPrice}}</a></td>
						<td rowspan="2">持仓量<a>{{pData[pData.length-1].dealCount}}</a></td>
					</tr>
					<tr>

					</tr>
					<tr>
						<td rowspan="2">最低<a>{{pData[pData.length-1].minPrice}}</a></td>
						<td rowspan="2">日增仓<a>{{pData[pData.length-1].nowPrice}}</a></td>
					</tr>
					<tr>

					</tr>
					<tr>
						<td rowspan="2">均价<a>{{pData[pData.length-1].nowPrice}}</a></td>
						<td rowspan="2">外盘<a>{{pData[pData.length-1].nowPrice}}</a></td>
					</tr>
					<tr>

					</tr>
					<tr>
						<td rowspan="2">昨结<a>{{pData[pData.length-2].recyclePrice}}</a></td>
						<td rowspan="3">涨停<a>{{pData[pData.length-1].amplitude}}%</a></td>
					</tr>
					<tr>

					</tr>
					<tr>
						<td rowspan="2">昨收<a>{{pData[pData.length-2].recyclePrice}}</a></td>
						
					</tr>
					<tr>
						<td rowspan="3">跌停<a>{{pData[pData.length-1].nowPrice}}</a></td>
					</tr>
					<tr>
						<td rowspan="2">杠杆<a>--</a></td>
					</tr>
					<tr>

					</tr>
				</table>
	    	</div>
	    	<div class="body" :class="{play:pic==1}">
	    		<div class="thead">
	    			<center>
	    				<div style="width: 25%;">时间</div>
						<div style="width: 25%;">价位</div>
						<div style="width: 20%;">现手</div>
						<div style="width: 15%;">增仓</div>
						<div style="width: 15%;">开平</div>
	    			</center>
	    		</div>
	    		<table class="tab" cellspacing="0" cellpadding="0" >
    				<tr v-for="(index,i) in data">
    					<td><a>{{index.title1}}</a></td>
    					<td><a>{{index.title2}}</a></td>
    					<td><a>{{index.title3}}</a></td>
    					<td><a>{{index.title4}}</a></td>
    					<td><a>{{index.title5}}</a></td>
    				</tr>
	    		</table>
	    	</div>
	    </div>
		<div class="tabbar">
 			<div class="tabbar_plate1" @click="plate">
 				<center>
 					<img src="../../../../static/img/bookcheck.png"/><br />
 					<a>盘口</a>
 				</center>
 			</div>
 			<div class="tabbar_shar1" @click="shar">
 				<center>
 					<img src="../../../../static/img/进度svg.png"/><br />
 					<a>分时</a>
 				</center>
 			</div>
 			<div class="tabbar_large1" @click="large">
 				<center>
 					<img src="../../../../static/img/K线图.png"/><br />
 					<a>k线</a>
 				</center>
 			</div>
 		</div>
 		
	</div>
</template>

<script>
export default{
	name:'plate_main',
	data(){
		return{
			pic:1,
			plate_init:[],
			pData:[],
			arr:[],
			data:[
//				{
//					title1:"ni",
//					title2:"ni",
//					title3:"ni",
//					title4:"ni",
//					title5:"ni"
//				},
//				{
//					title1:"ni",
//					title2:"ni",
//					title3:"ni",
//					title4:"ni",
//					title5:"ni"
//				},
//				{
//					title1:"ni",
//					title2:"ni",
//					title3:"ni",
//					title4:"ni",
//					title5:"ni"
//				}
			]
		}
	},
	mounted(){
		this.plate_getdata(this.$route.query.stage,'day')
	},
	methods:{
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
	    plate_getdata(code,type){
    		let _this = this
    		_this.arr={
    			code:code,
    			type:type
    		}
	    	 this.$ajax.post('/cxt/currency/index',_this.$qs.stringify(_this.arr),{
	          	headers: _this.Base.initAjaxHeader(1, _this.arr)
		      }).then(res => {
		        	_this.pData=res.data.data.K;
		        });
    	},
	}
	
}
</script>

<style>

.tab{
	width: 95%;
}
.tab tr{
	width: 100%;
	height: 5%;
}

.tab tr td a{
	float: right;
	color: #ffffff;
}
.tab tr td:nth-child(1){
	width: 15%;
}
.tab tr td:nth-child(2){
	width: 20%;
}
.tab tr td:nth-child(3){
	width: 17%;
}
.tab tr td:nth-child(4){
	width: 15%;
}
.tab tr td:nth-child(5){
	width: 10%;
}
.thead div{
	float: left;
}
.body{
	width: 100%;
	margin-top: -137%;
	height: 91.5%;
	background: #222222;
	color:#ffffff;
}

.play{
	display: none;
}
.foot{
	width: 100%;
	height: 91.5%;
	background: #222222;
}
.foot table{
	width: 100%;
	height: 100%;
}
.foot td{
	width: 50%;
	height: 4%;
	border: 1px rgba(216,76,41,0.4) solid;
	color: #ffffff;
	padding-left: 5%;
}
.foot td a{
	color: #ffffff;
	float: right;
	margin-right: 0.5rem;
}
.mystyle{
	background:chocolate;
	border-bottom:1px red solid;
	/*color: #ffffff;*/
}
.container{
	width: 100%;
	height: 86%;
}
.navbar{
	width: 100%;
	height: 8.5%;
	background: #222222;
}
.navbar table{
	width: 100%;
	height:100%;
	border: none;
}
.navbar table tr th{
	width: 50%;
	color: #ffffff;
	height:100%;
	border-bottom: 1px #222222 solid;
	/*background: #222222;*/
	
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
.tabbar_plate1{
	background:#FF800E;
}
.tabbar_plate1 a{
	color: #ffffff;
}
.plate_main{
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