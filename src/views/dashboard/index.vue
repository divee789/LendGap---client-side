<template>
  <div class="dashboard">
    <transition>
      <div id="sidenav">
        <div>
          <router-link tag="DIV" to="/" class="logo">.lendgap</router-link>
          <ul class="sidenav-content">
            <router-link tag="li" to="/dashboard" class="nav-content">
              <span class="link"><span class="icon"><i class="fas fa-search-dollar"></i></span> Marketplace</span>
            </router-link>
            <router-link tag="li" to="/dashboard/borrow" class="nav-content">
              <span class="link"><span class="icon"><i class="fas fa-arrow-right"></i></span> Borrow</span>
            </router-link>
            <router-link tag="li" to="/dashboard/lend" class="nav-content">
             <span class="link"> <span class="icon"><i class="fas fa-arrow-left"></i></span> Lend</span>
            </router-link>
            <router-link tag="li" to="/dashboard/history" class="nav-content">
             <span class="link"> <span class="icon"><i class="far fa-clock"></i></span> History</span>
            </router-link>
            <router-link tag="li" to="/dashboard/Account" class="nav-content">
              <span class="link"><span class="icon"><i class="fas fa-user-circle"></i></span> Account</span>
            </router-link>
          </ul>
          <div class="clear"></div>
        </div>
      </div>
    </transition>

    <div class="mainContent">
      <div class="nav flexbox row">
        <div class="left">
          <span><i class="fas fa-search"></i></span>
          <input type="search" placeholder="Enter Keywords...">
        </div>
        <div class="right flexbox row">
          <div><span><i class="far fa-bell"></i></span></div>
          <div>Profile pic</div>
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
.dashboard {
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: hidden;
  font-size: 14px;
  font-family: "Poppins", cursive;
  #sidenav {
    position: fixed;
    background: #152c35;
    width: 15%;
    height: 100%;
    color: #fff;
    line-height: 1.3;
    z-index: 999999;
    box-sizing: border-box;
    .logo {
      text-align: center;
      font-size: 24px;
      padding:1rem;
      cursor: pointer;
      box-sizing: border-box;
    }
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
        font-size: 13px;
        padding: 20px 20%;
        cursor: pointer;
        .link{
          opacity: 0.7;
        }
        .icon {
          color: #ff2d6e;
          margin-right: 10px;
        }
        &:hover ,&.active{
          transition: all 0.3s;
          background: #ff2d6e;
          span {
            color: #fff;
          }
        }
      }
    }
  }
  .mainContent {
    padding-left: 15%;
    box-sizing: border-box;
    width: 100%;
    color: #000;
    box-sizing: border-box;
    .nav{
      padding:1rem;
      opacity:0.2;
      input{
        border:none;
        border-left:1px solid black;
        padding:0.5rem 1rem;
        font-style: italic;
        font-size:14px;
        font-family:'Open-Sans',sans-serif;
      }
      span{
        padding:1rem;
      }
      .right{
        margin-right: 4rem;;
      }
    }
  }
}
</style>

