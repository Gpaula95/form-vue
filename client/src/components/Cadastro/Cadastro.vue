<template>
  <div class="form-container">
    <div class="row justify-content-center">
      <h2 class="form-title">Sign up for Beta</h2>
    </div>
    <div class="row justify-content-center align-center">
      <div class="form form-group col-10">
        <input class="input-material" type="text" name="name" v-model="user.username">
        <label class="label-material">USERNAME</label>
      </div>
        <span v-show="errorUser" class="error">Opss, required field !</span>
    </div>
    <div class="row justify-content-center align-center">
      <div class="form form-group  col-10">
        <input class="input-material" type="password" name="password" v-model="user.password">
        <label class="label-material">PASSWORD</label>
      </div>
        <span class="error" v-show="errorPass">Opss, required field !</span>
    </div>
    <div class="row justify-content-center align-center">
      <div class="form form-group  col-10">
        <input class="input-material" type="e-mail" name="email" v-model="user.email">
        <label class="label-material">E-MAIL</label>
      </div>
        <span class="error" v-show="errorEmail">Opss, required field !</span>
    </div>
    <div class="row justify-content-center align-center">
      <div class="col-10 material-checkbox">
        <input id="i2" v-model="user.check" type="checkbox" checked>
        <label for="i2">I agree to all statements included in <a href="" class="link">terms of service</a></label>
      </div>
        <span class="error" v-show="errorCheck">Opss, required field !</span>
    </div>
    <div class="row justify-content-center align-center">
        <button class="btn btn-warning" @click="salvaUsuario">sign up</button>
        <a href="" class="link">I am already a member</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return{
      user:{
        username: '',
        password: '',
        email: '',
        check: ''
      },
      errorUser: false,
      errorPass: false,
      errorEmail: false,
      errorCheck: false
    }
  },
  created () {
    if(this.$route.params){
      this.user = this.$route.params
    }
  },
  methods:{
    salvaUsuario (){
      if(!this.user.username){
        this.errorUser = true
        return 0
      } if (!this.user.password){
        this.errorPass = true
        return 0
      } if(!this.user.email){
        this.errorEmail = true
        return 0
      } if(!this.user.check){
        this.errorCheck = true
        return 0
      }else{
        this.$router.push({name:'Confirmação', params: this.user})
      }
    }
  }
}
</script>
