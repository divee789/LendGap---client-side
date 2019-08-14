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
            <div class="error">{{ error }}</div>
            <form v-if="signin" @submit="register">
              <div class="input">
                FULL NAME
                <div>
                  <input
                    type="text"
                    name="fullName"
                    required
                    v-model="username"
                    @blur="$v.userName.$touch()"
                  />
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
                  />
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
                  />
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
                <p
                  class="error"
                  v-if="!$v.password.strongPassword"
                >Strong passwords need to have a letter, a number, a special character, and be more than 6 characters long.</p>
              </div>
              <p class="terms">By creating an account,You are agreeing to our Terms and Conditions</p>
              <button class="register" type="submit">Sign Up</button>
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
                  />
                  <p
                    v-if="!$v.signInEmail.email"
                    class="error"
                  >Please provide a valid email address.</p>
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
                  />
                  <span class="eye">
                    <i class="fas fa-eye"></i>
                  </span>
                </div>
              </div>
              <p class="terms">Forgot Your Password</p>
              <button class="register" @click="dashw">Sign In</button>
            </form>
          </div>
          <div class="rule">
            <div class="block">
              <hr />
            </div>
            <div>OR</div>
            <div class="block">
              <hr />
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
      password: "",
      userEmail: "",
      username: "",
      signInEmail: "",
      signInPassword: "",
      error: ""
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
        );
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
    },
    async register() {
      event.preventDefault();
      const user = {
        username: this.username,
        password: this.password,
        email: this.userEmail
      };
      let response = await this.$store.dispatch("signUp", user);
      console.log("log res", response);
      if (
        response.data !== "A user with the given email is already registered" &&
        response.data !== "A user with the given username is already registered"
      ) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("jwt", response.data.token);

        if (localStorage.getItem("jwt") != null) {
          this.$emit("loggedIn");
          if (this.$route.params.nextUrl != null) {
            this.$router.push(this.$route.params.nextUrl);
          } else {
            this.$router.push("/dashboard");
          }
        }
        this.$router.push("/dashboard");
      } else {
        this.error = response.data;
      }
    },
    async dashw() {
      event.preventDefault();
      const logData = {
        email: this.signInEmail,
        password: this.signInPassword
      };
      let response = await this.$store.dispatch("logIn", logData);
      console.log("login res", response);
      await localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("jwt", response.data.token);
      if (localStorage.getItem("jwt") != null) {
        this.$emit("loggedIn");
        if (this.$route.params.nextUrl != null) {
          this.$router.push(this.$route.params.nextUrl);
        } else {
          this.$router.push("/dashboard");
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./log.scss";
</style>