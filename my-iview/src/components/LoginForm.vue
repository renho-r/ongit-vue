<template>
    <Form ref="loginForm" :model="loginForm" :rules="ruleInline" inline>
        <FormItem prop="user">
            <Input type="text" v-model="loginForm.username" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="loginForm.password" placeholder="Password">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('loginForm')">登录</Button>
        </FormItem>
    </Form>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        user: '',
        password: ''
      },
      ruleInline: {
        username: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { type: 'string', min: 1, message: '密码长度不能小于1位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$store.dispatch('Login', this.loginForm).then(() => {
            this.$Message.success('提交成功!')
            this.loading = false
            this.$router.push({path: '/'})
          }).catch(() => {
            this.$Message.success('提交失败!')
            this.loading = false
          })
        } else {
          this.$Message.error('表单验证失败!')
        }
      })
    }
  }
}
</script>
