<template>
  <div class="loan-request">
    <form>
      <div class="form-title opaque jose">New Loan Request</div>
      <div class="form-input" jose>
        <div class="question">
          AMOUNT
          <span>(HOW MUCH DO YOU WANT TO BORROW?)</span>
        </div>
        <div>
          <span class="symbol">N</span>
          <input id="loan" type="number" placeholder="000,000" />
        </div>
      </div>
      <div class="form-input">
        <div class="question">
          DURATION/TENURE
          <span>(FOR HOW LONG?)</span>
        </div>
        <div class="twice-input">
          <div class="time">
            <input type="number" placeholder="0" v-model="period" />
          </div>
          <div class="time-frame">
            <select class="normal" v-model="type">
              <option>Months</option>
              <option>Years</option>
            </select>
          </div>
        </div>
      </div>
      <div class="form-input">
        <div class="question">START DATE</div>
        <div>
          <input type="date" />
          <span class="calendar">B</span>
        </div>
      </div>
      <div class="form-input">
        <div class="question">
          INTEREST RATE
          <span>(%)</span>
        </div>
        <div>
          <input type="number" v-model="interest" @input="payback" />
        </div>
      </div>
      <div class="form-input">
        <div class="question">
          REPAYMENT
          <span>(PAYBACK AMOUNT)</span>
        </div>
        <div>
          <input type="number" v-model="payback"/>
        </div>
      </div>
      <div class="form-input">
        <div class="question">
          PURPOSE
          <span>(WHY DO YOU NEED THIS LOAN?)</span>
        </div>
        <div>
          <textarea />
        </div>
      </div>
      <div class="form-input">
        <div class="question">
          REPAYMENT TYPE
          <span>(PAYBACK FREQUENCY)</span>
        </div>
        <div>
          <input type="number" placeholder="Monthly Installments" v-model="installment" />
        </div>
      </div>
      <div class="form-input">
        <div class="notification">
          <ul>
            <li class="josebold">
              You will payback
              <span>N{{ installment }}</span>
              every {{type}}, for
              <span>{{ period }} {{ type }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="form-input text jose"
      >When you submit a loan request, LendGap uploads it to the Marketplace where potential Lenders can view and assess,and choose to accept the request.The higher your rating,the more likely and quickly your request will be accepted.Ensure you stick to the terms of this request,Funding on LendGap is simple and clear, with no hidden fees.</div>
      <div>
        <p class="conditions josebold">
          <input type="checkbox" class="check" /> i fully understand and accept the
          <span>
            <a href="#">terms and conditions</a>
          </span> of borrowing on LendGap
        </p>
      </div>
      <div class="form-input jose">
        <button>
          <span class="ripple"></span> SUBMIT
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      installment: "0",
      type: "Months",
      period: 0,
      payback: 0,
      interest:""
    };
  },
  methods:{
    payback(){
      
    }
  }
};
</script>
<style lang="scss" scoped>
.loan-request {
  background: #f7f7f7;
  margin-top: -2rem;
  padding-bottom: 2rem;
  form {
    margin: 2rem 25%;
    .opaque {
      color: #a4a4a4;
    }
    .form-title {
      padding-top: 7rem;
      padding-bottom: 4rem;
      font-size: 32px;
    }
    .form-input {
      margin: 2.5rem 0;
      .notification {
        margin-left: -1rem;
        li {
          color: #a4a4a4;
        }
        span {
          color: Red;
        }
      }
      div {
        position: relative;
        .symbol {
          position: absolute;
          top: 14.5px;
          left: 10px;
          font-size: 17px;
          color: #c3c3c3;
          font-weight: 600;
        }
        .calendar {
          position: absolute;
          top: 14.5px;
          right: 80px;
          font-size: 17px;
          color: #c3c3c3;
          font-weight: 600;
        }
      }
      .question {
        font-weight: bolder;
        margin: 1rem 0;
        font-size: 13px;
        color:#a4a4a4;
        // opacity: 0.55;
        span {
          font-weight: 700;
          margin-left: 1px;
          color: #d8d8d8;
          opacity: 1;
        }
      }
      .twice-input {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 90%;
        .time {
          width: 70%;
        }
        .time-frame {
          width: 30%;
          select {
            width: 100%;
            padding: 1.1rem 1.5rem;
            background: #fff;
            border: none;
            font-size: 17px;
            color: #c3c3c3;
            &:focus {
              outline: none;
            }
          }
        }
      }

      input {
        width: 90%;
        padding: 1.1rem 1.5rem;
        border-radius: 5px;
        border: none;
        background: #fff;
        color:#a4a4a4;
        font-weight: bold;
        font-size: 17px;
        box-sizing: border-box;
        &:focus {
          outline: none;
        }
      }
      #loan {
        padding-left: 3rem;
      }
      textarea {
        width: 90%;
        height: 13vh;
        border: none;
        border-radius: 5px;
        padding:1rem 1rem;
        box-sizing: border-box;
        &:focus{
           outline: none;
        }
      }
    }
    .text {
      color: #a4a4a4;
      width: 90%;
    }
  }
  .conditions {
    color: #c3c3c3;
    margin-top: 4rem;
    a {
      color: #c3c3c3;
    }
  }
  button {
    position: relative;
    background-color: #03bf94;
    margin:5rem 18%;
    margin-top: 2rem;
    padding: 1.3rem 1.5rem;
    color: #fff;
    font-size: 12px;
    width: 50%;
  }
}
</style>

