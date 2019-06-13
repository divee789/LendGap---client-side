<template>
  <div class="market">
    <div>
      <h2 class="josebold">Marketplace</h2>
      <p>See some existing loan offers by top lenders from which you can benefit.</p>
      <p>Lenders are always available to offer you the best loan option</p>
    </div>
    <div class="loan-options flexbox row">
      <div class="opt req">Loan Requests</div>
      <div class="opt offer">Loan Offers</div>
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
      <div v-for="market in markets" :key="market.id" class="market-card" data-aos="fade-up"  data-aos-duration="2000"  data-aos-offset="200">
        <span class="flag">
          <i class="far fa-flag"></i>
        </span>
        <div class="values">
          <div>
            <span class="n">N</span>
            <span class="price">{{ market.price }}</span>
          </div>
          <div>Interest: {{ market.rate }}</div>
          <div>Duration: {{ market.duration }}</div>
        </div>
        <div class="rating">Lender Rating:</div>
      </div>
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
      markets: [
        { id: 1, price: "600,000", rate: "10%", duration: "18 months" },
        { id: 2, price: "55,000", rate: "8%", duration: "3 months" },
        { id: 3, price: "350,000", rate: "15%", duration: "6 months" },
        { id: 4, price: "100,000", rate: "5%", duration: "6 months" },
        { id: 5, price: "600,000", rate: "10%", duration: "18 months" },
        { id: 6, price: "10,000", rate: "10%", duration: "1 month" },
        { id: 7, price: "2,000,000", rate: "10%", duration: "24 months" },
        { id: 8, price: "45,000", rate: "20%", duration: "1 month" },
        { id: 9, price: "25,000", rate: "10%", duration: "2 months" }
      ]
    };
  },
  methods: {
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


