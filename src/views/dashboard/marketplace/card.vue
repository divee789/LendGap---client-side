<template>
  <div class="card-specs">
    <div class="experiment">
      <div class="success-alert jose" v-if="open">
        You have successfully applied for this loan, and the lender has been notified.
        <a
          href="#"
        >Start a conversation?</a>
        <span @click="open = !open">X</span>
      </div>
    </div>
    <div class="lend-details flexbox row jose">
      <div class="amount-details">
        <div class="top">Loan Details</div>
        <div class="naira josebold">
          <span>N</span>600,000
        </div>
        <div class="transact">Transaction ID: 0000000</div>
      </div>
      <div class="loan-utils">
        <div>
          Loan Status:
          <span id="status">{{ status }}</span>
        </div>
        <div>Interest: 10%</div>
        <div>Repayment: N660,000</div>
        <div>Loan Tenure: 18 months</div>
        <div>Installments: Yes</div>
        <div>
          <a href="#">more...</a>
        </div>
      </div>
      <div class="loan-owner">
        <div>pic</div>
        <div>
          <div>
            <div>Lender:</div>
            <div id="name">Bimpe Oladimeji</div>
            <div>
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
      </div>
    </div>
    <app-chat></app-chat>
    <div class="inquiry-alert jose" v-if="got">
      <span>Have you Received the loan?</span>
      <button @click="got=!got">
        <div class="ripple"></div>Yes
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: true,
      got: true,
      status: "Active"
    };
  },
  methods: {},
  components: {
    "app-chat": () => import("@/components/dashboard/market/chat")
  }
};
</script>

<style lang="scss" scoped>
.experiment {
  height: 8vh;
  background: #f8edef;
}
.success-alert {
  position: relative;
  width: 100%;
  text-align: center;
  background: #03bf94;
  padding: 20px 0;
  color: #fff;
    @media screen and(max-width: $breakpoint-mobile){
      letter-spacing:1px;
      padding: 1.5rem 1rem;
      font-size:13px;
      box-sizing:border-box;
    }
  a {
    color: #fff;
  }
  span {
    position: absolute;
    top: 0.8rem;
    right: 1rem;
    cursor: pointer;
      @media screen and(max-width: $breakpoint-mobile){
      top:0.2rem;
      font-size:18px;
    }
  }
}
.lend-details {
  padding: 2% 8%;
  background: #f8edef;
  flex-wrap: wrap;
    @media screen and(max-width: $breakpoint-mobile){
      padding-top:10%;
    }
  .amount-details {
    width: 33%;
    div {
      margin-bottom: 7px;
    }
    .top {
      color: #c3c3c3;
      font-size: 15px;
    }
    .naira {
      font-size: 36px;
      span {
        font-size: 24px;
      }
    }
    .transact {
      font-size: 11px;
      color: #c3c3c3;
    }
  }
  .loan-utils {
    width: 33%;
    color: #c3c3c3;
    font-weight: 600;
    div {
      margin-bottom: 10px;
      font-size: 12px;
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

.inquiry-alert {
  padding: 1.5% 10%;
  text-align: end;
  background: rgba(255, 45, 110, 1);
  color: #fff;
  button {
    position: relative;
    background-color: #03bf94;
    margin-left: 1rem;
    padding: 0.6rem 1.5rem;
    color: #fff;
    font-weight: bold;
    font-size: 11px;
    width: 15%;
  }
}
</style>


