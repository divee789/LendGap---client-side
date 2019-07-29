<template>
  <div class="app-account">
    <div class="title">Linked Accounts</div>
    <div class="head">FACEBOOK</div>
    <div>
      <button class="facebook jose vice">
        <span>
          XX
          <i class="fab fa-facebook-f"></i>
        </span> Connected
      </button>
      <span class="url">www.facebook.com/mercydaniels...</span>
    </div>
    <div class="head">GOOGLE</div>
    <div>
      <button class="google jose vice">
        <span>
          XX
          <i class="fab fa-google"></i>
        </span> Connect
      </button>
    </div>
    <div class="head">LINKED IN</div>
    <div>
      <button class="linkedin jose vice">
        <span>
          XX
          <i class="fab fa-linkedin"></i>
        </span> Connect
      </button>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.title {
  margin: 4rem 0;
  margin-top: 6rem;
  font-size: 32px;
  color: #a4a4a4;
}
.head {
  color: #a4a4a4;
  font-size: 11px;
  margin-bottom: 1rem;
  margin-top: 3rem;
}
.vice {
  position: relative;
  color: #fff;
  font-size: 15px;
  padding: 1rem 0rem;
  width: 30%;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    font-size: 11px;
  }
}
.facebook {
  background-color: #335a9e;
}
.google {
  background-color: #f03b2c;
}
span {
  position: absolute;
  top: 30%;
  left: 10%;
}
.url {
  position: relative;
  top: unset;
  left: unset;
  margin-left: 1rem;
  color: #a4a4a4;
}
</style>


