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
        <button class="btn btn-warning" @click="corrigirCadastro()">Correct Data</button>
        <button class="btn btn-warning" @click="confirmacaoCadastro()">Confirm</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return{
      user:{
        username: '',
        email: ''
      }
    }
  },
  created () {
      this.user = this.$route.params
  },
  methods:{
    confirmacaoCadastro () {
        this.$router.push({name:'Agradecimento', params: this.user})
    },
    corrigirCadastro () {
        this.$router.push({name:'Cadastro', params: this.user})
    }
  }
}
</script>
