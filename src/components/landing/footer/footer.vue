<template>
  <div class="footer flexbox">
    <div class="item jose">
      <p>.lendgap</p>
    </div>
    <div class="item2 flexbox row">
      <div class="sub-item margin flexbox wrap column">
        <div v-for="lis in listA" :key="lis" class="link">{{ lis }}</div>
      </div>
      <div class="sub-item margin flexbox wrap column">
        <div v-for="list in listB" :key="list" class="link">{{ list }}</div>
      </div>
      <div class="sub-item flexbox wrap column">
        <div v-for="lists in listC" :key="lists" class="link">{{ lists }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      listA: ["About Us", "FAQs", "Contact"],
      listB: ["Reasonable Borrowing", "Reasonable Lending", "Help"],
      listC: ["Terms and Conditions", "Policy", "Site Map"]
    };
  }
};
</script>



<style lang="scss" scoped>
@import "./footer.scss";
</style>

