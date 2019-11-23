<template>
  <div>
    <a-card id="newdevice" title='添加设备'>
      <div class="">
        <a-input class="input-line"
          placeholder="设备名称" 
          size='large' 
          v-model="deviceName"
          @change="change"
        >
          <span slot="addonBefore">注册设备：</span>
        </a-input>
        <a-input class="input-line"
          placeholder="设备ID" 
          size='large'
          v-model="deviceId"
          @change="change"
        >
          <span slot="addonBefore">设备ID：</span>
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
      deviceName: null,
      deviceId: null
    }
  },
  methods: {
    change() {
      console.log(`device name: ${this.deviceName}, device id: ${this.deviceId}`)
    },
    register() {
      // axios
      const ip = 'http://localhost:8080'
      const router = ip + '/cam/register'
      console.log(this.deviceForm)
      this.axios.post(router, this.deviceForm)
        .then(response => {
          console.log(response)
          console.log(response.data)
        })
      // console.log('register')
      // console.log({...data})
    },
    reset() {
      console.log('reset')
      this.deviceName = null
      this.deviceId = null
    }
  },
  computed: {
    deviceForm() {
      return {
        deviceName: this.deviceName,
        deviceId: this.deviceId
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