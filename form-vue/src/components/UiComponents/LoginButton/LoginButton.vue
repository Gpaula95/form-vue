<template>
  <div>
    <div class="box-button">
      <a class="signup" @click="chamaRouter()" :class="{active: isActive}">Sign up</a>
      <a class="login" @click="chamaRouter()" :class="{active: !isActive}">log in</a>
    </div>
  </div>
</template>
<script>
export default {
    data () {
        return{
            signActive: true,
            loginActive: true,
            isActive: true
        }
    },
    methods: {
        chamaRouter () {
            this.isActive = !this.isActive
            if(this.isActive){
                this.$router.push({name: 'Cadastro'})
            } else {
                this.$router.push({name: 'Login'})
            }
        }
    }
}
</script>

<style lang="scss">
.box-button{
  margin: 1rem;
  display: flex;
  justify-content: flex-end;
  color: #bbbbbb;
  text-transform: uppercase; 
  font-weight: 600;
  font-size: 13px;
  align-items: center;
  cursor: pointer;
  .login{
    border: 1px solid #5a5a5a;
    padding: 5px 15px;
    border-radius: 0px 15px 15px 0px;
  }
  .signup{
    border: 1px solid #5a5a5a;
    padding: 5px 15px;
    border-radius: 15px 0px 0px 15px;
  }
  .active{
      background-color: #5a5a5a;
  }
}
</style>
