<template>
  <div id="layout-header">
    <span class="title">家居监控系统</span>
    <div class="profile">
      <a-icon type="user" />
      <span style="margin-left: 20px; cursor: pointer;" 
        @click="setting"
      >{{username}}
      </span>
      <span style="margin-left: 10px; font-size: 20px; cursor: pointer;" 
        :v-if="logined"
        @click="logout"
      >| 登出
      </span>
    </div>
  </div>
</template>

<script>
import {Icon} from 'ant-design-vue'

export default {
  components: {
    AIcon: Icon
  },
  methods: {
    setting() {
      if(this.$store.state.username == null) {
        this.$router.push({name: 'login'})
      } else {
        this.$router.push({name: 'setting'})
      }
    },
    logout() {
      console.log('logout')
      this.$store.commit('updateUsername', null)
    }
  },
  computed: {
    username: function() {
      const username = this.$store.state.username
      return username == null ? '登入' : username
    },
    logined: function() {
      return this.$store.state.username == null
    }
  }
}
</script>

<style>
#layout-header {
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px; 
}

#layout-header .title {
  font-size: 25px;
}

#layout-header .profile {
  margin-right: 40px;
  font-size: 25px;
}
</style>