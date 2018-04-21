<template>
  <div id="app">
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import LoginForm from './components/LoginForm'
export default {
  name: 'app',
  components: {
    'LoginForm': LoginForm
  }
}
</script>

<style>
#app {

}
</style>
