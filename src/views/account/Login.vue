<template>
  <div class="account">
    <div class="form-wrap">
      <a-form
        name="custom-validation"
        ref="ruleForm"
      >
        <a-form-item>
          <label>用户名</label>
          <a-input type="password" autocomplete="off"></a-input>
        </a-form-item>

        <a-form-item>
          <label>密码</label>
          <a-input type="password" autocomplete="off"></a-input>
        </a-form-item>

        <a-form-item>

          <Captcha />
<!--          <div id="captcha-dom" class="nc-container"></div>-->
          <!--No-Captcha渲染的位置，其中 class 中必须包含 nc-container-->
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" block>
            登录
          </a-button>
        </a-form-item>
      </a-form>

      <div class="text-center fs-12">
        <a href="" class="color-white">忘记密码</a> |
        <router-link to="/register">注册</router-link>
      </div>
    </div>

  </div>
</template>

<script>
import {reactive, onMounted} from "vue"
import Captcha from '@/components/Captcha'

export default {
  name: "Login",
  components: {
    Captcha
  },
  setup(props){

    const formConfig = reactive({
      layout: {
        labelCol: {span: 4},
        wrapperlCol: {span: 14},
      }
    })



    return {
      formConfig
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style.scss";

</style>
