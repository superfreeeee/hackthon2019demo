<template>
  <a-layout id="layout">
    <a-layout-sider>
      <LayoutSider/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <LayoutHeader/>
      </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>


</script>

<script>
import {Layout} from 'ant-design-vue'

export default {
  components: {
    ALayout: Layout,
    ALayoutSider: Layout.Sider,
    ALayoutContent: Layout.Content,
    ALayoutHeader: Layout.Header,
    LayoutSider: () => import('./LayoutSider.vue'),
    LayoutHeader: () => import('./LayoutHeader.vue')
  }
}
</script>

<style>
#layout {
  height: 100%;
  width: 100%;;
}

.ant-layout-sider {
  width: 100px;
}

.ant-layout-header {
  padding: 0;
}

.ant-layout-content {
  overflow: scroll;
  padding: 20px;
}
</style>