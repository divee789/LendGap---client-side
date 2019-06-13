<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <span class="close" @click="close()" style="cursor:pointer;">
          <i class="fas fa-times"></i>
        </span>
        <div class="form-header jose" v-if="signin">Create Your Account</div>
        <div class="form-header jose" v-if="!signin">Login to Your Account</div>
        <p class="request normal">
          To request for loan
          <span>or</span> become a lender
        </p>
        <div class="modal-body flexbox row">
          <div class="form-wrapper">
            <form action v-if="signin">
              <div class="input">
                FULL NAME
                <div>
                  <input
                    type="text"
                    name="fullName"
                    required
                    v-model="userName"
                    @blur="$v.userName.$touch()"
                  >
                  <p v-if="!$v.userName.minLen" class="error">Please provide at least 6 characters.</p>
                  <!-- <p v-if="!$v.userName.required" class="error">This field must not be empty.</p> -->
                </div>
              </div>
              <div class="input">
                EMAIL
                <div>
                  <input
                    type="email"
                    name="logemail"
                    required
                    v-model="userEmail"
                    @blur="$v.userEmail.$touch()"
                  >
                  <p v-if="!$v.userEmail.email" class="error">Please provide a valid email address.</p>
                  <!-- <p v-if="!$v.userEmail.required" class="error">This field must not be empty.</p> -->
                </div>
              </div>
              <div class="input" id="strength">
                PASSWORD
                <div class="inputed">
                  <input
                    type="password"
                    name="password"
                    required
                    v-model="password"
                    @input="$v.password.$touch()"
                  >
                  <span class="eye">
                    <i class="fas fa-eye"></i>
                  </span>
                </div>
                <div class="password-bar">
                  Password Strength
                  <div class="strength-bar">
                    <div :class="{invalid: $v.password.$invalid,valid:!$v.password.$invalid}"></div>
                  </div>
                </div>
                <p class="error" v-if="!$v.password.strongPassword">Strong passwords need to have a letter, a number, a special character, and be more than 6 characters long.</p>
              </div>
              <p class="terms">By creating an account,You are agreeing to our Terms and Conditions</p>
              <button class="register">Sign Up</button>
            </form>
            <form action v-if="!signin">
              <div class="input">
                EMAIL
                <div>
                  <input
                    type="email"
                    name="logemail"
                    v-model="signInEmail"
                    @blur="$v.signInEmail.$touch()"
                  >
                  <p v-if="!$v.signInEmail.email" class="error">Please provide a valid email address.</p>
                </div>
              </div>
              <div class="input">
                PASSWORD
                <div class="inputed">
                  <input
                    type="password"
                    name="password"
                    v-model="signInPassword"
                    @blur="$v.signInPassword.$touch()"
                  >
                  <span class="eye">
                    <i class="fas fa-eye"></i>
                  </span>
                </div>
              </div>
              <p class="terms">Forgot Your Password</p>
              <button class="register" type="submit" :disabled="$v.$invalid">Sign In</button>
            </form>
          </div>
          <div class="rule">
            <div class="block">
              <hr>
            </div>
            <div>OR</div>
            <div class="block">
              <hr>
            </div>
          </div>
          <div>
            <div v-if="signin">
              <div class="social">
                <div>
                  <button class="facebook jose vice">
                    <span>
                      <i class="fab fa-facebook-f"></i>
                    </span> Sign up with Facebook
                  </button>
                </div>
                <div>
                  <button class="google jose vice">
                    <span>
                      <i class="fab fa-google"></i>
                    </span> Sign up with Google
                  </button>
                </div>
              </div>
            </div>
            <div v-if="!signin">
              <div class="social">
                <div>
                  <Button class="facebook jose vice">
                    <span>
                      <i class="fab fa-facebook-f"></i>
                    </span> Log in with Facebook
                  </Button>
                </div>
                <div>
                  <button class="google jose vice">
                    <span>
                      <i class="fab fa-google"></i>
                    </span> Log in With Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p v-if="signin" class="option jose">
          Already have an account?
          <span @click="switchSign()">Log in</span>
        </p>
        <p v-if="!signin" class="option jose">
          Don't have a LendGap account?
          <span @click="switchSign()">Sign up</span>
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      signin: true,
      bar: "",
      password: null,
      userEmail: "",
      userName: "",
      signInEmail: "",
      signInPassword: ""
    };
  },
  validations: {
    userEmail: {
      required,
      email
    },
    signInEmail: {
      required,
      email
    },
    userName: {
      required,
      minLen: minLength(6)
    },
    password: {
      required,
      minLen: minLength(6),
       strongPassword(password) {
        return (
          /[a-z]/.test(password) && // checks for a-z
          /[0-9]/.test(password) && // checks for 0-9
          /\W|_/.test(password) && // checks for special char
          password.length >= 6
        )
       }
    },
    signInPassword: {
      required,
      minLen: minLength(6)
    }
  },
  methods: {
    close() {
      this.$emit("close");
    },
    switchSign() {
      this.signin = !this.signin;
    }
  }
};
</script>

