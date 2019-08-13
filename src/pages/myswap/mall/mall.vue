<template>
    <div>
     <van-nav-bar title="商城订单" left-arrow @click-left="onClickLeft" style="background-color:#ededed"/>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        onClickLeft() {
      this.$router.back("/myswap");
    },
    }
}
</script>
<style scoped>
.van-nav-bar .van-icon {
    color: black;
    font-size: 0.4rem
}
</style>
