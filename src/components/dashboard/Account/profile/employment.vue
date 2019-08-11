n<template>
  <div class="employ jose">
    <div class="title">Employment</div>
    <div class="head">ARE YOU EMPLOYED?</div>
    <div>
      <span>
        <input type="checkbox" name id />
        Yes
      </span>
      <span>
        <input type="checkbox" />
        No
      </span>
    </div>
    <div class="head">EMPLOYMENT TYPE</div>
    <div>
      <span>
        <input type="checkbox" name id />Full-Time
      </span>
      <span>
        <input type="checkbox" name id />Part-Time
      </span>
      <span>
        <input type="checkbox" name id />Self-Employed
      </span>
    </div>
    <div class="head">JOB TITLE/POSITION</div>
    <div>
      <input type="text" name id />
    </div>
    <div class="head">NAME OF COMPANY/ORGANIZATION/SELF-OWNED BUSINESS</div>
    <div>
      <input type="text" name id />
    </div>
    <div class="head">ADDRESS OF COMPANY/ORGANIZATION/SELF-OWNED BUSINESS</div>
    <div>
      <textarea name id cols="10" rows="5"></textarea>
    </div>
    <div class="head">CURRENT SALARY RANGE</div>
    <div>
      <select name id>
        <option value>100,000 - 500,000</option>
        <option value>0 - 100,000</option>
        <option value>Above 500,000</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.employ {
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
    @media screen and (max-width:$breakpoint-mobile){
      font-size:15px;
    }
  }
  input[type="checkbox"] {
    margin-right: 1rem;
  }
  input[type="text"],
  textarea,
  select {
    width: 55%;
    padding: 1rem;
    border: 0.5px solid #c3c3c3;
    border-radius: 5px;
    background: #fff;
    color: #193652;
    font-size: 15px;
    box-sizing: border-box;
    @media screen and (max-width:$breakpoint-mobile){
      width:100%;
    }
    &:focus {
      outline: none; 
    }
  }
}
</style>


