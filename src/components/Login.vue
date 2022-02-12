<template>
  <article class="cont">
    <div class="container" :class="{ 'sign-up-active': signUp }">
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-left">
            <h2>Welcome Back!</h2>
            <p>Please login with your personal info</p>
            <button class="invert" id="signIn" @click="signUp = !signUp">
              Log In
            </button>
          </div>
          <div class="overlay-right">
            <h2>Hello, Friend!</h2>
            <p>Please enter your personal details</p>
            <button class="invert" id="signUp" @click="signUp = !signUp">
              Sign UP
            </button>
          </div>
        </div>
      </div>
      <form class="sign-up" action="#">
        <h2>Create login</h2>
        <div>Use your email for registration</div>
        <input name="name" type="text" placeholder="Name" @input="change" />
        <input
          name="password"
          type="password"
          placeholder="Password"
          @change="change"
        />
        <input @change="changefile" name="picture" type="file" />
        <router-link :to="{ name: path }"
          ><button @click="signup">Sign Up</button></router-link
        >
      </form>
      <form class="sign-in" action="#">
        <h2>Log In</h2>
        <div>Use your account</div>
        <input
          name="loginName"
          type="text"
          placeholder="Name"
          @change="change"
        />
        <input
          name="loginPassword"
          type="password"
          placeholder="Password"
          @change="change"
        />
        <a href="#">Forgot your password?</a>
        <router-link :to="{ name: path }"
          ><button @click="logIn">Log in</button></router-link
        >
      </form>
    </div>
  </article>
</template>

<script>
import Swal from 'sweetalert2'
import axios from "axios";
import FormData from "form-data";
export default {
  data: () => {
    return {
      name: "",
      password: "",
      picture: "",
      path: "Login",
      signUp: false,
      loginPassword: "",
      loginName: "",
    };
  },
  methods: {
    changefile(e) {
      this.picture = e.target.files[0];
      const form = new FormData();
      form.append("file", this.picture);
      form.append("upload_preset", "bpnhlkro");
      axios
        .post("https://api.cloudinary.com/v1_1/dhgzyelo6/image/upload", form)
        .then((response) => {
          this.picture = response.data.secure_url;
        });
    },
    change(e) {
      this[e.target.name] = e.target.value;
    },
    signup() {
      const admin = {
        name: this.name,
        password: this.password,
        picture: this.picture,
      };

      // POST request using axios with error handling
      axios
        .post("http://localhost:5000/admin/signup", admin)
        .then((response) => {
          localStorage.setItem("admin", JSON.stringify(admin));
          response.data === "nice"
            ? (this.path = "menu")
            : (this.path = "Login");
        })
        .catch((error) => {
          Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Wrong password',
  footer: '<a href="">enter a valid password</a>'
})
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },
    logIn() {
      const admin = {
        loginName: this.loginName,
        loginPassword: this.loginPassword,
      };

      axios
        .post("http://localhost:5000/admin/login", admin)
        .then((response) => {
          console.log(response.data);
          response.data === "nice"
            ? (this.path = "menu")
            : (this.path = "Login")
        })
        .catch((err) => {
          Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong!',
  footer: '<a href="">wrong password</a>'
})
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.cont {
  position: absolute;
  margin: 7% 25%;
}
.container {
  position: relative;
  width: 768px;
  height: 480px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to bottom, #efefef, rgb(1, 17, 26));
  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    z-index: 100;
  }
  .overlay {
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    background: linear-gradient(to bottom right, #e3e0db, #26b559);
    color: #fff;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
  }
  @mixin overlays($property) {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 70px 40px;
    width: calc(50% - 80px);
    height: calc(100% - 140px);
    text-align: center;
    transform: translateX($property);
    transition: transform 0.5s ease-in-out;
  }
  .overlay-left {
    @include overlays(-20%);
  }
  .overlay-right {
    @include overlays(0);
    right: 0;
  }
}
h2 {
  margin: 0;
}
p {
  margin: 20px 0 30px;
}
a {
  color: #222;
  text-decoration: none;
  margin: 15px 0;
  font-size: 1rem;
}
button {
  border-radius: 20px;
  border: 1px solid #484d4081;
  background-color: #aa9f622f;
  color: rgba(255, 255, 255, 0.411);
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.1s ease-in;
  &:active {
    transform: scale(0.9);
  }
  &:focus {
    outline: none;
  }
}
button.invert {
  background-color: transparent;
  border-color: rgba(189, 54, 54, 0.527);
}
form {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 90px 60px;
  width: calc(50% - 120px);
  height: calc(100% - 180px);
  text-align: center;
  background: linear-gradient(to bottom, #ecce97, #fee9d7);
  transition: all 0.5s ease-in-out;
  div {
    font-size: 1rem;
  }
  input {
    background-color: rgba(238, 238, 238, 0.61);
    border: none;
    padding: 8px 15px;
    margin: 6px 0;
    width: calc(100% - 30px);
    border-radius: 15px;
    border-bottom: 1px solid #ddd;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff,
      0 1px 0 #fff;
    overflow: hidden;
    &:focus {
      outline: none;
      background-color: #fff;
    }
  }
}
.sign-in {
  left: 0;
  z-index: 2;
}
.sign-up {
  left: 0;
  z-index: 1;
  opacity: 0;
}
.sign-up-active {
  .sign-in {
    transform: translateX(100%);
  }
  .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.5s;
  }
  .overlay-container {
    transform: translateX(-100%);
  }
  .overlay {
    transform: translateX(50%);
  }
  .overlay-left {
    transform: translateX(0);
  }
  .overlay-right {
    transform: translateX(20%);
  }
}
@keyframes show {
  0% {
    opacity: 0;
    z-index: 1;
  }
  49% {
    opacity: 0;
    z-index: 1;
  }
  50% {
    opacity: 1;
    z-index: 10;
  }
}
</style>
