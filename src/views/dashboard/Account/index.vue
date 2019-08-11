<template>
  <div class="app">
    <div class="loan-options flexbox row">
      <div class="opt req josebold" :class="{active:one}" @click="changeOne">Profile</div>
      <div class="opt offer josebold" :class="{active:two}" @click="changeTwo">Bank Details</div>
      <div class="opt settings josebold" :class="{active:three}" @click="changeThree">Settings</div>
    </div>

    <div class="content">
      <component :is="selectedComponent"></component>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {    
      one: true,
      two: false,
      three: false,
      selectedComponent: "app-profile"
    };
  },
  methods: {
    changeOne() {
      this.three = false;
      this.one = true;
      this.two = false;
      this.selectedComponent = "app-profile";
    },
    changeTwo() {
      this.one = false;
      this.two = true;
      this.three = false;
      this.selectedComponent = "app-bank";
    },
    changeThree() {
      this.two = false;
      this.three = true;
      this.one = false;
      this.selectedComponent = "app-settings";
    }
  },
  components: {
    "app-profile": () => import("@/components/dashboard/Account/profile/index"),
    "app-bank": () => import("@/components/dashboard/Account/bank"),
    "app-settings": () => import("@/components/dashboard/Account/settings/index")
  }
};
</script>

<style lang="scss" scoped>
.app {
  background: #f7f7f7;
  padding-bottom:3rem;
  margin-top: -0.5rem;
  .loan-options {
    justify-content: center;
    align-content: center;
    width: 40%;
    margin: 0 auto;
    padding-top: 2rem;
    margin-bottom: 7rem;
    @media screen and (max-width: $breakpoint-tablet) {
      width: 90%;
    }
  }
  .opt {
    font-size: 13px;
    padding: 0.85em 1rem;
    cursor: pointer;
    width: 30%;
    text-align: center;
    background-color: #d8d8d8;
    color:#193652;
    transition: all 0.5s;
    &:hover {
      background-color: $main-theme;
      color: #fff;
    }
  }
  .active {
    background-color: $main-theme;
    color: #fff;
  }
  .req {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .offer {
    border-left: 1px solid #c3c3c3;
    border-right: 1px solid #c3c3c3;
  }
  .settings {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  }
  .content{
    margin:0 15%;
  }
}
</style>


