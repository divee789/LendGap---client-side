<template>
  <div class="market-list flexbox wrap">
    <div
      v-for="offer in offers"
      :key="offer.id"
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
          <span class="price">{{ offer.loan }}</span>
        </div>
        <div>Interest: {{ offer.interest }}%</div>
        <div>Duration: {{ offer.duration }} months</div>
      </div>
      <div class="rating">
        Lender Rating:
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
    offers() {
      return this.$store.getters.offers;
    }
  },
  async created() {
    this.$store.dispatch("getOffer");
  },
}
</script>

<style lang="scss" scoped>
@import "./market.scss";
</style>



