<template>
  <div id="analysis-overview">
    <a-row :gutter='16'>
      <a-col :span='8'>
        <a-card class="box">
          {{devices[0].time}}
        </a-card>
      </a-col>
      <a-col :span='8'>
        <a-card class="box">
          2
        </a-card>
      </a-col>
      <a-col :span='8'>
        <a-card class="box">
          3
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter='16'>
      <a-col :span='12'>
        <a-card class="box">
          4
        </a-card>
      </a-col>
      <a-col :span='12'>
        <a-card class="box">
          5
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter='16'>
      <a-col :span='8'>
        <a-card class="box">
          6
        </a-card>
      </a-col>
      <a-col :span='8'>
        <a-card class="box">
          7
        </a-card>
      </a-col>
      <a-col :span='8'>
        <a-card class="box">
          8
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import {Row, Col, Card} from 'ant-design-vue'

export default {
  components: {
    ARow: Row,
    ACol: Col,
    ACard: Card
  },
  computed: {
    devices: function() {
      const devices = this.$store.state.devices
    }
  }
}
</script>

<style>
#analysis-overview {
  /* background-color: rgb(243, 243, 243); */
  width: 100%;
  height: 100%;
}

.ant-row {
  margin-bottom: 10px;
}

#analysis-overview .box {
  min-height: 300px;
}
</style>