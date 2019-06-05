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
      <div class="opacity s">Showing All</div>
    </div>
    <div class="market-list">
      <div v-for="market in markets" :key="market.id" class="market-card">
        <span class="flag">
          <i class="far fa-flag"></i>
        </span>
        <div class="values">
          <div>
            <span class="n">N</span>
            <span class="price">{{ market.price }}</span>
          </div>
          <div>Interest: {{ market.rate }}</div>
          <div>Duration: {{ market.duration }}</div>
        </div>
        <div class="rating">Lender Rating: {{ stars }}</div>
      </div>
    </div>
    <div>
      <button>See More</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      limit: "NGN 50000 - NGN 100000",
      markets: [
        { id: 1, price: "600,000", rate: "10%", duration: "18 months" },
        { id: 2, price: "55,000", rate: "8%", duration: "3 months" },
        { id: 3, price: "350,000", rate: "15%", duration: "6 months" },
        { id: 4, price: "100,000", rate: "5%", duration: "6 months" },
        { id: 5, price: "600,000", rate: "10%", duration: "18 months" },
        { id: 6, price: "10,000", rate: "10%", duration: "1 month" },
        { id: 7, price: "2,000,000", rate: "10%", duration: "24 months" },
        { id: 8, price: "45,000", rate: "20%", duration: "1 month" },
        { id: 9, price: "25,000", rate: "10%", duration: "2 months" }
      ]
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
  font-family: "Josefin Sans", sans-serif;
  cursor: pointer;
}

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
  font-family: "Open Sans";
  font-size: 12px;

  .opacity {
    opacity: 0.5;
  }
  .s {
    margin-right: 2rem;
  }
  span {
    margin-left: 2rem;
  }
  select {
    margin-left: 2rem;
    padding: 0.5rem;
    border-radius: 5px;
  }
}
.market-list {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-between;
  margin-top: 3rem;

  .market-card {
    position: relative;
    box-shadow: 4px 6px 20px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    width: 30%;
    margin-bottom: 20px;
    font-family: "Josefin Sans", sans-serif;
    border-radius: 5px;
    .flag {
      position: absolute;
      top: 50px;
      right: 30px;
      .far {
        height: 23px;
        width: 18px;
      }
    }
    div {
      margin-top: 1rem;
    }
    .values {
      padding: 0.5rem 2rem;
    }
    .n {
      height: 14px;
      width: 12px;
      color: #113e52;
      font-size: 20px;
      font-weight: 900;
      letter-spacing: -2px;
      line-height: 40px;
      margin-right: 5px;
    }
    .price {
      color: #113e52;
      font-size: 30px;
      font-weight: bold;
      letter-spacing: -2px;
      line-height: 40px;
      text-align: center;
      margin-top: 2rem;
    }
    .rating {
      padding: 2rem;
      background: #f8edef;
    }
  }
}

button {
  margin: 3rem 42%;
  text-align: center;
  padding: 0.9rem 2rem;
  border-radius: 5px;
  width: 15%;
  background-color: #d8d8d8;
  border: none;
  font-family: "Josefin Sans", sans-serif;
  cursor: pointer;
}
</style>


