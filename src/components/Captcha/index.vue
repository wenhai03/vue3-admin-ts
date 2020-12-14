<template>
  <div class="captcha-wrap">
    <div id="captcha-dom" class="nc-container"></div>

  </div>
</template>

<script>
import './captcha'
import {onMounted} from 'vue'

export default {
  name: "Captcha",
  setup () {
    onMounted(() => {
      // eslint-disable-next-line @typescript-eslint/camelcase
      const nv_token = ['FFFF0N00000000009931', (new Date().getTime(), Math.random())].join(':');
      // eslint-disable-next-line @typescript-eslint/camelcase
      const NC_Opt = {
        renderTo: '#captcha-dom',
        appkey: 'FFFF0N00000000009931',
        scene: 'nc_login',
        // eslint-disable-next-line @typescript-eslint/camelcase
        token: nv_token,
        customWidth: 300,
        trans: {"key1": "code0"},
        elementID: ['usernameID'],
        // eslint-disable-next-line @typescript-eslint/camelcase
        is_Opt: 0,
        language: 'cn',
        isEnabled: true,
        timeout: 3000,
        times: 5,
        apimap: {},
        callback: function (data){
          // eslint-disable-next-line no-undef
          window.console && console.log(nc_token)
          window.console && console.log(data.csession)
          window.console && console.log(data.sig)
        }
      }
      // eslint-disable-next-line no-undef
      const nc = new noCaptcha(NC_Opt)
      nc.upLang('cn', {
        _startTEXT: '请按住滑块，拖动到最右边',
        _yesTEXT: '验证通过',
        _error300: '哎呀，出错了，点击<a href="javascript:_nc.reset()">刷新</a>再来一次',
        _errorNetwork: '网络不给力，请<a href="javascript:_nc.reset()">点击刷新</a>',
      })

    })
  }
}
</script>

<style lang="scss">
.captcha-wrap {
  .nc-container #nc_1_wrapper {
    width: auto !important;
  }
  .nc-container .nc_scale span {
    height: auto;
  }
  .nc-container .nc_scale .btn_ok {
    line-height: 32px;
  }
}

</style>
