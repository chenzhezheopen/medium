<template>
    <div>
        <van-nav-bar title="积分明细" left-arrow @click-left="onClickLeft" style="background-color:#ededed"/>
        <van-cell  value="2019-05"  style="padding-left:0.45rem ;font-size:0.2rem ;color:#bcbcbc" :border="false"/>
        <van-row>
            <van-col span="5">
                <van-cell  value="05-01"  style="padding-left:0.45rem" :border="false"/>
            </van-col>
            <van-col span="14">
                <van-cell  value="消费得到的积分"  :border="false"/>
            </van-col>
            <van-col span="5">
                <van-cell  title="+200" :border="false"/>
            </van-col>
        </van-row>
        <hr class="m-hr">
        
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            value:""
        }
    },
    methods:{
        onClickLeft(){
            this.$router.back('/mypoints')
        }
    }
}
</script>
<style scoped>
.van-nav-bar__title {
    color:black;
    font-size: 0.35rem;
    background-color: #ededed
}

.van-nav-bar .van-icon {
    color: black;
    font-size: 0.4rem
}

.van-cell__value--alone {
    color: #9a9a9a;
    text-align: left;
}

.m-hr{
    width: 90%;
    margin: 0 5%;
    border: 0.01rem solid #ededed
}
</style>
 