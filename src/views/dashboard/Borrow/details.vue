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
          <input id="loan" type="number" placeholder="000,000"  name="required-amount" required v-model="amountWanted"  @blur="$v.amountWanted.$touch()"
          :class="{invalid:$v.amountWanted.$invalid}" />
          <span class="error">
            <span v-if="!$v.amountWanted.minLen">You must put more than 3 figures</span>
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
            <input class="duration" required type="number" placeholder="0" v-model="timePeriod" name="period" @blur="$v.timePeriod.$touch()" :class="{invalid:$v.timePeriod.$invalid}"/>
          </div>
          <div class="time-frame">
            <select class="normal" v-model="type">
              <option>Months</option>
              <option>Years</option>
            </select>
          </div>
        </div>
        <span class="error" v-if="$v.timePeriod.$invalid">This Field must not be empty</span>
      </div>
      <div class="form-input">
        <div class="question">START DATE</div>
        <div class="fif">
          <input type="date"/>
          <span class="calendar">B</span>
        </div>
      </div>
      <div class="form-input">
        <div class="question">
          INTEREST RATE
          <span>(%)</span>
        </div>
        <div>
          <input type="number" v-model="interest" @input="payback" required />
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
          PURPOSE
          <span>(WHY DO YOU NEED THIS LOAN?)</span>
        </div>
        <div>
          <textarea  required v-model="loanReason" @blur="$v.loanReason.$touch()" :class="{invalid:$v.loanReason.invalid,valid:!$v.loanReason.invalid}"/>
          <span class="error" v-if="!$v.loanReason.minLen">This Field must contain more than 9 characters</span>
        </div>
      </div>
      <div class="form-input">
        <div class="question">
          REPAYMENT TYPE
          <span>(PAYBACK FREQUENCY)</span>
        </div>
        <div>
          <input type="number" placeholder="Monthly Installments" v-model="installMent" @blur="$v.installMent.$touch()" :class="{invalid:$v.installMent.$invalid}"/>
          <span class="error" v-if="$v.installMent.$invalid">This Field must not be empty</span>
        </div>
      </div>
      <div class="form-input">
        <div class="notification">
          <ul>
            <li class="josebold">
              You will payback
              <span>N{{ installMent }}</span>
              every {{type}}, for
              <span>{{ timePeriod }} {{ type }}</span>
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
        <button @click="toNext">
          <span class="ripple"></span> SUBMIT
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { required,minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      installMent: "",
      type: "Months",
      pay: 0,
      interest: 0,
      empty: true,
      condition: false,
      amountWanted: 0,
      loanReason:"",
      timePeriod: 0
    };
  },
  validations:{
     amountWanted:{
       minLen:minLength(3)
     },
     timePeriod:{
        required
     },
     loanReason:{
       required,
       minLen:minLength(9)
     },
     installMent:{
       required
     }
  },
  methods: {
    payback() {
      let percentage = this.interest /100;
      let profit = this.amountWanted * percentage
      let result = this.amountWanted + profit
      return this.pay = result
    },
    // toNext(){
    //  setTimeout(()=>{
    //     this.$router.push("/dashboard/borrow/info")
    //  },1000)
    // }
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
   @media screen and (max-width:$breakpoint-mobile){
     margin:0;
   }
  form {
    margin: 2rem 0;
    margin-left: 25%;
    @media screen and (max-width:$breakpoint-mobile){
      margin:0 10%;
    }
    .opaque {
      color: #a4a4a4;
    }
    .form-title {
      padding-top: 7rem;
      padding-bottom: 4rem;
      font-size: 32px;
       @media screen and (max-width:$breakpoint-mobile){
      padding:3rem 0;
      font-size:30px;
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
          @media screen and (max-width:$breakpoint-mobile){
      width:100%;
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
           @media screen and (max-width:$breakpoint-mobile)
           {
             padding-right:0;
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
          @media screen and (max-width:$breakpoint-mobile){
      width:100%;
    }
      }
        .invalid{
  border:1px solid red;
}
      .fif {
        width: 50%;
          @media screen and (max-width:$breakpoint-mobile){
      width:100%;
    }
        input {
          width: 100%;
        }
      }
      #loan {
        padding-left: 3rem;
      }
      textarea {
        width: 50%;
        height: 13vh;
        border: none;
        border-radius: 5px;
        border: 1px solid #c3c3c3;
        padding: 1rem 1rem;
        box-sizing: border-box;
        &:focus {
          outline: none;
        }
          @media screen and (max-width:$breakpoint-mobile){
      width:100%;
    }
      }
    }
    .text {
      color: #a4a4a4;
      width: 52.7%;
        @media screen and (max-width:$breakpoint-mobile){
      width:100%;
    }
    }
  }
  .conditions {
    color: #c3c3c3;
    margin-top: 4rem;
    width:50%;
    font-size:11px;
      @media screen and (max-width:$breakpoint-mobile){
      width:100%;
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
      @media screen and (max-width:$breakpoint-mobile){
      width:60%;
    }
  }
}


</style>

   