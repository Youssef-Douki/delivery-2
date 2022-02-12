<template>
  <div class="container">
    <div class="cont" v-for="datas in this.data" :key="datas">
      <router-link :to="{ name: path, params: { name: pathName } }">
        <div @click="goToMenu" :name="datas.name" class="card">
          <div class="card-header">
            <img v-bind:src="datas.picture" />
          </div>
          <div class="card-body">
            <span class="tag tag-teal">{{ datas.name }}</span>
            <p>
              We have the best delivery price , check out our menu . <br>
              You will never regrete it 
            </p>
          </div>
        </div></router-link
      >
    </div>
  </div>
</template>
<script>


import axios from "axios";

export default {
  data() {
    return {
      data: [],
      name: "",
      path: "",
      pathName: "",
    };
  },
  created() {
    axios
      .get("http://localhost:5000/user/restaurant")
      .then((data) => {
        this.data = data.data;
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  },
  methods: {
    goToMenu(e) {
      this.name =
        e.path[0].childNodes[0].data ||
        e.path[0].childNodes[0].childNodes[0].data;
      axios
        .get(`http://localhost:5000/user/menu/${this.name}`)
        .then((response) => {
          if (response.data.length !== 0) {
            this.path = "MenuOfRestaurant";
            this.pathName = this.name;

            localStorage.setItem("prop", JSON.stringify(this.name));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
body {
  background-color: #f3fbfb;
  font-family: "Open Sans", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}
.cont {
  width: 30%;
  height: 50%;
}
.card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 400px;
  height: 500px;
  // margin-right: -100px;
}
.card-header img {
  width: 100%;
  height: 270px;
  object-fit: cover;
}
.card-body {
  display: flex;
  flex-direction: column;
  align-items: start;

  min-height: 250px;
}
.tag {
  color: #fff;
  font-size: 15px;
  padding: 15px 100px;
  text-transform: uppercase;
  width: 100%;
  font-weight: bold;
}
.tag-teal {
  background-color: #5a585f;
}
.tag-purple {
  background-color: #3d1d94;
}
.tag-pink {
  background-color: #c62bcd;
}

.card-body p {
      font-size: 18px;
    margin: 40px 0 40px 0;
    color: black;
}
.user {
  display: flex;
  margin-top: auto;
}
.user img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
}
.user-info h5 {
  margin: 0;
}
.user-info small {
  color: #888785;
}
@media (max-width: 940px) {
  .container {
    grid-template-columns: 1fr;
    justify-items: center;
  }
}

/* CSS */
.btn {
  align-items: center;
  background-image: linear-gradient(135deg, #9e9e9e 40%, #9e9e9e);
  border: 0;
  border-radius: 10px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: "Codec cold", sans-serif;
  font-size: 16px;
  font-weight: 700;
  height: 54px;
  justify-content: center;
  letter-spacing: 0.4px;
  line-height: 1;
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 3px;
  text-decoration: none;
  text-transform: uppercase;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-left: 280px;
  margin-bottom: 90px;
}

.btn:active {
  outline: 0;
}

.btn:hover {
  outline: 0;
}

.btn span {
  transition: all 200ms;
}

.btn:hover span {
  transform: scale(0.9);
  opacity: 0.75;
}

@media screen and (max-width: 991px) {
  .btn {
    font-size: 15px;
    height: 50px;
  }

  .btn span {
    line-height: 50px;
  }
}
.container {
  display: grid;
  grid-template-columns: repeat(3, 0.25fr);
  grid-template-rows: repeat(9, 0fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin-left: 16%;
  margin: right 10%;
  margin-top: 8%;
}
</style>
