<template>
  <div class="app">
    <div class="lend-details flexbox row jose">
      <div class="amount-details">
        <div class="top">Total Loan Offers</div>
        <div class="naira josebold">
          <span>N</span>4,000,000
        </div>
        <div class="transact flexbox row">
          <div>Total Interests:</div>
          <div class="span">N1,942,000</div>
        </div>
        <div class="transact flexbox row">
          <div>Amount Due:</div>
          <div class="span">N417,000</div>
        </div>
      </div>
      <div class="amount-details">
        <div class="top">Total Loan Requests</div>
        <div class="naira josebold">
          <span>N</span>1,560,000
        </div>
        <div class="transact flexbox row">
          <div>Total Repayments:</div>
          <div class="span">N270,000</div>
        </div>
        <div class="transact flexbox row">
          <div>Amount Due:</div>
          <div class="span">N138,000</div>
        </div>
      </div>
      <div class="loan-utils">
        <div class="flexbox row">
          <div>Active Loan Offers:</div>
          <div class="span">6</div>
        </div>
        <div class="flexbox row">
          <div>Active Loan Requests:</div>
          <div class="span">3</div>
        </div>
        <div class="flexbox row">
          <div>Overdue Loans:</div>
          <div class="span">4</div>
        </div>
        <div class="flexbox row">
          <div>All-time Profit:</div>
          <div class="span">N492,500</div>
        </div>
        <div class="flexbox row">
          <div>Last Repayment:</div>
          <div class="span">02 Jan 2018</div>
        </div>
      </div>
    </div>
    <app-history></app-history>
  </div>
</template>

<script>
export default {
  components: {
    "app-history": () => import("@/components/dashboard/History/index")
  }
};
</script>

<style lang="scss" scoped>
.app{
  background: #f7f7f7;
}
.lend-details {
  padding: 3rem 8%;
  background: #f8edef;
  @media screen and(max-width: $breakpoint-mobile){
    flex-direction:column;
  }
  .amount-details {
    width: 32%;
    @media screen and(max-width: $breakpoint-mobile){
      width:100%;
      margin-bottom:2rem;
    }
    div {
      margin-bottom: 3px;
    }
    .top {
      color: #c3c3c3;
      font-size: 16px;
      @media screen and(max-width: $breakpoint-mobile){
        margin-bottom:1rem;
      }
    }
    .naira {
      font-size: 36px;
      margin-bottom: 2rem;
      color: #113652;
    }
    .transact {
      font-size: 12px;
      color: #c3c3c3;
      width: 55%;
      font-weight: bold;
    }
  }
  .loan-utils {
    width: 33%;
    color: #c3c3c3;
    font-weight: bolder;
    padding-top: 24px;
    @media screen and(max-width: $breakpoint-mobile){
      width:100%;
    }
    div {
      margin-bottom: 5px;
      font-size: 12px;
      width: 100%;
      text-align: left;
      #status {
        color: red;
      }
      a {
        color: #03bf94;
        text-decoration: none;
      }
    }
  }
  .loan-owner {
    width: 33%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    div {
      margin-bottom: 10px;
      color: #c3c3c3;
      margin-right: 10px;
      #name {
        font-weight: 600;
        font-size: 15px;
        color: #837777;
      }
    }
  }
}
span,
.span {
  color: #113652;
  font-weight: bold;
}
</style>

