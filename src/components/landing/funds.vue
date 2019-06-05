<template>
  <div class="funds-app">
    <img src="/images/head.jpg" alt>
    <div class="funds">
      <div class="text">
        <h1>Need Funds for a business or Project?</h1>
      </div>
      <div class="info">
        <p>Do you have a project or business that needs funding? LendGap pro offers startups and business owners access to crowd-funding facilities</p>
      </div>
      <div class="link">
        <button>Sign up for Pro</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.funds-app {
  position: relative;
  background: rgba(3, 191, 148, 1);
  height: 53vh;
  width: 100%;
  margin-top:3rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.3;
  }
  .funds {
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 50%;
    color: #ffffff;
    h1 {
      font-family: "Josefin Sans", sans-serif;
      width: 65%;
      font-size: 4.2rem;
      font-weight: bold;
      letter-spacing: -5px;
      line-height: 65px;
      text-shadow: 3px 4px rgba(0, 0, 0, 0.05);
      margin-bottom: 10px;
    }
    .info {
      width: 80%;
      font-family: "Open Sans";
      font-size: 15px;
      line-height: 25px;
    }
    button {
      padding: 0.8rem 2.6rem;
      font-family: "Open Sans";
      background-color: #ff2d6e;
      color:#fff;
      border:none;
      border-radius:5px;
      margin-top:2rem;
      cursor:pointer;
    }
  }
}
</style>

