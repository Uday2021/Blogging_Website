<template>
  <body>
    <section>
      <div class="container">
        <div class="user signinBx">
          <div class="imgBx">
            <img
              src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg"
              alt=""
            />
          </div>
          <div class="formBx">
            <form action="" onsubmit="return false;">
              <h2>Sign In</h2>
              <input
                type="email"
                name=""
                placeholder="Email"
                autocomplete="new-email"
                v-model="email"
              />
              <input
                type="password"
                name=""
                placeholder="Password"
                autocomplete="new-password"
                v-model="password"
              />
              <input type="submit" name="" @click="signIn" value="Login" />
              <p class="signup">
                Don't have an account ?
                <a href="#" @click="toggleForm">Sign Up.</a>
              </p>
            </form>
          </div>
        </div>
        <div class="user signupBx">
          <div class="formBx">
            <form action="" onsubmit="return false;">
              <h2>Create an account</h2>
              <input
                type="text"
                name=""
                placeholder="First Name"
                v-model="fname"
              />
              <input
                type="text"
                name=""
                placeholder="Last Name"
                v-model="lname"
              />
              <input
                type="email"
                name=""
                placeholder="Email Address"
                v-model="email"
                autocomplete="new-email"
              />
              <input
                type="password"
                name=""
                placeholder="Create Password"
                v-model="password"
                autocomplete="new-password"
              />
              <input
                type="password"
                name=""
                placeholder="Confirm Password"
                v-model="cpassword"
              />
              <input type="submit" name="" @click="signUp()" value="Sign Up" />
              <p class="signup">
                Already have an account ?
                <a href="#" @click="toggleForm">Sign in.</a>
              </p>
            </form>
          </div>
          <div class="imgBx">
            <img
              src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

<script>
import axios from 'axios';

import Swal from 'sweetalert2/dist/sweetalert2.all.min.js';

export default {
  data() {
    return {
      fname: '',
      lname: '',
      email: '',
      password: '',
      cpassword: '',
    };
  },

  methods: {
    toggleForm() {
      const container = document.querySelector('.container');
      container.classList.toggle('active');
    },

    signUp() {
      axios
        .post('http://localhost:3001/users/signup', {
          firstName: this.fname,
          lastName: this.lname,
          email: this.email,
          password: this.password,
          confirmPassword: this.cpassword,
        })
        .then((res) => {
          console.log(res);
          this.toggleForm();
        })
        .catch((e) => {
          console.log(e);
          this.$swal('Hello Vue world!!!');
        });
    },
    signIn() {
      axios
        .post('http://localhost:3001/users/login', {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res, 'response of result');

          this.$router.push('/');
          localStorage.setItem('user_info', JSON.stringify(res));
        })
        .catch((e) => {
          console.log(JSON.stringify(e));
          if(e.message === "Request failed with status code 400"){
                Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter email and password',
          });
          }
          else if(e.message === "Request failed with status code 401"){
               Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter valid credential',
          });
          }else{
             Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong',
          });
          }
         });
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

section {
  position: relative;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  background-repeat: round;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

section .container {
  position: relative;
  width: 800px;
  height: 520px;
  background: #bbb;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border-radius: 5px;
}

section .container .user {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
}

section .container .user .imgBx {
  position: relative;
  width: 50%;
  height: 100%;
  background: #ff0;
  transition: 0.5s;
}

section .container .user .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

section .container .user .formBx {
  position: relative;
  width: 50%;
  height: 100%;
  background: #bbb;
  display: flex;
  z-index: 10;
  justify-content: center;
  align-items: center;
  padding: 40px;
  transition: 0.5s;
}

section .container .user .formBx form h2 {
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
  color: #555;
}

section .container .user .formBx form input {
  position: relative;
  width: 100%;
  padding: 10px;
  background: #f5f5f5;
  color: #333;
  border: none;
  outline: none;
  box-shadow: none;
  margin: 8px 0;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;
}

section .container .user .formBx form input[type='submit'] {
  max-width: 100px;
  background: #677eff;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  transition: 0.5s;
}

section .container .user .formBx form .signup {
  position: relative;
  margin-top: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  color: #555;
  text-transform: uppercase;
  font-weight: 300;
}

section .container .user .formBx form .signup a {
  font-weight: 600;
  text-decoration: none;
  color: #677eff;
}

section .container .signupBx {
  pointer-events: none;
}

section .container.active .signupBx {
  pointer-events: initial;
}

section .container .signupBx .formBx {
  left: 100%;
}

section .container.active .signupBx .formBx {
  left: 0;
}

section .container .signupBx .imgBx {
  left: -100%;
}

section .container.active .signupBx .imgBx {
  left: 0%;
}

section .container .signinBx .formBx {
  left: 0%;
}

section .container.active .signinBx .formBx {
  left: 100%;
}

section .container .signinBx .imgBx {
  left: 0%;
}

section .container.active .signinBx .imgBx {
  left: -100%;
}

@media (max-width: 2000px) {
  section .container {
    max-width: 400px;
  }

  section .container .imgBx {
    display: none;
  }

  section .container .user .formBx {
    width: 100%;
  }
}
</style>
