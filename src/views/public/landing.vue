<template>
    <div class="landing">
        <app-header></app-header>
        <app-purpose></app-purpose>
        <market-place></market-place>
        <app-funds></app-funds>
        <app-reason></app-reason>
        <app-footer></app-footer>
    </div>
</template>

<script>
export default {
    components: {
    "app-header": () => import("@/components/landing/header"),
    "market-place":()=> import("@/components/landing/market"),
    "app-purpose": () => import("@/components/landing/purpose"),
    "app-funds": () => import("@/components/landing/funds"),
    "app-reason": () => import("@/components/landing/reason"),
    "app-footer": () => import("@/components/landing/footer")
  }
}
</script>
<style lang="scss" scoped>

</style>


