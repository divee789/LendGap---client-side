<template>
  <div class="dashboard">
    <transition name="slide">
      <div id="sidenav" :class="{smallWidth:!show,normWidth:show}">
        <div>
          
          <router-link tag="DIV" to="/" class="logo"><span v-if="!show" class="fas fa-home"></span><span v-if="show">.lendgap</span></router-link>
          <ul class="sidenav-content">
            <router-link tag="li" to="/dashboard" class="nav-content">
              <span class="link">
                <span class="icon">
                  <i class="fas fa-search-dollar"></i>
                </span><span v-if="show"> Marketplace</span>
              </span>
            </router-link>
            <router-link tag="li" to="/dashboard/borrow" class="nav-content">
              <span class="link">
                <span class="icon">
                  <i class="fas fa-arrow-right"></i>
                </span> <span v-if="show">Borrow</span>
              </span>
            </router-link>
            <router-link tag="li" to="/dashboard/lend" class="nav-content">
              <span class="link">
                <span class="icon">
                  <i class="fas fa-arrow-left"></i>
                </span> <span v-if="show">Lend</span>
              </span>
            </router-link>
            <router-link tag="li" to="/dashboard/history" class="nav-content">
              <span class="link">
                <span class="icon">
                  <i class="far fa-clock"></i>
                </span> <span v-if="show">History</span>
              </span>
            </router-link>
            <router-link tag="li" to="/dashboard/Account" class="nav-content">
              <span class="link">
                <span class="icon">
                  <i class="fas fa-user-circle"></i>
                </span> <span v-if="show">Account</span>
              </span>
            </router-link>
          </ul>
          <div class="clear"></div>
        </div>
        <div class="arrow">
          <span class="fas fa-chevron-left" v-if="show" @click="show=!show"></span>
          <span class="fas fa-chevron-right" v-if="!show" @click="show=!show"></span>
        </div>
      </div>
    </transition>

    <div class="mainContent" :class="{smallPad:!show,normPad:show}">
      <div class="nav flexbox row">
        <div class="left">
          <span>
            <i class="fas fa-search"></i>
          </span>
          <input type="search" placeholder="Enter Keywords..." />
        </div>
        <div class="right flexbox row">
          <div>
            <span>
              <i class="far fa-bell"></i>
            </span>
          </div>
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
export default {
  data() {
    return {
      show: true
    };
  },
  methods:{
   
  }
};
</script>

<style lang="scss" scoped>
.smallWidth{
  width:6%;
}
.normWidth{
  width:17%;
}
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
    height: 100%;
    color: #fff;
    line-height: 1.3;
    z-index: 999999;
    box-sizing: border-box;
    transition: width 0.4s;
    .fas,.far{
      font-size:20px;
    }
    .fa-chevron-left,.fa-chevron-right{
      position:absolute;
      bottom:10%;
      right:50%;
      cursor: pointer;
      font-size:36px;
      z-index: 9999999999999999999;
      color:#ff2d6e;
      &:hover{
        color:#fff;
      }
    }
    .logo {
      text-align: center;
      margin-top:1rem;
      font-size: 24px;
      padding: 1rem;
      cursor: pointer;
      box-sizing: border-box;
      .fa-home{
         color: #ff2d6e;
          margin-right: 10px;
          &:hover{
            color:#fff;
          }
      }
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
        font-size: 15px;
        padding: 25px 10%;
        cursor: pointer;
        .link {
          opacity: 0.7;
          margin: 0 15%;
        }
        .icon {
          color: #ff2d6e;
          margin-right: 10px;
        }
        &:hover,
        &.active {
          transition: all 0.3s;
          background: #ff2d6e;
          span {
            color: #fff;
          }
        }
      }
    }
  }
  .smallPad{
   padding-left:6%;
  }
  .normPad{
    padding-left:17%;
  }
  .mainContent {
    box-sizing: border-box;
    width: 100%;
    color: #000;
    box-sizing: border-box;
    transition: padding 0.4s;
    .nav {
      padding: 1rem;
      opacity: 0.2;
      input {
        border: none;
        border-left: 1px solid black;
        padding: 0.5rem 1rem;
        font-style: italic;
        font-size: 14px;
        font-family: "Open Sans", sans-serif;
        &:focus {
          outline: none;
        }
      }
      span {
        padding: 1rem;
        font-size: 28px;
      }
      .right {
        margin-right: 4rem;
      }
    }
  }
}



</style>

