<template>
  <div class="market">
    <div>
      <h2 class="josebold">Marketplace</h2>
      <p>See some existing loan offers by top lenders from which you can benefit.</p>
      <p>Lenders are always available to offer you the best loan option</p>
    </div>
    <div class="loan-options flexbox row">
      <div class="opt req" :class="{active:one}" @click="next">Loan Requests</div>
      <div class="opt offer" :class="{active:two}" @click="previous">Loan Offers</div>
    </div>
    <div class="sort-bar flexbox row">
      <div>
        <span class="opacity">Sort by</span>
        <select name="Sort" id="sort" @input="change()">
          <option value="Amount">Amount</option>
          <option value="Duration">Duration</option>
          <option value="Interest">Interest Rate</option>
        </select>
        <span class="opacity">{{ limit }}</span>
      </div>
      <div class="opacity s">Showing All</div>
    </div>
    <div class="market-list flexbox wrap">
      <component :is="selectedComponent"></component>
    </div>
    <div>
      <button class="jose">See More</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      limit: "NGN 50000 - NGN 100000",
      selectedComponent: "app-offer",
      one:false,
      two:true
    };
  },
  components: {
    "app-offer": () => import("@/components/landing/market/offer"),
    "app-request": () => import("@/components/landing/market/request")
  },
  methods: {
    next(){
      this.one = true,
      this.two=false
      return this .selectedComponent = "app-request"
    },
    previous(){
      this.one = false,
      this.two = true
      return this.selectedComponent = "app-offer"
    },
    change() {
      if (sort.value == "Amount") {
        this.limit = "NGN 50000 - NGN 100000";
      }
      if (sort.value == "Duration") {
        this.limit = "1 month - 24 months";
      }
      if (sort.value == "Interest") {
        this.limit = "5% - 20%";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./market.scss";
</style>


