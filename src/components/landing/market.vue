<template>
  <div class="market">
    <div>
      <h2>Marketplace</h2>
      <p>See some existing loan offers by top lenders from which you can benefit.</p>
      <p>Lenders are always available to offer you the best loan option</p>
    </div>
    <div class="loan-options">
      <div class="opt req">Loan Requests</div>
      <div class="opt offer">Loan Offers</div>
    </div>
    <div class="sort-bar">
      <div>
        <span class="opacity">Sort by</span>
        <select name="Sort" id="sort">
          <option value="Amount">Amount</option>
          <option value="Duration">Duration</option>
          <option value="Interest">Interest Rate</option>
        </select>
        <span class="opacity">{{ limit }}</span>
      </div>
      <div class="opacity">Showing All</div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      limit: "opopo"
    };
  }
};
</script>
<style lang="scss" scoped>
.market {
  padding: 0 15%;
  padding-top: 5rem;
}
h2 {
  //   height: 50px;
  //   width: 224px;
  color: #113e52;
  font-family: "Josefin Sans", sans-serif;
  font-size: 50px;
  font-weight: bold;
  letter-spacing: -2px;
  line-height: 65px;
  text-align: center;
  margin-top: 2rem;
}

p {
  color: #a4a4a4;
  font-family: "Open Sans";
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  margin: 0 auto;
}

.loan-options {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 40%;
  margin: 4rem auto;
}
.opt {
  font-size: 15px;
  padding: 0.8rem 2rem;
  font-family: "Josefin Sans", sans-serif;}

.req {
  background-color: #d8d8d8;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.offer {
  background-color: #ff2d6e;
  color: #fff;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}
.sort-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  .opacity{
    opacity:0.5
  }
  span{
    margin-left:2rem;
  }
  select{
    margin-left:2rem;
    padding:1rem 2rem;
  }
}
</style>


