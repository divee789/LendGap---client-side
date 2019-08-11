<template>
  <div class="dashboard">
    <transition name="slide">
      <div class="sidenav" :class="{smallWidth:!show,normWidth:show}">
        <div>
          <router-link tag="DIV" to="/" class="logo">
            <span v-if="!show" class="fas fa-home"></span>
            <span v-if="show">.lendgap</span>
          </router-link>
          <ul class="sidenav-content">
            <router-link tag="li" to="/dashboard" class="nav-content">
              <span class="link">
                <span class="icon">
                  <i class="fas fa-search-dollar"></i>
                </span>
                <span v-if="show" class="option-text">Marketplace</span>
              </span>
            </router-link>
            <router-link tag="li" to="/dashboard/borrow" class="nav-content">
              <span class="link">
                <span class="icon">
                  <i class="fas fa-arrow-right"></i>
                </span>
                <span v-if="show" class="option-text">Borrow</span>
              </span>
            </router-link>
            <router-link tag="li" to="/dashboard/lend" class="nav-content">
              <span class="link">
                <span class="icon">
                  <i class="fas fa-arrow-left"></i>
                </span>
                <span v-if="show" class="option-text">Lend</span>
              </span>
            </router-link>
            <router-link tag="li" to="/dashboard/history" class="nav-content">
              <span class="link">
                <span class="icon">
                  <i class="far fa-clock"></i>
                </span>
                <span v-if="show" class="option-text">History</span>
              </span>
            </router-link>
            <router-link tag="li" to="/dashboard/Account" class="nav-content">
              <span class="link">
                <span class="icon">
                  <i class="fas fa-user-circle"></i>
                </span>
                <span v-if="show" class="option-text">Account</span>
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
        <div>
          <span class="hamburger">X</span>
        </div>
        <div class="left">
          <span>
            <i class="fas fa-search"></i>
          </span>
          <input type="search" placeholder="Enter Keywords..." />
        </div>
        <div class="right flexbox row">
          <div>
            <span id="bell">
              <i class="far fa-bell"></i>
            </span>
          </div>
          <div>
            <img src="/images/mercy_daniels.jpg" alt />
          </div>
          <div class="name">Mercy Daniels</div>
        </div>
      </div>
      <div>
        <transition name="slide2">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      hide: false
    };
  },
  methods: {},
  mounted() {
    var menu = document.querySelector(".hamburger");
    menu.addEventListener("click", () => {
      document.querySelector(".sidenav").classList.toggle("active");
    });
  }
};
</script> 9

<style lang="scss" scoped>
img {
  height: 40px;
  width: 38px;
  border-radius: 50%;
  margin-right: 5px;
  margin-top: 0.4rem;
  filter: grayscale(0.5);
}
.name {
  margin-top: 1.2rem;
  margin-left: 5px;
}
.smallWidth {
  width: 4.5%;
  @media screen and (max-width: $breakpoint-tablet) {
    width: 10%;
  }
}
.normWidth {
  width: 17%;
}

.dashboard {
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: hidden;
  font-size: 14px;
  font-family: "Josefin Sans", sans-serif;
  .sidenav {
    position: fixed;
    background: #152c35;
    box-shadow: 4px 6px 20px rgba(0, 0, 0, 0.2);
    height: 89%;
    margin: 0.5rem 0.5rem;
    border-radius: 8px;
    color: #fff;
    line-height: 1.3;
    z-index: 999999;
    box-sizing: border-box;
    transition: all 0.4s;
    @media screen and (max-width: $breakpoint-mobile) {
      display: none;
      &.active {
        display: block;
        margin: 0;
        margin-top: 3.3rem;
      }
    }
    .fas,
    .far {
      font-size: 20px;
    }
   
    .fa-chevron-left{
       position: absolute;
      bottom: 10%;
      right: 50%;
      cursor: pointer;
      font-size: 36px;
      z-index: 9999999999999999999;
      color: $main-theme;
      &:hover {
        color: #fff;
      }
    }
    
    .fa-chevron-right {
      position: absolute;
      bottom: 10%;
      right: 35%;
      cursor: pointer;
      font-size: 36px;
      z-index: 9999999999999999999;
      color: $main-theme;
      &:hover {
        color: #fff;
      }
    }
    .logo {
      text-align: center;
      margin-top: 0.5rem;
      font-size: 24px;
      padding: 1rem;
      cursor: pointer;
      box-sizing: border-box;
      .fa-home {
        color: $main-theme;
        margin-right: 10px;
        &:hover {
          color: #fff;
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
        padding: 20px 10%;
        cursor: pointer;
        .link {
          opacity: 0.7;
          margin-left:25%;
        }
        .icon {
          color: $main-theme;
          margin-right: 0;
        }
        &:hover {
          transition: all 0.3s;
          background: $main-theme;
          span {
            color: #fff;
          }
        }
       .option-text{
         margin-left:10px;
       }
      }
    }
  }
  .smallPad {
    padding-left: 6%;
  }
  .normPad {
    padding-left: 18%;
  }
  .mainContent {
    box-sizing: border-box;
    width: 100%;
    color: #000;
    box-sizing: border-box;
    transition: padding 0.4s;
    @media screen and (max-width: $breakpoint-mobile) {
      padding-left: 0;
    }
    .nav {
      padding: 0.8rem;
      padding-top:0.5rem;
      opacity: 0.4;
      justify-content: space-around;
      @media screen and (max-width: $breakpoint-mobile) {
        padding: 0.3rem;
        opacity: 0.5;
      }
      .hamburger {
        font-size: 25px;
        display: none;
        padding: 0;
        @media screen and (max-width: $breakpoint-mobile) {
          display: block;
          margin-top:10px;
          margin-left:-2.5rem;
        }
      }
      .left {
        width: 70%;
        margin-top:1rem;
        @media screen and (max-width: $breakpoint-mobile) {
          width: unset;
          margin-left:10px;
          display: none;
        }  
      }
      .right{
        @media screen and (max-width:$breakpoint-mobile){
          margin-right: -2.5rem; 
        }
      }
      input {
        border: none;
        border-left: 1px solid black;
        padding: 0.5rem 1rem;
        font-style: italic;
        font-size: 14px;
        font-family: "Open Sans", sans-serif;
        &:focus{
          outline: none;
        }
        @media screen and (max-width: $breakpoint-mobile) {
        }

      }
      span {
        padding: 1rem;
        font-size: 18px;
      }
    }
    #bell{
      padding:2rem;
    }
     .fa-bell{
      margin-top:0.8rem;
      font-size:25px;
    }
  }
}

.slide-enter {
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}

.slide2-enter {
}
.slide2-enter-active {
  animation: slider-in 200ms ease-out forwards;
  transition: opacity 200ms;
}
.slide2-leave {
}
.slide2-leave-active {
  animation: slider-out 200ms ease-out forwards;
  transition: opacity 200ms;
}
@keyframes slider-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slider-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-20px);
    opacity: 0;
  }
}
</style>

