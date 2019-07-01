<template>
  <div class="dashboard">
    <div id="sidenav">
      <div>
        <router-link tag="DIV" to="/dashboard/Account" class="LOGO">Account</router-link>
        <ul class="sidenav-content">
          <router-link tag="li" to="/dashboard" class="nav-content">Marketplace</router-link>
          <router-link tag="li" to="/dashboard/borrow" class="nav-content">Borrow</router-link>
          <router-link tag="li" to="/dashboard/lend" class="nav-content">Lend</router-link>
          <router-link tag="li" to="/dashboard/history" class="nav-content">History</router-link>
          <router-link tag="li" to="/dashboard/Account" class="nav-content">Account</router-link>
        </ul>
        <div class="clear"></div>
      </div>
    </div>

    <div class="mainContent">
      <div class="nav">
        <div class="left">
          <input type="search">
        </div>
        <div class="right">
          <div>notifications</div>
          <div>Profile picture</div>
          <div>Profile name</div>
        </div>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

ul {
  border: 0;
  font-weight: normal;
  line-height: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  text-decoration: none;
  li {
    transition: all 0.5s;
    font-size: 15px;
    margin-top: 15px;
    cursor:pointer;
    &:hover {
      color: #000;
      text-decoration: none;
      color: #fff;
      transition: all 0.3s;
    }
  }
}
</style>

