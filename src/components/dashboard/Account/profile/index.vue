<template>
  <div class="profile-app">
    <app-info></app-info>
  </div>
</template>

<script>
export default {
  components:{
    "app-info": () => import("@/components/dashboard/Account/profile/information")    
  }
}; 
</script>

<style lang="scss" scoped>
.profile-app {
  box-sizing: border-box;
}
</style>

