<template>
    <div class= "app"> 
      <div class="app-body josebold">
          <div>Icon</div>
          <div>You now have <span>3 unused loan requests </span>remaining</div>
          <div><button @click="toInfo"><span class="ripple"></span>REQUEST FOR LOAN</button></div>
       </div>
  </div>
</template>
<script>
export default {
    methods:{
        toInfo(){
            this.$router.push("/dashboard/borrow/Info")
        }
    }
}
</script>
<style lang="scss" scoped>
.app{
    background:#e0dede;
    height:90vh;
    .app-body{
        text-align:center;
        padding-top:15%;
        div{
            margin-bottom:5px;
            font-size:11px;
            span{
                color:red;
                cursor:pointer;
            }
             button{
     position: relative;
      background-color: #03bf94;
      margin-top:2rem;
      padding: 0.9rem 1.2rem;
      color: #fff;
      border: none;
      font-weight: bold;
      font-size: 11px;
      width: 15%;
      border-radius: 5px;
      cursor: pointer;
       .ripple {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #FFF;
        top: 0;
        left: 0;
        transform: scale(0);
        opacity: 0.5;
      }
  }
}
button:hover>.ripple {
  animation: ripple-in2 2s;
}
@keyframes ripple-in2 {
  0% {
    transform: scaleX(0);
  }

  20% {
    transform: scaleX(1);
    opacity: 0.3;
  }

  100% {
    transform: scaleX(1);
    opacity: 0;
  }
        }
    }
}
</style>

