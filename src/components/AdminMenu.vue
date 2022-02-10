<template>
  <div class="menu">
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
    <footer>&copy; Bavarian Bites 2022 powered by Adidas bmw</footer>
  </div>
</template>
<script>
import axios from "axios";
export default {
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
      //   console.log(this.foodTypes);
      this.foodTypes.map((item) => {
        console.log(item);
        // console.log(item.food,'hello')
        //  console.log(item.price,'YES')
        const foodMenuu = { food: item.food, price: item.price };
        axios
          .post("/foodmenu", foodMenuu)
          .then((response) => console.log(response));
      });
    },
  },
};
</script>
<style>
#dish {
  margin-top: 15px;
}
#bavaria {
  margin-top: 8px;
}
.menu {
  max-width: 500px;
  padding: 10px 20px;
  background: #F4F7F8;
  margin: 10px auto;
  padding: 20px;
  background: #F4F7F8;
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
  background: #D2D9DD;
}
.menu .number {
  background: #1ABC9C;
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
/* .menu input[type="button"]
.menu input[type="submit"] */
#bu {
  position: relative;
  display: block;
  padding: 19px 39px 18px 39px;
  color: #fff;
  margin: 0 auto;
  background: #1ABC9C;
  font-size: 18px;
  text-align: center;
  font-style: normal;
  width: 100%;
  border: 1px solid #16A085;
  border-width: 1px 1px 3px;
  margin-bottom: 10px;
  margin-top: 20px;
}
/* #price {
  margin-left: 9px;
} */
.main-hr {
  width: 30%;
  border: none;
  border-top: 1px solid #C3C3C3;
}
.icon-btn {
  width: 50px;
  height: 50px;
  border: 1px solid #ECDFDF;
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
  background: red;
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
  background: red;
  /* overflow: hidden; */
  margin: l;
}
#ro {
  font-family: Century Gothic;
  color: orangered;
}
#add {
  font-family: Geneva;
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
  background-color: #E8EEEF;
  color: #8A97A0;
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
  background-color: #E8EEEF;
  color: #8A97A0;
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
  background-color: #E8EEEF;
  color: #8A97A0;
  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 30px;
}
#first {
  border-style: dashed;
  width: 450px;
}
</style>