<template>
  <div class="settings-app">
    <app-email></app-email>
    <app-accounts></app-accounts>
    <app-password></app-password>
  </div>
</template>

<script>
export default {
  components: {
    "app-email": () =>
      import("@/components/dashboard/Account/settings/email.vue"),
      "app-accounts": () =>
      import("@/components/dashboard/Account/settings/accounts.vue"),
      "app-password": () =>
      import("@/components/dashboard/Account/settings/password.vue"),
  }
};
</script>

<style lang="scss" scoped>
.settings-app{
  @media screen and (max-width:$breakpoint-mobile){
 margin:0 -10%;
  }
 
}
</style>

