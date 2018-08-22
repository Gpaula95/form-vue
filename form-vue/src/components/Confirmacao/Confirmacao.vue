<template>
  <div class="form-container">
    <div class="row justify-content-center">
      <h2 class="form-title">Confirm Your Data</h2>
    </div>
    <div class="row justify-content-center align-center">
      <div class="form form-group col-10">
        <input class="input-material" type="text" name="name" v-model="user.username" disabled>
        <label class="label-material">USERNAME</label>
      </div>
    </div>
    <div class="row justify-content-center align-center">
      <div class="form form-group  col-10">
        <input class="input-material" type="e-mail" name="email" v-model="user.email" disabled>
        <label class="label-material">E-MAIL</label>
      </div>
    </div>
    <div class="row justify-content-center align-center">
      <div class="col-4">
        <button class="btn btn-warning" @click="salvaUsuario">Correct Data</button>
      </div>
      <div class="col-6 ">
        <button class="btn btn-warning" @click="salvaUsuario">Confirm</button>
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
        email: ''
      }
    }
  },
  created () {
      this.user = this.$route.params
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
