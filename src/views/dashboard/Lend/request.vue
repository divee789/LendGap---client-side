<template>
  <div class="app">
    <div class="app-body josebold">
      <div>Icon</div>
    
      <div>
        <button @click="toInfo">
          <span class="ripple"></span>OFFER A LOAN
        </button>
      </div>

        <div class="info">
        You now have
        <span>3 unused loan offers </span>remaining
      </div>
    </div>
  </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
  methods: {
    toInfo() {setTimeout(()=>{
      this.$router.push("/dashboard/lend/details");       
    },2000)
    }
  }
};
</script>
<style lang="scss" scoped>
.app {
  background: #f7f7f7;
  height: 90vh;
  .app-body {
    text-align: center;
    padding-top: 15%;
      @media screen and (max-width:$breakpoint-mobile){
          padding-top:25%;
        }
    .info{
      margin-top:2.5rem;
    }
    div {
      margin-bottom: 5px;
      font-size: 11px;
      span {
        color: red;
        cursor: pointer;
      }
      button {
        position: relative;
        background-color: #03bf94;
        margin-top: 2rem;
        padding: 0.9rem 1.2rem;
        color: #fff;
        font-weight: bold;
        font-size: 11px;
        width: 15%;
        @media screen and (max-width:$breakpoint-mobile){
          width:50%;
        }
      }
    }
  }
}
</style>

