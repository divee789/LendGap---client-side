<template>
  <div class="app-password">
    <div class="title">Password</div>
    <div class="head">OLD PASSWORD</div>
    <div>
      <input type="password" />
    </div>
    <div class="head">PASSWORD</div>
    <div>
      <input type="password" name id v-model="currentPassword" @blur="$v.currentPassword.$touch()" />
    </div>
    <div class="flexbox row specs">
      <div>Minimum 6 characters</div>
      <div class="password-bar">
        Password Strength
        <div class="strength-bar">
          <div :class="{invalid: $v.currentPassword.$invalid,valid:!$v.currentPassword.$invalid}"></div>
        </div>
      </div>
    </div>
    <div>
      <button><span class="ripple"></span> CHANGE PASSWORD</button>
    </div>
  </div>
</template>
<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      currentPassword: ""
    };
  },
  validations: {
    currentPassword: {
      required,
      minLen: minLength(6)
    }
  }
};
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
input {
  width: 55%;
  padding: 1rem;
  border: 0.5px solid #c3c3c3;
  border-radius: 5px;
  background: #fff;
  color: #193652;
  font-size: 18px;
  box-sizing: border-box;
  @media screen and (max-width:$breakpoint-mobile){
    width:100%;
  }
  &:focus {
    outline: none;
  }
}
.specs {
  width: 55%;
  color: #a4a4a4;
  margin-top: 10px;
  font-size: 11px;
  .password-bar {
    width: 50%;
    margin-right: -2rem;
     @media screen and (max-width:$breakpoint-mobile){
    margin-right:-10rem;
    width:90%;
  }
    .strength-bar {
      background: #a4a4a4;
      height: 3px;
      margin-left: 5px;
      display: inline-block;
      width: 40%;
    }
  }
}

.invalid {
  width: 50%;
  background: red;
  height: 100%;
}

.valid {
  width: 100%;
  background: green;
  height: 100%;
}
button {
  position: relative;
  background-color: #03bf94;
  padding: 1.2rem 4rem;
  color: #fff;
  font-weight: 500;
  font-size: 10px;
  margin-top: 3rem;
}
</style>


