<template>
    <div class="loan-request">
        <form>
        <div>New Loan Request</div>
        <div>
           <div>Amount <span>(HOW MUCH DO YOU WANT TO BORROW?)</span></div>
           <div><span>N</span><input type="number" placeholder="000,000"/></div>
        </div>
        <div>
           <div>DURATION/TENURE <span>(FOR HOW LONG?)</span></div>
              <div>
                 <div><input type="number" placeholder="0"/></div>
              <div>
                 <select>
                     <option>Month</option>
                     <option>Year</option>
                 </select>
             </div>
           </div>
        </div>
        <div>
           <div>START DATE</div>
           <div><input type="date"/><span>B</span></div>
        </div>
        <div>
           <div>INTEREST RATE <span>(%)</span></div>
           <div><input type="text" /></div>
        </div>
        <div>
           <div>REPAYMENT <span>(PAYBACK AMOUNT)</span></div>
           <div><input type="number" /></div>
        </div>
         <div>
           <div>PURPOSE <span>(WHY DO YOU NEED THIS LOAN?)</span></div>
           <div><textarea/></div>
        </div>
         <div>
           <div>REPAYMENT TYPE<span>(PAYBACK FREQUENCY)</span></div>
           <div><input type="number" placeholder="Monthly Installments"/></div>
        </div>
        <div>
           <div>You will payback <span>{{ installment }}</span> every month for <span>{{ period }}</span></div>
        </div>
        <div>When you submit a loan request,LendGap uploads it to the Marketplace where potential Lenders can view and assess,and choose to accept the request.The higher your rating,the more likely and quickly your request will be accepted.Ensure you stick to the terms of this request,Funding on LendGap is simple and clear with no hidden fees.</div>
        <div>
          <p><input type="checkbox"/> i fully understand and accept the <span>terms and conditions</span> of borrowing on LendGap</p>
        </div>
        <div>
          <button>Submit</button>
        </div>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.loan-request{
    form{
        margin:2rem   20%;
    }
}
</style>

