<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <span class="close">
          <i class="fas fa-times" @click="close()"></i>
        </span>
        <div class="form-header jose" v-if="signin">Create Your Account</div>
        <div class="form-header jose" v-if="!signin">Login to Your Account</div>
        <p class="request normal">
          To request for loan
          <span>or</span> become a lender
        </p>
        <div class="modal-body">
          <div class="form-wrapper">
            <form action v-if="signin">
              <div class="input">
                FULL NAME
                <div>
                  <input required type="text" name="fullName">
                </div>
              </div>
              <div class="input">
                EMAIL
                <div>
                  <input required type="email" name="logemail">
                </div>
              </div>
              <div class="input" id="strength">
                PASSWORD
                <div class="inputed">
                  <input required type="password" name="password" v-model="password" @input="meter()">
                  <span class="eye">
                    <i class="fas fa-eye"></i>
                  </span>
                </div>
                <div class="password-bar">
                  Password Strength
                  <div class="strength-bar" :class="bar">
                    <span :class="bar"></span>
                  </div>
                </div>
              </div>
              <p class="terms">By creating an account,You are agreeing to our Terms and Conditions</p>
              <button class="register">Sign In</button>
            </form>
            <form action v-if="!signin">
              <div class="input">
                EMAIL
                <div>
                  <input required type="email" name="logemail">
                </div>
              </div>
              <div class="input">
                PASSWORD
                <div class="inputed">
                  <input required type="password" name="password">
                  <span class="eye">
                    <i class="fas fa-eye"></i>
                  </span>
                </div>
              </div>
              <p class="terms">Forgot Your Password</p>
              <button class="register">Sign Up</button>
            </form>
          </div>
          <div class="rule">
            <div>
              <hr>
            </div>
            <div>OR</div>
            <div>
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
export default {
  data() {
    return {
      signin: true,
      bar: "",
      password: null,
      password_length: 0
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    switchSign() {
      this.signin = !this.signin;
    },
    meter() {
      this.password_length = this.password.length;
      if (this.password_length < 4) {
        this.bar = "defaultBar";
      }
      if (this.password_length > 4 && this.password_length < 8) {
        this.bar = "middleBar";
      }
      if (this.password_length > 8) {
        this.bar = "okayBar";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
hr {
  width: 0px;
  height: 10vh;
  /* or height in PX */
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
  z-index: 9999999;
  text-align: start;
}

.modal {
  position: relative;
  background: #f8f4f4;
  overflow: hidden;
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
}
.close {
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
  font-size: 40px;
  opacity: 0.5;
}
.form-header {
  font-size: 33px;
  font-weight: 500;
  letter-spacing: -1px;
  line-height: 30px;
  text-align: center;
  color: #ff2d6e;
}
.request {
  opacity: 0.5;
  color: #113e52;
  line-height: 0;
  text-align: center;
  font-weight: bold;
  letter-spacing: 1px;
  span {
    font-weight: 100;
  }
}
.form-wrapper{
  width:50%;
}
form{
  width:100%;
}
.modal-body {
  font-size: 15px;
  width: 100%;
  padding:0 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  margin-top: 5rem;
  .register{
    background-color: #FF2D6E;
    color:#fff;
    padding:0.7rem 2.5rem;
    margin:0 30%;
    border:none;
    cursor:pointer;
    border-radius:5px;
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
  right:16%;
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
.defaultBar {
  width: 25%;
  background: red;
  height: 100px;
}
.middleBar {
  width: 50%;
  background: yellow;
  height: 100px;
}
.okayBar {
  width: 100%;
  background: green;
  height: 100px;
}
.terms {
  opacity: 0.7;
  color: #acacac;
  font-family: "Open Sans";
  font-size: 11px;
  text-align: center;
}
.option{
  position:absolute;
  bottom:10px;
  right:40%;
  text-align:center;
  opacity:0.8;
  color:#113e52;
  font-size: 12px;
  span{
    cursor:pointer;
    opacity:1;
    font-weight:800;
  }

}
.rule{
  opacity:0.5;
  margin-top:2rem;
}
.social{
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-content:center;
  align-items: center;
  margin:25% 0;
}
.vice{
  color:#fff;
  cursor:pointer;
  font-size:17px;
  padding:0.8rem 2.6rem;
  border:none;
  margin:5%;
  border-radius:5px;
  width:100%;
}
.facebook{
  background-color: #335A9E;
}
.google{
background-color: #F03B2C;
}
@media screen and (max-width: 800px) {
  .modal {
    height: 80vh;
    overflow-y: scroll;
  }
}
</style>