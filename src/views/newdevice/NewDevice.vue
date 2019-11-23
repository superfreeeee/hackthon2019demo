<template>
  <div>
    <a-card id="newdevice" title='添加设备'>
      <div class="">
        <a-input class="input-line"
          placeholder="设备ID" 
          size='large' 
          v-model="deviceId"
          @change="change"
        >
          <span slot="addonBefore">注册设备</span>
        </a-input>
        <a-input class="input-line"
          placeholder="type" 
          size='large'
          v-model="deviceType"
          @change="change"
        >
          <span slot="addonBefore">设备类型</span>
        </a-input>
        <a-button style="margin-left: 20px;" 
          type='primary'
          @click="register"
        >
          确定
        </a-button>
        <a-button style="margin-left: 20px;"
          @click="reset"
        >
          重置
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
    AButton: Button
  },
  data() {
    return {
      deviceId: null,
      deviceType: null
    }
  },
  methods: {
    change() {
      console.log(`device id: ${this.deviceId}, device type: ${this.deviceType}`)
    },
    register() {
      // axios
      const ip = 'http://localhost:8080'
      const router = ip + '/cam/push'
      this.axios.get(router)
        .then(() => {})

      // const router = ip + '/cam/register'
      // console.log(this.deviceForm)
      // this.axios.post(router, this.deviceForm)
      //   .then(response => {
      //     console.log(response)
      //     console.log(response.data)
      //   })

      // console.log('register')
      // console.log({...data})
    },
    reset() {
      console.log('reset')
      this.deviceId = null
      this.deviceType = null
    }
  },
  computed: {
    deviceForm() {
      return {
        deviceId: this.deviceId,
        deviceType: this.deviceType
      }
    }
  }
}
</script>

<style>
#newdevice {
  width: 40%;
}

.input-line {
  margin: 20px 0;
}
</style>