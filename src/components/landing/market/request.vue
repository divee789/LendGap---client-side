<template>
  <div class="market-list flexbox wrap">
    <div
      v-for="request in requests"
      :key="request.id"
      class="market-card"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-offset="200"
    >
      <span class="flag">
        <i class="far fa-flag"></i>
      </span>
      <div class="values">
        <div>
          <span class="n">N</span>
          <span class="price">{{ request.loan }}</span>
        </div>
        <div>Interest: {{ request.interest }}%</div>
        <div>Duration: {{ request.duration }} months</div>
      </div>
      <div class="rating">
        Borrower Rating:
        <span class="stars">
          <span class="fas fa-star checked"></span>
          <span class="fas fa-star checked"></span>
          <span class="fas fa-star checked"></span>
          <span class="fas fa-star"></span>
          <span class="fas fa-star"></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    requests() {
      return this.$store.getters.requests;
    }
  },
  async created() {
    this.$store.dispatch("getRequest");
  }
};
</script>

<style lang="scss" scoped>
@import "./market.scss";
</style>


