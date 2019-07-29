<template>
  <div class="app-email">
      <div class="title">Email Notifications</div>
      <div class="head">EMAIL ME WHEN</div>
       <div class="option">
        <input type="checkbox" name id />someone accepts my loan request/offer
      </div>
      <div class="option">
        <input type="checkbox" name id />somone sends me a message or start a conversation with me
      </div>
      <div class="option">
        <input type="checkbox" name id />i get a counter-offer on my loan request/offer
      </div>
      <div class="option">
        <input type="checkbox" name id />a loan is due for repayment
      </div>
      <div class="option">
        <input type="checkbox" name id />i receive payment or repayment
      </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.app-email{
   padding-bottom:3rem;
  margin-bottom: 5rem;
   .title {
    margin: 4rem 0;
    margin-top: 6rem;
    font-size: 32px;
    color: #a4a4a4;
  }
   .head {
    color: #a4a4a4;
    font-size: 11px;
    margin-bottom: 3rem;
    margin-top: 3rem;
  }
  .option{
    margin-bottom: 1rem;
    color: #193652;
    font-weight: bold;
  }
  input{
    margin-right:2rem;
    font-size: 32px;
  }
}
</style>


