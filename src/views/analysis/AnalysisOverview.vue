<template>
  <div id="analysis-overview">
    <a-row :gutter='16'>
      <a-col :span='8'>
        <a-card class="box">
          
        </a-card>
      </a-col>
      <a-col :span='8'>
        <a-card class="box">
          
        </a-card>
      </a-col>
      <a-col :span='8'>
        <a-card class="box">
          
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter='16'>
      <a-col :span='12'>
        <a-card class="box">
          
        </a-card>
      </a-col>
      <a-col :span='12'>
        <a-card class="box">
          
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter='16'>
      <a-col :span='8'>
        <a-card class="box">
          
        </a-card>
      </a-col>
      <a-col :span='8'>
        <a-card class="box">
          
        </a-card>
      </a-col>
      <a-col :span='8'>
        <a-card class="box">
          
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