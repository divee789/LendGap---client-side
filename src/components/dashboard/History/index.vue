<template>
  <div>
    <div class="options">
      <div class="loan-options flexbox row">
        <div class="opt req">My Loan Requests</div>
        <div class="opt offer">My Loan Offers</div>
      </div>
      <div class="flexbox row category">
        <div class="id hide">ID</div>
        <div class="recipient">Borrower</div>
        <div class="rating">Rating</div>
        <div class="repay">Repayment(N)</div>
        <div class="duedate">Due Date</div>
        <div class="status">Status</div>
        <div class="amountdue">Amount Due(N)</div>
      </div>
      <div class="history flexbox wrap column">
        <div
          v-for="history in historys"
          :key="history.id"
          class="flexbox row jose details"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-offset="50"
        >
          <div class="id">{{ history.ID }}</div>
          <div class="recipient">{{ history.name }}</div>
          <div class="rating">
            <span class="fas fa-star checked"></span>
            <span class="fas fa-star checked"></span>
            <span class="fas fa-star checked"></span>
            <span class="fas fa-star"></span>
            <span class="fas fa-star"></span>
          </div>
          <div class="repay">{{ history.repayment }}</div>
          <div class="duedate">{{ history.dateDue }}</div>
          <div class="status" :class="{invalid:status}">{{ history.status }}</div>
          <div class="amountdue">{{ history.amountDue}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { 
      historys: [
        {
          ID: 1,
          name: "Sandra Oladimeji",
          repayment: "125,000",
          dateDue: "07 Jan 2018",
          status: "Active",
          amountDue: "50,000"
        },
        {
          ID: 2,
          name: "Toluwani Oni",
          repayment: "650,000",
          dateDue: "23 Aug 2018",
          status: "Active",
          amountDue: "520,000"
        },
        {
          ID: 3,
          name: "Williams Justina",
          repayment: "20,000",
          dateDue: "19 Dec 2017",
          status: "Cleared",
          amountDue: "0"
        },
        {
          ID: 4,
          name: "Chinedu Eze",
          repayment: "75,000",
          dateDue: "07 Jan 2018",
          status: "Overdue",
          amountDue: "10,000"
        },
        {
          ID: 5,
          name: "Sola Adunni",
          repayment: "120,000",
          dateDue: "28 Dec 2017",
          status: "Cleared",
          amountDue: "0"
        },
        {
          ID: 6,
          name: "Nneka Nwanze",
          repayment: "300,000",
          dateDue: "21 Mar 2018",
          status: "Active",
          amountDue: "150,000"
        },
        {
          ID: 7,
          name: "Toyin Olumofuyin",
          repayment: "90,000",
          dateDue: "02 Jan 2018",
          status: "Overdue",
          amountDue: "60,000"
        }
      ]
    };
  },
  methods:{
    status(){
      for(history in historys){
         if(history.status === "Active" || history.status === "Cleared"){
        return false
      }
        if(history.status === "Overdue"){
        return true
      } 
     
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.options {
  padding: 0 10%;
  padding-top: 1rem;
}
.loan-options {
  justify-content: center;
  align-content: center;
  width: 40%;
  margin: 2rem auto;
  margin-bottom: 7rem;
  @media screen and (max-width: $breakpoint-tablet) {
    width: 90%;
  }
}
.opt {
  font-size: 13px;
  padding: 0.8rem 1rem;
  font-family: "Josefin Sans", sans-serif;
  cursor: pointer;
  width: 50%;
  text-align: center;
}

.req {
  background-color: #d8d8d8;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.offer {
  background-color: $main-theme;
  color: #fff;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}
.category {
  margin-top: 2rem;
  color: #c3c3c3;
  text-align: center;
}
.history {
  color: #a4a4a4;
  margin-top: 1rem;
  padding-bottom: 6rem;
  box-sizing: border-box;
  .details {
    background: #fff;
    margin: 3px 0;
    div{
      margin-top:1.5rem;
      box-sizing: border-box;
      text-align: center;
      font-weight:bold;
    }
  }
}
.id{
  width:5%;
  box-sizing:border-box;
  padding:0 1rem;
}
.hide{
  opacity:0;
}
.recipient {
  width: 20%;
  box-sizing:border-box;
  padding:0 1rem;
}
.rating {
  width: 20%;
  box-sizing:border-box;
  padding:0 1rem;
}
.repay {
  width: 15%;
  box-sizing:border-box;
  padding:0 1rem;
}
.duedate {
  width: 15%;
  box-sizing:border-box;
  padding:0 1rem;
}
.status {
  width: 10%;
  box-sizing:border-box;
  padding:0 1rem;
}
.amountdue {
  width: 15%;
  box-sizing:border-box;
  padding:0 1rem;
}
.invalid{
  color:red;
}
</style>

