<template>
  <div class="app">
    <div class="app-body josebold">
      <div>
        <span class="far fa-clock"></span>
      </div>
      <div>Your loan offer was submitted successfully</div>
      <div>
        You now have
        <span>2 unused loan offers </span>remaining
      </div>
      <div>
        <button @click="toDetails">
          <span class="ripple"></span>VIEW DETAILS
        </button>
      </div>
      <div class="else" @click="toInfo">or Offer another loan</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toInfo() {
      this.$router.push("/dashboard/lend");
    },
    toDetails() {
      this.$router.push("/dashboard/lend/details");
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
    color:#a4a4a4;
      @media screen and (max-width:$breakpoint-mobile){
          padding-top:25%;
        }
    div {
      margin-bottom: 5px;
      font-size: 11px;
      span {
        color: red;
        cursor: pointer;
        font-size:14.4px;
      }
      button {
        position: relative;
        background-color: #03bf94;
        margin-top: 2rem;
        padding: 1.5rem 1.5rem;
        color: #fff;
        font-weight: bold;
        font-size: 13px;
        width: 25%;
          @media screen and (max-width:$breakpoint-mobile){
          width:70%;
        }
      }
    }
    .else {
      font-size: 11px;
      margin-top: 2rem;
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>

