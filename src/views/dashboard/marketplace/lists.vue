<template>
  <div class="market">
    <div class="collapsible" v-if="show">
      <!-- <img src="/images/cell1.jpg" alt> -->
      <div class="overlay">
        <span @click="collapse">X</span>
        <div class="info">
          <h1 class="josebold">Monitor your Loans From anywhere.</h1>
          <p class="normal">With LendGap Pro,you can easily monitor all your loan offers.</p>
          <div>
            <button id="pro">
              <div class="ripple"></div>Go Pro
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="options">
      <div class="loan-options flexbox row">
        <div class="opt req">Loan Requests</div>
        <div class="opt offer">Loan Offers</div>
      </div>
      <div class="sort-bar flexbox row">
        <div>
          <span class="opacity">Sort by</span>
          <select name="Sort" id="sort" @input="change()">
            <option value="Amount">Amount</option>
            <option value="Duration">Duration</option>
            <option value="Interest">Interest Rate</option>
          </select>
          <span class="opacity">{{ limit }}</span>
        </div>
        <div class="opacity s">Showing All</div>
      </div>
      <router-link to="/dashboard/market/card" tag="div">
        <div class="market-list flexbox wrap">
          <div
            v-for="market in markets"
            :key="market.id"
            class="market-card"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="50"
          >
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
            <div class="rating">Lender Rating:</div>
          </div>
        </div>
      </router-link>

      <div>
        <button class="jose">See More</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
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
        { id: 9, price: "25,000", rate: "10%", duration: "2 months" },
        { id: 10, price: "105,000", rate: "7%", duration: "5 months" },
        { id: 11, price: "15,000", rate: "20%", duration: "1 months" },
        { id: 12, price: "55,000", rate: "10%", duration: "5 months" },
        { id: 13, price: "75,000", rate: "13%", duration: "4 months" },
        { id: 14, price: "85,000", rate: "100%", duration: "12 months" },
        { id: 15, price: "65,000", rate: "10%", duration: "2 months" }
      ]
    };
  },
  methods: {
    collapse() {
      this.show = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.market {
  height: 100%;
  .collapsible {
    position: relative;
    height: 45vh;
    width: 100%;
    box-sizing: border-box;
    background-image: url("/images/cell1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .overlay {
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(230, 198, 198, 1),
        rgba(230, 198, 198, 0.2)
      );
      .info {
        padding-top: 2rem;
        padding-left: 6rem;
        h1 {
          width: 35%;
          opacity:0.8;
          color:#113652;
          font-size:36px;
          letter-spacing:-3px;
        }
        p{
            font-size:12px;
            // line-height:36px;
        }
      }

      #pro {
        position: relative;
        background-color: #03bf94;
        padding: 0.6rem 1.6rem;
        margin: unset;
        color: #fff;
        border: none;
        font-weight: 500;
        font-size: 15px;
        width: 12%;
        border-radius: 5px;
        cursor: pointer;

        @media screen and (max-width: $breakpoint-tablet) {
          width: 50%;
        }

        @media screen and (max-width: $breakpoint-mobile) {
          width: 70%;
        }

        .ripple {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: #fff;
          top: 0;
          left: 0;
          transform: scale(0);
          opacity: 0.5;
        }
      }
    }
    #pro:hover > .ripple {
      animation: ripple-in2 2s;
    }

    @keyframes ripple-in2 {
      0% {
        transform: scaleX(0);
      }

      20% {
        transform: scaleX(1);
        opacity: 0.3;
      }

      100% {
        transform: scaleX(1);
        opacity: 0;
      }
    }

    span {
      position: absolute;
      top: 10px;
      right: 20px;
      font-size: 24px;
      color: #fff;
      cursor: pointer;
    }
  }
  .options {
    padding: 0 10%;
    padding-top: 2rem;
  }
  .loan-options {
    justify-content: center;
    align-content: center;
    width: 40%;
    margin: 1rem auto;

    @media screen and (max-width: $breakpoint-tablet) {
      width: 90%;
    }
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
    align-content: center;
    font-family: "Open Sans";
    font-size: 12px;

    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
    .opacity {
      opacity: 0.5;
    }

    .s {
      margin-right: 2rem;

      @media screen and (max-width: 500px) {
        margin-right: 5px;
        margin-top: 10px;
      }
    }

    span {
      margin-left: 2rem;

      @media screen and (max-width: 500px) {
        margin-left: 5px;
      }
    }

    select {
      margin-left: 2rem;
      padding: 0.5rem;
      border-radius: 5px;
      background: #fff;

      @media screen and (max-width: 500px) {
        margin-left: 5px;
      }
    }
  }
  .market-list {
    padding: 5px;
    margin-top: 3rem;
    cursor: pointer;

    .market-card {
      position: relative;
      box-shadow: 4px 6px 20px rgba(0, 0, 0, 0.05);
      box-sizing: border-box;
      width: 30%;
      margin-bottom: 20px;
      font-family: "Josefin Sans", sans-serif;
      border-radius: 5px;
      @media screen and (max-width: 500px) {
        width: 100%;
      }
      @media screen and (min-width: 510px) and (max-width: 800px) {
        width: 48%;
      }
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
        bottom: 0;
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
    cursor: pointer;
    @media screen and (max-width: 1200px) {
      width: 30%;
      margin-left: 25%;
    }
    @media screen and (max-width: 700px) {
      width: 50%;
      margin-left: 25%;
    }
  }
}
</style>


