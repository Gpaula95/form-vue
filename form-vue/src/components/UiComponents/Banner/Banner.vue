<template>
    <div class="banner">
        <div class="banner-title">
         <span> Discover the most exciting places on our planet </span>            
        </div>
        <img src="@/assets/img/banner.png" alt="">
    </div>
</template>
<style lang="scss">
.banner{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background-color: #FF6900;
    &-title{
        color: #FFE4D1;
        font-size: 35px;
        width: 70%;
        text-align: center;
        margin-bottom: 1rem;
    }
}
</style>