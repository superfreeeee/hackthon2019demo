<template>
  <div id="layout-sider">
    <div class="logo"></div>
    <a-menu
      :defaultSelectedKeys="['overview']"
      @click="goto"
      mode="inline"
      theme="dark"
    >
      <a-menu-item key='overview'>Overview</a-menu-item>
      <a-menu-item key='setting'>Setting</a-menu-item>
    </a-menu>
  </div>
</template>

<script>
import {Menu} from 'ant-design-vue'

export default {
  components: {
    AMenu: Menu,
    AMenuItem: Menu.Item
  },
  methods: {
    goto(e) {
      const key = e.key
      this.$router.push({name: key})
    }
  }
}
</script>

<style>
#layout-sider .logo {
  width: 150px;
  height: 30px;
  margin: 20px auto;
  background-color: rgba(255, 255, 255, 0.2);
}
</style>