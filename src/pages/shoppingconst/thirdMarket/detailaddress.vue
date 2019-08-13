<template>
    <div>
        <van-nav-bar title="编辑地址" left-arrow @click-left="onClickLeft" style="background-color:#ededed"/>
      <van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>
    </div>
</template>
<script>
import { AddressEdit } from 'vant';

// Vue.use(AddressEdit);
export default {
    data() {
    return {
      areaList,
      searchResult: []
    }
  },
  methods:{
      onClickLeft(){
        this.$router.push('/taddress')
      },
       onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  }
}
</script>

