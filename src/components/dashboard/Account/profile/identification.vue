<template>
  <div class="app-ident">
    <div class="title">Identification</div>
    <div class="head">MEANS OF IDENTIFICATION</div>
    <div>
      <span>
        <input type="checkbox" name id />National ID Card
      </span>
      <span>
        <input type="checkbox" name id />Driver's License
      </span>
      <span>
        <input type="checkbox" name id />International Passport
      </span>
    </div>
    <div class="head">IDENTIFICATION NUMBER</div>
    <div>
      <input type="text" name id />
    </div>
    <div class="head">UPLOAD PHOTO OR SCANNED COPY OF ID CARD</div>
    <div>
      <button type="upload" class="upload">
        <span class="arrow">X</span> UPLOAD FILE
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.app-ident {
  padding-bottom: 3rem;
  border-bottom: 1px solid #c3c3c3;
  margin-bottom: 5rem;
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
    font-size: 18px;
    margin-right: 2rem;
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
    font-size: 18px;
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  }
  .upload {
    padding: 1rem 5rem;
    font-size: 11px;
    font-weight: bold;
    color: #fff;
    background: #a4a4a4;
    .arrow {
      margin-right: 10px;
      color: #fff;
    }
  }
}
</style>


