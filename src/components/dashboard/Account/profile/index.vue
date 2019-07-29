<template>
  <div class="profile-app">
    <app-info></app-info>
    <app-employment></app-employment>
    <app-identity></app-identity>
    <div>
      <button><span class="ripple"></span> SAVE</button>
    </div>
  </div>
</template>

<script>
export default {
  components:{
    "app-info": () => import("@/components/dashboard/Account/profile/information"),
    "app-employment": () => import("@/components/dashboard/Account/profile/employment"),
    "app-identity": () => import("@/components/dashboard/Account/profile/identification")
  }
}; 
</script>

<style lang="scss" scoped>
.profile-app {
  box-sizing: border-box;
  button{
      position: relative;
      background-color: #03bf94;
      padding: 1rem 7rem;
      color: #fff;
      font-weight: 500;
      font-size: 11px;
  }
}
</style>

