<template>
  <div class="main">
    <div class="main-banner none-mobile">
      <banner-login></banner-login>
    </div>
    <div class="col-6 col-sm-12">
      <button-login></button-login>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import Banner from './UiComponents/Banner/Banner'
  import LoginButton from './UiComponents/LoginButton/LoginButton'
  export default {
    components: {
      'banner-login': Banner,
      'button-login': LoginButton,
    }
  }

</script>
<style lang="scss" scoped>

.main {
  display: flex;
  width: 100%;
  height: 100vh;
  &-content {
    width: 50%;
  }
  &-banner{
    width: 50%;
  }
}
</style>