<style lang="scss" scoped>
hr {
  width: 0px;
  height: 10vh;
  @media screen and (max-width: 700px) {
    height: 1px;
    width: 50%;
  }
}
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  overflow: hidden;
  overflow-y: scroll;
  z-index: 9999999;
  text-align: start;
}

.modal {
  position: relative;
  background: #f8f4f4;
  overflow: hidden;
  overflow-y: scroll;
  top: 10%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 60%;
  height: 75vh;
  padding: 2rem;
  z-index: 99999999;
  box-sizing: border-box;
  color: #000;
  @media screen and (max-width: 600px) {
    width: 75%;
    height: 70vh;
    margin-left: 8%;
  }
}
.close {
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
  font-size: 40px;
  opacity: 0.5;
  @media screen and (max-width: 600px) {
    font-size: 20px;
    top: 10px;
  }
}
.form-header {
  font-size: 33px;
  font-weight: 500;
  letter-spacing: -1px;
  line-height: 30px;
  text-align: center;
  color: #ff2d6e;
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
}
.request {
  opacity: 0.5;
  color: #113e52;
  line-height: 0;
  text-align: center;
  font-weight: bold;
  letter-spacing: 1px;
  @media screen and (max-width: 600px) {
    line-height: normal;
  }
  span {
    font-weight: 100;
  }
}
.form-wrapper {
  width: 50%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
}
form {
  width: 100%;
}
.modal-body {
  font-size: 15px;
  width: 100%;
  padding: 0 4rem;
  box-sizing: border-box;
  margin-top: 5rem;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    padding: 0;
    margin-top: 2rem;
  }
  .register {
    background-color: #ff2d6e;
    color: #fff;
    padding: 0.7rem 2.5rem;
    margin: 0 30%;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    @media screen and (max-width: 700px) {
      width: 70%;
      margin: 0;
    }
  }
}
.input {
  position: relative;
  color: #acacac;
  font-family: "Josefin Sans";
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  line-height: 20px;
  .inputed {
    position: relative;
    width: 100%;
  }
  input {
    position: relative;
    margin-top: 1px;
    height: 45px;
    border-radius: 5px;
    width: 80%;
    border: 1px solid #e3e3e3;
    font-size: 18px;
    padding: 0.1rem 1.7rem;
    padding-right: 0;
  }
}
.eye {
  position: absolute;
  top: 15px;
  right: 16%;
  cursor: pointer;
  .fas {
    font-size: 17px;
  }
}
.password-bar {
  font-size: 11px;
  text-align: end;
  margin-right: 0;
  .strength-bar {
    background: #d8d8d8;
    height: 3px;
    display: inline-block;
    width: 84px;
  }
}
#strength {
  margin-bottom: 25px;
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
.terms {
  opacity: 0.7;
  color: #acacac;
  font-family: "Open Sans";
  font-size: 11px;
  text-align: center;
  @media screen and (max-width: 700px) {
    text-align: start;
  }
}
.option {
  // position: absolute;
  // bottom: 10px;
  // right: 40%;
  text-align: center;
  opacity: 0.8;
  color: #113e52;
  font-size: 12px;
  span {
    cursor: pointer;
    opacity: 1;
    font-weight: 800;
  }
}
.rule {
  opacity: 0.5;
  margin-top: 2rem;
  @media screen and (max-width: 700px) {
    text-align: center;
  }
}
.social {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 25% 0;
}
.vice {
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  padding: 0.8rem 2.4rem;
  border: none;
  margin: 5%;
  border-radius: 5px;
  width: 100%;
  @media screen and (max-width: 500px) {
    font-size: 11px;
  }
}
.facebook {
  background-color: #335a9e;
}
.google {
  background-color: #f03b2c;
}
.error {
  color: red;
}
@media screen and (max-width: 800px) {
  .modal {
    height: 80vh;
    overflow-y: scroll;
  }
}
</style>