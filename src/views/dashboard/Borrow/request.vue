<template>
  <div class="app">
    <div class="app-body josebold">
      <div>Icon</div>
      <div>
        You now have
        <span>3 unused loan requests</span>remaining
      </div>
      <div>
        <button @click="toInfo">
          <span class="ripple"></span>REQUEST FOR LOAN
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toInfo() {
      this.$router.push("/dashboard/borrow/Info");
    }
  }
};
</script>
<style lang="scss" scoped>
.app {
  background: #e0dede;
  height: 90vh;
  .app-body {
    text-align: center;
    padding-top: 15%;
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
      }
    }
  }
}
</style>

