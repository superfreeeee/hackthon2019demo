<template>
  <div>
    <a-card id="login" title='登入'>
      <div class="">
        <a-input class="input-line"
          placeholder="username" 
          size='large' 
          v-model="username"
          @change="change"
        >
          <span slot="addonBefore">用户：</span>
        </a-input>
        <a-input-password class="input-line"
          placeholder="password" 
          size='large'
          v-model="password"
          @change="change"
          @focus="enableEnter"
          @blur="unableEnter"
        >
          <span slot="addonBefore">密码：</span>
        </a-input-password>
        <a-button style="margin-top: 10px; width: 100%;" 
          type='primary'
          @click="login"
        >
          确定
        </a-button>
      </div>
    </a-card>
  </div>
</template>

<script>
import {Card, Input, Button} from 'ant-design-vue'

export default {
  components: {
    ACard: Card,
    AInput: Input,
    AInputPassword: Input.Password,
    AButton: Button
  },
  data() {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    change() {
      console.log(`device name: ${this.username}, device id: ${this.password}`)
    },
    login() {
      const data = {username: this.username, password: this.password}
      console.log(data)
      // axios
      const ip = this.$store.state.serverIP
      const router = ip + '/cam/login'
      this.axios.post(router, data)
        .then(response => {
          const data = response.data
          const userInfo = data.data
          // console.log(data)
          // console.log(userInfo)
          this.$store.commit('updateUsername', userInfo.username)
          this.$router.push({name: 'overview'})
        })
        .catch(err => {
          err
          // console.log(err)
          // console.log('login fail')
        })
    },
    enableEnter() {
      window.onkeypress = e => {
        // console.log(e)
        if(e.keyCode === 13) {
          this.login()
        }
      }
      // console.log('enable')
    },
    unableEnter() {
      window.onkeypress = null
      // console.log('unable')
    }
  }
}
</script>

<style>
#login {
  width: 40%;
}

.input-line {
  margin: 20px 0;
}
</style>