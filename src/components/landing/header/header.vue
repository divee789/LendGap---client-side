<template>
  <div class="hello">
    <div class="overlay">
      <header class="josebold">
        <a href class="logo">.lendGap</a>
        <div class="menu-toggle"></div>
        <nav class="nav">
          <ul class="nav-bar" id="ul">
            <li>
              <a href="#yip">Become a lender</a>
            </li>
            <li>
              <a href="#products" id="button">Help</a>
            </li>
            <li>
              <a href>Log in</a>
            </li>
            <router-link tag="li" to="/sign-in" id="rr">
              <a>Sign up</a>
            </router-link>
          </ul>
        </nav>
        <div class="clearfix"></div>
      </header>

      <div class="info">
        <h1 class="josebold">Get a quick Loan whenever you need it</h1>
        <p>With LendGap, you can now borrow money quickly and easily</p>
        <p>
          <button>REQUEST FOR LOAN</button>
        </p>
      </div>
    </div>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./header.scss";
</style>
