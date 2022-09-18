<!-- my-page.vue -->
<template>
  <div>
    <h1>子应用1</h1>
    <!-- 
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
     -->
    <micro-app name='app1' :url='url' inline disableSandbox :data="microAppData" baseroute='/micro-app1'></micro-app>
  </div>
</template>

<script lang="ts">
import config from '../config'

export default {
  name: 'MicroView2',
  data () {
    return {
      url: `${config.app1}/app1`,
      microAppData: {msg: '来自基座的数据'}
    }
  }
}
</script>