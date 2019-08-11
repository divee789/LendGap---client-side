<template>
  <div class="loan-request">
    <form>
      <div class="form-title opaque jose">New Loan Offer</div>
      <div class="form-input" jose>
        <div class="question">
          AMOUNT
          <span>(HOW MUCH DO YOU WANT TO LEND?)</span>
        </div>
        <div>
          <span class="symbol">N</span>
          <input
            id="loan"
            type="number"
            placeholder="000,000"
            name="loan"
            required
            v-model="loan"
            @blur="$v.loan.$touch()"
            :class="{invalid:$v.loan.$invalid}"
          />
          <span class="error">
            <span v-if="!$v.loan.minLen">You must put more than 3 figures</span>
          </span>
        </div>
      </div>
      <div class="form-input">
        <div class="question">
          DURATION/TENURE
          <span>(FOR HOW LONG?)</span>
        </div>
        <div class="twice-input">
          <div class="time">
            <input
              class="duration"
              required
              type="number"
              placeholder="0"
              v-model="duration"
              name="duration"
              @blur="$v.duration.$touch()"
              :class="{invalid:$v.duration.$invalid}"
            />
          </div>
          <div class="time-frame">
            <select class="normal" v-model="type">
              <option>Months</option>
              <option>Years</option>
            </select>
          </div>
        </div>
        <span class="error" v-if="$v.duration.$invalid">This Field must not be empty</span>
      </div>
      <div class="form-input">
        <div class="question">START DATE</div>
        <div class="fif">
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
          <input type="number" name="interest" v-model="interest" @input="payback" required />
        </div>
      </div>
      <div class="form-input">
        <div class="question">
          REPAYMENT
          <span>(PAYBACK AMOUNT)</span>
        </div>
        <div>
          <input type="number" v-model="pay" />
        </div>
      </div>
      <div class="form-input">
        <div class="question">
          REPAYMENT TYPE
          <span>(PAYBACK FREQUENCY)</span>
        </div>
        <div>
          <input
            type="number"
            placeholder="Monthly Installments"
            v-model="installMent"
            @blur="$v.installMent.$touch()"
            :class="{invalid:$v.installMent.$invalid}"
          />
          <span class="error" v-if="$v.installMent.$invalid">This Field must not be empty</span>
        </div>
      </div>
      <div class="form-input">
        <div class="notification">
          <ul>
            <li class="josebold">
              You will be paid
              <span>N{{ installMent }}</span>
              every {{type}}, for
              <span>{{ duration }} {{ type }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="form-input text jose"
      >When you submit a loan offer, LendGap uploads it to the Marketplace where potential Borrowers can view and assess,and choose to take the offer.Most Borrowers prefer offers from Lenders with high ratings.Ensure you stick to the terms of this request,Funding on LendGap is simple and clear, with no hidden fees.NOTE:LendGap collects a service fee equivalent to 2 percent of the Repayment on every loan offer</div>
      <div>
        <p class="conditions josebold">
          <input type="checkbox" class="check" /> i fully understand and accept the
          <span>
            <a href="#">terms and conditions</a>
          </span> of lending on LendGap
        </p>
      </div>
      <div class="form-input jose">
        <button @click="proceed">
          <span class="ripple"></span> SUBMIT
        </button>
      </div>
      <div v-if="success" class="success">Your request has been successfully added</div>
    </form>
  </div>
</template>
<script>
import { required,minLength } from "vuelidate/lib/validators";
// import axios from 'axios';
import offerService from '../../../markets'
export default {
  data() {
    return {
      installMent: "",
      type: "Months",
      pay: "",
      interest: "",
      empty: true,
      condition: false,
      loan: "",
      duration: "",
      success:false
    };
  },
  validations:{
     loan:{
       minLen:minLength(3)
     },
     duration:{
        required
     },
     installMent:{
       required
     }
  },
  methods: {
    payback() {
      let percentage = this.interest /100;
      let profit = this.loan * percentage
      let result = this.loan + profit
      return this.pay = result
    },
     async proceed()  {
      event.preventDefault()
      const offer = {
        loan:this.loan,
        duration:this.duration,
        interest:this.interest
      }
      await this.$store.dispatch("setOffer", offer);
      this.$router.push("/dashboard/lend/info");
      // offerService.insertOffer(offer)
    }
  }
};
</script>
<style lang="scss" scoped>
.error {
  margin-left: 15px;
  color: red;
  font-family: "Open Sans", sans-serif;
}
.loan-request {
  background: #f7f7f7;
  margin-top: -2rem;
  padding-bottom: 2rem;
  @media screen and (max-width: $breakpoint-mobile) {
    margin: 0;
  }
  form {
    margin: 2rem 0;
    margin-left: 25%;
    @media screen and (max-width: $breakpoint-mobile) {
      margin: 0 10%;
    }
    .opaque {
      color: #a4a4a4;
    }
    .form-title {
      padding-top: 7rem;
      padding-bottom: 4rem;
      font-size: 32px;
      @media screen and (max-width: $breakpoint-mobile) {
        padding: 3rem 0;
        font-size: 30px;
      }
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
          right: 20px;
          font-size: 17px;
          color: #c3c3c3;
          font-weight: 600;
        }
      }
      .question {
        font-weight: bolder;
        margin: 1rem 0;
        font-size: 13px;
        color: #a4a4a4;
        @media screen and(max-width: $breakpoint-mobile){
          font-size:11px;
        }
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
        width: 50%;
        @media screen and (max-width: $breakpoint-mobile) {
          width: 100%;
        }
        .time {
          width: 70%;
          .duration {
            width: 90%;
          }
        }
        .time-frame {
          width: 40%;
          select {
            width: 100%;
            padding: 1rem 1.5rem;
            background: #fff;
            border: 1px solid #c3c3c3;
            font-size: 17px;
            color: #c3c3c3;
            &:focus {
              outline: none;
            }
            @media screen and (max-width: $breakpoint-mobile) {
              padding:1rem 0.6rem;
            }
          }
        }
      }

      input {
        width: 50%;
        padding: 1.1rem 1.5rem;
        border-radius: 5px;
        border: 1px solid #c3c3c3;
        background: #fff;
        color: #a4a4a4;
        font-weight: bold;
        font-size: 17px;
        box-sizing: border-box;
        &:focus {
          outline: none;
        }
        @media screen and (max-width: $breakpoint-mobile) {
          width: 100%;
        }
      }
      .invalid {
        border: 1px solid red;
      }
      .fif {
        width: 50%;
        @media screen and (max-width: $breakpoint-mobile) {
          width: 100%;
        }
        input {
          width: 100%;
        }
      }
      #loan {
        padding-left: 3rem;
      }
    }
    .text {
      color: #a4a4a4;
      width: 52.7%;
      @media screen and (max-width: $breakpoint-mobile) {
        width: 100%;
      }
    }
  }
  .conditions {
    color: #c3c3c3;
    margin-top: 4rem;
    width: 50%;
    font-size: 11px;
    @media screen and (max-width: $breakpoint-mobile) {
      width: 100%;
    }
    a {
      color: #c3c3c3;
    }
  }
  button {
    position: relative;
    background-color: #03bf94;
    margin: 5rem 10%;
    margin-top: 0;
    padding: 1.1rem 1.5rem;
    color: #fff;
    font-size: 12px;
    width: 30%;
    @media screen and (max-width: $breakpoint-mobile) {
      width: 60%;
    }
  }
}
</style>

   