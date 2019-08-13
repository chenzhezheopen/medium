<template>
	<div id="map">
		<van-row class="s-headeras">
	      <van-col span="2">
	        <van-icon name="arrow-left" class="s-header-iconas" @click="onClickLeft" />
	      </van-col>
	      <van-col span="20" style="text-align:center">地图导航</van-col>
	      <van-col span="2"></van-col>
	    </van-row>
		<el-amap vid="amapDemo" :center="center" :zoom="zoom" :plugin="plugin" class="amap-demo"></el-amap>
		
	</div>
</template>
<script>
	export default{
		data(){
			let self=this;
			return{
				zoom:16,
				center:[120.0703,31.471565],
				plugin:[{
					pName:"Geolocation",
					events:{
						init(o){
							console.log("self")
							o.getCurrentPosition((status,result)=>{
								if(result&&result.position){
									self.lng=result.position.lng;
									self.lat=result.position.lat;
									self.center=[self.lng,self.lat];
									self.loaded=true;
									self.nextTick();
									console.log(self)
								}
							})
						}
					}
				}]
			}
		},
		methods:{
			onClickLeft:function(){
				this.$router.push("/load");
			},
			
		}
	}
</script>
<style>
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
	#map{
		height: 100%;
		overflow-y: hidden;
	}
	.amap-demo{
		height: 100%;
	}
</style>