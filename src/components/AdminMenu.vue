<template>
  <div class="menu">
    <Sidebar/>
    <fieldset>
      <h3 id="ro">Resturant owner</h3>
      <legend>
        <span class="number">M</span>
        <h2 id="add">Add your items resturant menu here :</h2>
      </legend>
      <div
        id="first"
        v-for="(input, index) in foodTypes"
        :key="`foodInput-${index}`"
      >
        <label id="bavaria">Dish name </label>
        <input
          id="name"
          type="text"
          name="food"
          class="from-control"
          placeholder="Write yout dish "
          v-model="input.food"
        />
        <div class="col-4">
          <label id="dish">Dish price</label>
          <input
            id="price"
            type="number"
            name="price"
            class="form-control"
            placeholder="Write your Price"
            v-model="input.price"
          />
        </div>
      </div>
      <div style="text-align: center; margin-top: 30px">
        <hr class="main-hr" />
        <button
          class="icon-btn add-btn"
          id="hello"
          @click="addField(foodTypes)"
        >
          <div class="btn-txt">Add</div>
        </button>
        <button class="icon-btn add-btn" @click="removeField(foodTypes)">
          <div class="btn-txt">Remove</div>
        </button>
      </div>
      <button id="bu" type="submit" @click="getMenuFood">Submit</button>
    </fieldset>
  </div>
</template>
<script>
import Sidebar from '../components/sidebar/Sidebar.vue'
import axios from "axios";
export default {
  components: { Sidebar },
  name: "AdminMenu",
  data() {
    return {
      foodTypes: [{ food: "", price: "" }],
    };
  },
  methods: {
    addField(fieldType) {
      fieldType.push({ food: "", price: "" });
    },
    removeField(fieldType) {
      fieldType.splice(0, 1);
    },
    getMenuFood: function () {
      this.foodTypes.map((item) => {
        const foodMenuu = { food: item.food, price: item.price };
        axios
          .post("http://localhost:5000/admin/foodmenu", foodMenuu)
          .then((response) => console.log(response));
      });
    },
  },
};
</script>
<style>
#dish {
  margin-top: 15px;
  color: black;
}
#bavaria {
  margin-top: 8px;
  color: black;
}
.menu {
  max-width: 500px;
  padding: 10px 20px;
  background: #f4f7f8;
  margin: 10px auto;
  padding: 20px;
  background: #f4f7f8;
  border-radius: 8px;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.menu fieldset {
  border: none;
}
.menu legend {
  font-size: 1.4em;
  margin-bottom: 10px;
}
.menu label {
  display: block;
  margin-bottom: 9px;
}
.menu fieldset {
  border: none;
}
.menu input[type="text"],
.menu input[type="number"],
.menu input[type="text"]:focus,
.menu input[type="number"]:focus,
#name textarea,
.menu textarea:focus,
.menu select:focus {
  background: #d2d9dd;
}
.menu .number {
  background: #acb6b6;
  color: #fff;
  height: 30px;
  width: 30px;
  display: inline-block;
  font-size: 0.8em;
  margin-right: 4px;
  line-height: 30px;
  text-align: center;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);
  border-radius: 15px 15px 15px 0px;
}

#bu {
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
}

.main-hr {
  width: 30%;
  border: none;
  border-top: 1px solid #c3c3c3;
}
.icon-btn {
  width: 50px;
  height: 50px;
  border: 1px solid #ecdfdf;
  background: rgb(228, 235, 233);
  opacity: 0.7;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  transition: width 0.2s ease-in-out;
}
.add-btn:hover {
  width: 120px;
}
.add-btn::before,
.add-btn::after {
  transition: width 0.2s ease-in-out, border-radius 0.2s ease-in-out;
  content: "";
  position: absolute;
  height: 4px;
  width: 10px;
  top: calc(50% - 2px);
  background: rgb(0, 255, 0);
}
.add-btn::after {
  right: 14px;
  overflow: hidden;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.add-btn::before {
  left: 14px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.icon-btn:focus {
  outline: none;
}
.btn-txt {
  opacity: 0;
  transition: opacity 0.2s;
}
.add-btn:hover::before,
.add-btn:hover::after {
  width: 4px;
  border-radius: 2px;
}
.add-btn:hover .btn-txt {
  opacity: 1;
}
.add-icon::before {
  left: 22px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.add-icon::after {
  right: 22px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.add-btn:hover .add-icon::before {
  left: 15px;
  height: 4px;
  top: calc(50% - 2px);
}
.add-btn:hover .add-icon::after {
  right: 15px;
  height: 4px;
  top: calc(50% - 2px);
}
#hello::before {
  transition: all 0.2s ease-in-out;
  content: "";
  position: absolute;
  height: 20px;
  width: 4px;
  margin-left: 10px;
  top: calc(50% - 10px);
  background: rgb(35, 185, 15);
  /* overflow: hidden; */
  margin: l;
}
#ro {
  font-family: Century Gothic;
  color: black;
}
#add {
  font-family: Geneva;
  color: black;
}
.menu {
  font-family: Georgia, "Times New Roman", Times, serif;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  font-size: 15px;
  outline: 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  background-color: #f0e5d5;
  opacity: 0.7;
  color: #8a97a0;
  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 30px;
}
.from-control {
  font-family: Georgia, "Times New Roman", Times, serif;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  font-size: 15px;
  margin: 0;
  outline: 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  background-color: #e8eeef;
  color: #8a97a0;
  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 30px;
}
.form-control {
  font-family: Georgia, "Times New Roman", Times, serif;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  font-size: 15px;
  margin: 0;
  outline: 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  background-color: #e8eeef;
  color: #8a97a0;
  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 30px;
}
#first {
  border-style: dashed;
  width: 450px;
}

body {
  background-image: url("./img3.jpg");
  /* background-size: 30; */

  /* background-repeat: no-repeat;
  background-attachment: fixed; */
}

.mc {
  font-family: myFirstFont;
  color: blue;
  opacity: 0.8;
}
</style>
