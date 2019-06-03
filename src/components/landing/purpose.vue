<template>
    <div class="purpose">
        <div class="spec">
           <div>Make a Request</div>
           <p>Create your own request from anyone at anytime with your own payback terms</p>
        </div>
        <div class="spec">
        <div>Receive Payments</div>
        <p>Interested lenders review and accept your request.You get paid instantly</p>
        </div>
        <div class="spec">
         <div>Repay your Loan</div>
         <p>Make repayments on or before due date.On time repayments increases your access to better offers</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>
.purpose{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    padding:10% 10%;
    text-align: center;
    background: #d8d8d8;
}

.spec{
    width:27%;
    div{
        font-size: 30px;
        font-weight: bold;
        color:#113e52;
        letter-spacing: -2px;
        text-align: center;
    }
    p{
        font-size: 15px;
        color:#a4a4a4;
        line-height:18px;
        text-align: center;

    }
}
</style>

