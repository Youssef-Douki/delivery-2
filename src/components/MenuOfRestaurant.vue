<template>
<!-- cart -->
  <div class="container">
      <div class="container">
    <div class="shopping-cart">
      <div class="shopping-cart-header">
        <i class="fa fa-shopping-cart cart-icon"></i>
        <span class="badge">{{this.badge}}</span>
        <div class="shopping-cart-total">
          <span class="lighter-text">Total:{{this.price}}.000 DT</span>
          <span class="main-color-text"></span>
        </div>
      </div>
      <ul class="shopping-cart-items">
        <li class="clearfix">delivery fees : 4.000 DT</li>
      </ul>
      <ul v-for="order in orders" :key="order.food_name" class="shopping-cart-items">
        <li class="clearfix">{{order.food_name}} : {{order.price}}.000 DT <button @click="del" class="btn"><i class="fa fa-trash"></i></button></li>
        
      </ul>

      <a href="#" class="button">Buy</a>
    </div>
  </div>
  
    <!--end shopping-cart -->




      <div class="cont" v-for="datas in data" :key="datas.food_name" >
          <h3  class="food_name">{{datas.food_name}}</h3>
          <h4 class="price">{{datas.price}}</h4> 
          <button  @click="addToCart" :name="datas.food_name"   class="btnAdd">+</button>
      </div>
  </div>
</template>

<script> 
import axios from "axios"
export default {     
    data(){
      return {
        name:"",
        data :[],
        foodName:"",
        orders : [],
        price : 4,
        badge : 0

      }
    }, mounted(){
        this.name = JSON.parse(localStorage.getItem("prop"))
        console.log(this.name)
        axios.get(`http://localhost:5000/user/menu/${this.name}`)
        .then(response=>{
            this.data = response.data
        })
        .catch(err=>{
          console.log(err)
        })
    },
    methods:{
     addToCart(e){
      this.foodName = e.path[0].name ;
      console.log(this.foodName,this.name)
      axios.get(`http://localhost:5000/user/menu/${this.name}/${this.foodName}`)
      .then(response=>{
        this.orders = this.orders.concat(response.data)
        this.price += response.data[0].price
        this.badge += 1

      })
      .catch(err=>{
        console.log(err)
      })
    },del(){
      this.orders = this.orders.slice(0,this.orders.length-1)
    }
    } 
}
</script>

<style lang="scss" scoped>
.btn{
background-color: #e64d4ded;
  border: none;
  color: white;
  padding: 7px 7px;
  font-size: 14px;
  cursor: pointer;
}
.btn:hover {
  background-color: #fb0000ed;
}
.btnAdd{
  font-size: 24px;
    border-radius: 7px;
    background-color: #b38147;
    color: black;
}
.cont{
 border-radius: 18px;
    background-color: #8f7e6aa8;
    margin-right: 30%;
    margin-bottom: 20px;
    padding: 8px 0px;
    display: flex;
    align-items: center;
    flex-direction: row;
    align-content: stretch;
    justify-content: space-evenly;
}



.food_name{
    width: 36%;
}
$main-color: #6394f8;
$light-text: #abb0be;

@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);

@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);

*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  font: 14px/22px "Lato", Arial, sans-serif;
  background: #6394f8;
}

.lighter-text {
  color: #232427;
}

.main-color-text {
  color: $main-color;
}

nav {
  padding: 20px 0 40px 0;
  background: #f8f8f8;
  font-size: 16px;

  .navbar-left {
    float: left;
  }

  .navbar-right {
    float: right;
  }
  ul {
    li {
      display: inline;
      padding-left: 20px;
      a {
        color: #777777;
        text-decoration: none;

        &:hover {
          color: black;
        }
      }
    }
  }
}

.container {
  margin: auto;
  width: 80%;
}

.badge {
  background-color: #b38147;
  border-radius: 10px;
  color: white;
  display: inline-block;
  font-size: 12px;
  line-height: 1;
  padding: 3px 7px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
}

.shopping-cart {
  background: white;
    width: 320px;
    position: absolute;
    border-radius: 3px;
    padding: 20px;
    right: 50px;
  
  
  .shopping-cart-header {
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: 15px;

    .shopping-cart-total {
      float: right;
    }
  }

  .shopping-cart-items {
    padding-top: 20px;

    li {
      margin-bottom: 18px;
    }

    img {
      float: left;
      margin-right: 12px;
    }

    .item-name {
      display: block;
      padding-top: 10px;
      font-size: 16px;
    }

    .item-price {
      color: $main-color;
      margin-right: 8px;
    }

    .item-quantity {
      color: $light-text;
    }
  }
}

.shopping-cart:after {
  bottom: 100%;
  left: 89%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: white;
  border-width: 8px;
  margin-left: -8px;
}

.cart-icon {
  color: black;
  font-size: 24px;
  margin-right: 7px;
  float: left;
}

.button {
  background: #b38147;
  color: white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  display: block;
  border-radius: 3px;
  font-size: 16px;
  margin: 25px 0 15px 0;

  &:hover {
    background: lighten(#b38147, 3%);
  }
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
</style>