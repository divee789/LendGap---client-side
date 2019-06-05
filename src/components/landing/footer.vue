<template>
  <div class="footer">
    <div class="item">
      <p>.lendgap</p>
    </div>
    <div class="item2">
      <div class="sub-item margin">
        <div v-for="lis in listA" :key="lis">{{ lis }}</div>
      </div>
      <div class="sub-item margin">
        <div v-for="list in listB" :key="list">{{ list }}</div>
      </div>
      <div class="sub-item">
        <div v-for="lists in listC" :key="lists">{{ lists }}</div>
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
.footer {
  background-color: #152c35;
  padding: 8% 0;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .item {
    font-size: 3rem;
    font-family: "Josefin Sans", sans-serif;
    letter-spacing: -2px;
    border-right: 1px solid #a4a4a4;
    padding-right: 15rem;
  }
  .item2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .sub-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      div {
        // margin-bottom: 2rem;
        color: #a4a4a4;
        font-family: "Josefin Sans";
        font-size: 15px;
        line-height: 65px;
        cursor:pointer;
        width:100%;
      }
    }
    .margin {
      margin-right: 50px;
    }
  }
}
</style>

