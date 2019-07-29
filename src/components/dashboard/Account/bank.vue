<template>
  <div class="bank-app">
    <div class="title">Bank Account Information</div>
    <div class="head">NAME ON BANK ACCOUNT</div>
    <div>
      <input type="text" />
    </div>
    <div class="head">ACCOUNT NUMBER</div>
    <div>
      <input type="number" />
    </div>
    <div class="head">NAME OF BANK</div>
    <div>
      <input type="text" />
    </div>
    <div class="head">ACCOUNT TYPE</div>
    <div>
      <span>
        <input type="checkbox" name id />Savings
      </span>
      <span>
        <input type="checkbox" name id />Current
      </span>
      <span>
        <input type="checkbox" name id />Fixed Deposit
      </span>
    </div>
    <div><button><span class="ripple"></span> UPDATE BANK DETAILS</button></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.title {
  margin: 4rem 0;
  margin-top: 6rem;
  font-size: 32px;
  color: #a4a4a4;
}
.head {
  color: #a4a4a4;
  font-size: 11px;
  margin-bottom: 1rem;
  margin-top: 3rem;
}
span {
  color: #193652;
  font-size: 20px;
  margin-right: 2rem;
}
input[type="checkbox"] {
  margin-right: 1rem;
}
input[type="text"],input[type="number"] {
  width: 55%;
  padding: 1rem;
  border: 0.5px solid #c3c3c3;
  border-radius: 5px;
  background: #fff;
  color: #193652;
  font-size: 15px;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
}
 button{
      position: relative;
      background-color: #03bf94;
      padding: 1rem 4rem;
      color: #fff;
      font-weight: 500;
      font-size: 10px;
      margin-top:3rem;
  }
</style>


