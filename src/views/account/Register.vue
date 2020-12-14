<template>
  <div class="account">
    <div class="form-wrap">
      <a-form
        name="custom-validation"
        ref="ruleForm"
        :model="account_form"
        :rules="rules_form"
        @finish="handleFinish"
      >
        <a-form-item name="username">
          <label>用户名</label>
          <a-input
            v-model:value="account_form.username"
            type="text"
            autocomplete="off"
          />
        </a-form-item>

        <a-form-item name="password">
          <label>密码</label>
          <a-input
            v-model:value="account_form.password"
            type="password"
            autocomplete="off"
          />
        </a-form-item>

        <a-form-item name="passwords">
          <label>确认密码</label>
          <a-input
            v-model:value="account_form.passwords"
            type="password"
            autocomplete="off"
          />
        </a-form-item>

        <a-form-item name="code">
          <label>验证码</label>
          <a-row :gutter="15">
            <a-col :span="14">
              <a-input
                maxlength="6"
                v-model:value="account_form.code"
                type="text"
                autocomplete="off"
              />
            </a-col>
            <a-col :span="10">
              <a-button
                type="primary"
                @click="getCode"
                block
                :disabled="button_disabled"
                :loading="button_loading">
                {{ button_text }}
              </a-button>
            </a-col>
          </a-row>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" block>
            登录
          </a-button>
        </a-form-item>
      </a-form>
      <div class="text-center fs-12">
        <a href="" class="color-white">忘记密码</a> |
        <a href="" class="color-white">注册</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, toRefs, ref} from "vue";
import {message} from 'ant-design-vue';
// 导入验证类的方法
// import { checkPhone, checkPassword as password, checkCode as code } from "@/utils/verification";

export default defineComponent({
  name: "Login",
  components: {},
  setup(props) {
    const checkUsername = async (rule: any, value: any, callback: any) => {
      if (!Number.isInteger(value)) {
        return Promise.reject('请输入用户名') // 错误的情况
      }
      if (!value) {
        return Promise.reject('请输入用户名')
      } else {
        if (value < 18) {
          return Promise.reject('请输入用户名')
        } else {
          return Promise.resolve()
        }
      }
    }

    const formConfig = reactive({ // 类似于JSON对象的语法
      layout: {
        labelCol: {span: 10},
        wrapperCol: {span: 14},
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      account_form: {
        username: "",
        password: "",
        passwords: "",
        code: ""
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      rules_form: {
        username: [{validator: checkUsername, trigger: 'change'}],
        // password: [{ validator: checkPassword, trigger: 'change' }],
        // passwords: [{ validator: checkPasswords, trigger: 'change' }],
        // code: [{ validator: checkCode, trigger: 'change' }]
      }
    })
    const data = toRefs(formConfig)
    // 提交表单
    const handleFinish = () => {
      alert(111)
    }

    return {
      ...data,
      handleFinish
    }
  }

});
</script>
<style lang="scss">
@import "./style.scss";
</style>
