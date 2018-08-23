<template>
  <div class="form-container">
    <div class="row justify-content-center">
      <h2 class="form-title">Log In Your Account</h2>
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
        <button class="btn btn-warning" @click="salvaUsuario">LOG IN</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return{
      user:{
        username: '',
        password: ''
      }
    }
  },
  methods:{
    salvaUsuario (){
      if(!this.user.username){
        alert(`Preencha o campo Username`)
      } if (!this.user.password){
        alert(`Preencha o campo Password`)
      }
    }
  }
}
</script>
<style scoped>
.login{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
}
.form-title{
  color: #fcfcfc;
  font-size: 35px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1rem;
}
</style>
