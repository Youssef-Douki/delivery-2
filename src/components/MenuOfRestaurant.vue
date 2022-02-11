<template>
  <div class="container">
      <div class="cont" v-for="datas in data" :key="datas.food_name" >
          <h3 class="food_name">{{datas.food_name}}</h3>
          <h4 class="price">{{datas.price}}</h4> 
          <button>Add</button>
      </div>
<!-- <div></div> -->
  </div>
</template>

<script>
import axios from "axios"
export default {
 
     
    data(){
      return {
        name:"",
        data :[]

      }
    }, mounted(){
        this.name = JSON.parse(localStorage.getItem("prop"))
        console.log(this.name)
        axios.get(`http://localhost:5000/user/menu/${this.name}`)
        .then(response=>{console.log(response)
            this.data = response.data
        })
        .catch(err=>{
          console.log(err)
        })
    }
}
</script>

<style>
.cont{
 border-radius: 18px;
    background-color: grey;
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

</style>