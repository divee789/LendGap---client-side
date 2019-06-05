<template>
  <div class="reason">
    <div>
      <h1>Why LendGap?</h1>
    </div>
    <div class="flex">
      <div class="items">
        <div class="icon">
          <span>
            <i class="fas fa-user-shield"></i>
          </span>
        </div>
        <h2>Safe Transactions</h2>
        <p>Lenders and Borrowers on LendGap are verified andloan transactions are thoroughly scrutinized</p>
      </div>
      <div class="items">
        <div class="icon">
          <span>
            <i class="fas fa-bolt"></i>
          </span>
        </div>
        <h2>Quick deals</h2>
        <p>LendGap offers you easy access toquick loans so you can execute transactions quickly</p>
      </div>
      <div class="items">
        <div class="icon">
          <span>
            <i class="fas fa-heart"></i>
          </span>
        </div>
        <h2>Made with Love</h2>
        <p>LendGap provides funds for those who really need it</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.reason {
  padding: 5rem 15%;
  text-align: center;
  background-color: #FBFBFB;
  h1 {
    height: 50px;
    color: #113e52;
    font-family: "Josefin Sans";
    font-size: 50px;
    font-weight: bold;
    letter-spacing: -4px;
    line-height: 65px;
  }
  .flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin-top: 6rem;
    .items {
      width: 27%;
      height:25vh;
      .icon {
        background-color: #d8d8d8;
        padding: 1.5rem 1rem;
        border-radius: 50%;
        width: 20%;
        margin: 0 auto;
        .fas {
          font-size: 30px;
          color: #ff2d6e;
        }
      }
    }
  }
}
h2 {
  color: #ff2d6e;
  font-family: "Josefin Sans";
  font-size: 30px;
  margin: 10px 0;
  font-weight: bold;
  letter-spacing: -2px;
  line-height: 65px;
}
p {
  color: #a4a4a4;
  font-family: "Open Sans";
  font-size: 13px;
  line-height: 20px;
}
</style>

