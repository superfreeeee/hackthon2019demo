<template>
  <a-list class="deviceManage" itemLayout="horizontal" :data-source="data">
    <div
    v-if="showLoadingMore"
    slot="loadMore"
    :style="{textAlign:'center',marginTop:'12px',height:'32px',lineHeight:'32px'}"
    >
      <a-spin v-if="loadingMore"/>
      <a-button v-else @click="onLoadMore">loading more</a-button>
    </div>
    <a-list-item slot="renderDevice" >
      <a slot="actions">delete</a>
      <a-list-item-mata
      description="you can manage your devices"
      >
<!--        <span slot="ID">{{device}}</span>-->

      </a-list-item-mata>

    </a-list-item>
  </a-list>

</template>
<script>
  import {List,Button,Spin} from 'ant-design-vue'
  export default {
    components:{
      AList:List,
      AButton:Button,
      ASpin:Spin,
    },
    data(){
      return{
        loadingMore:false,
        showLoadingMore:true,
        data:[],
      }
    },
    computed:{
      device: function() {
        return this.$store.state.device()
      }
    }
  }
</script>
<style>

</style>