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
    </div>
    <div class="row justify-content-center align-center">
      <div class="form form-group  col-10">
        <input class="input-material" type="password" name="password" v-model="user.password">
        <label class="label-material">PASSWORD</label>
      </div>
    </div>
    <div class="row justify-content-center align-center">
      <div class="form form-group  col-10">
        <input class="input-material" type="e-mail" name="email" v-model="user.email">
        <label class="label-material">E-MAIL</label>
      </div>
    </div>
    <div class="row justify-content-center align-center">
      <div class="col-1">
        <input class="input-material" type="checkbox" v-model="user.check" name="name">
      </div>
      <div class="col-9">
        <label class="material-check">I agree to all statements included in <a href="">terms of service</a></label>
      </div>
    </div>
    <div class="row justify-content-center align-center">
      <div class="col-3">
        <button class="btn btn-warning" @click="salvaUsuario">sign up</button>
      </div>
      <div class="col-7">
        <a href="">I am already a member</a>
      </div>
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
      }
    }
  },
  methods:{
    salvaUsuario (){
      if(!this.user.username){
        alert(`Preencha o campo Username`)
      } if (!this.user.password){
        alert(`Preencha o campo Password`)
      } if(!this.user.email){
        alert(`Preencha o campo E-mail`)
      } if(!this.user.check){
        alert(`Preencha o campo Check`)
      }else{
        this.$router.push({name:'Confirmação', params: this.user})
      }
    }
  }
}
</script>
