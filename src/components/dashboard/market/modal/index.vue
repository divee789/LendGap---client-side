<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <span class="close" style="cursor:pointer;">
          <i class="fas fa-times" @click="close()"></i>
        </span>
        <div class="flexbox row">
          <div class="loan-info jose">
            <p class="top">Loan Offer</p>
            <div class="price josebold">
              <span class="n josebold">N</span>55,000
            </div>
            <p class="id jose">Transaction ID: 000000</p>

            <p class="jose details">Interest: 8%</p>
            <p class="jose details">Payback Amount: N59,400</p>
            <p class="jose details">Loan Tenure: 3 months</p>
            <p class="jose details">Instalments: YES</p>
            <p class="jose details">Monthly Instalments: N19,800</p>
            <p class="rating">
              Lender Rating
              <span class="stars">
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star checked"></span>
                <span class="fas fa-star"></span>
                <span class="fas fa-star"></span>
              </span>
            </p>
          </div>
          <div class="general-info">
            <p class="top">
              <span class="flag">
                <i class="far fa-flag"></i>
              </span>
            </p>
            <p
              class="text normal in"
            >Financing is carried out as quickly as possible.Once you apply for this loan, the lender wil be notified. Funding on LendGap is siple and clear with no hidden fees.</p>
            <p class="text slight">See LendGap Terms and Conditions</p>
            <div>
              <button id="offer" class="jose">COUNTER OFFER</button>
            </div>
            <div>
              <router-link to="/dashboard/market/card">
                <button id="apply" class="jose">APPLY</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  overflow: hidden;
  overflow-y: scroll;
  z-index: 9999999;
  text-align: start;
}

.modal {
  position: relative;
  background: #fff;
  overflow: hidden;
  overflow-y: scroll;
  top: 5%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 60%;
  height: 85vh;
  z-index: 99999999;
  box-sizing: border-box;
  color: #000;
  @media screen and (max-width: 600px) {
    width: 75%;
    height: 70vh;
    margin-left: 8%;
  }
  .row {
    height: 100%;
  }
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 34px;
  opacity: 0.5;
  @media screen and (max-width: 600px) {
    font-size: 20px;
    top: 10px;
  }
}
.loan-info,
.general-info {
  width: 50%;
  padding: 1rem 4rem;
  padding-top: 8%;
}
.general-info {
  background: #f7f7f7;
  .text {
    color: #a4a4a4;
    font-size: 11.59px;
    text-align: left;
  }
  .in {
    margin-top: 11rem;
  }
  .slight {
    font-size: 12px;
    color: #d8d8d8;
    cursor: pointer;
    margin-top: 2rem;
  }
  button {
    cursor: pointer;
    width: 65%;
    border-radius: 5px;
    margin: 0 15%;
    padding: 0.7rem 1.3rem;
    font-size: 11px;
    font-weight: 500;
    text-align: center;
    &:focus {
      outline: none;
    }
  }
  #offer {
    border: 1px solid #ff2d6e;
    color: #ff2d6e;
    background: #fff;
    margin-bottom: 0.5rem;
    margin-top: 3rem;
    letter-spacing: 0.5px;
  }
  #apply {
    background-color: #ff2d6e;
    color: #fff;
    letter-spacing: 0.5px;
    border: none;
  }
}
.top {
  margin-bottom: 2rem;
  font-size: 20px;
  color: #c3c3c3;
}
.price {
  color: #113e52;
  font-size: 58px;
  letter-spacing: -1px;
  .n {
    font-size: 39px;
    margin-right: 2px;
  }
}
.flag {
  position: absolute;
  top: 65px;
  right: 30px;
}
.id {
  font-size: 14px;
  color: #c3c3c3;
  margin-bottom: 4rem;
}
.details {
  color: #a4a4a4;
  font-size: 14px;
  margin-top: -8px;
}
.rating {
  margin-top: 6rem;
  .stars {
    margin-left: 3rem;
    .checked {
      color: orange;
    }
  }
}
</style>

