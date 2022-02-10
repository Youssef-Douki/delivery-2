<template >

    

<div class="container" >
   <div class="cont" v-for="datas in data" :key="datas.title">
      <div class="card">
        <div class="card-header">
          <img  v-bind:src="datas.restimage" />
        </div>
        <div class="card-body">
          <span class="tag tag-teal">{{datas.title}}</span>
          <h4 >description</h4>
          <p>
            {{datas.description}}
          </p>
          <div class="user">
            <img v-bind:src="datas.profile"  />
            <div class="user-info">
              <h5>Jerome Walton</h5>
             
            </div>
          </div>
          <router-link :to="{name:'AdminMenu',params:{id : datas.title}}"> <button class="btn">Menu</button></router-link>
        </div>
      </div>
     </div>
    </div>

   
  
  

  



</template>
<script>
 
  export default {
    name:"Cardrestaurant",   
     data(){
       return {
      data:[

        {title:"restaurantii",restimage:"https://th.bing.com/th/id/R.45ec96fab3c5d8a777be6c402530c0bc?rik=eNpbpvyCS4Q9sg&pid=ImgRaw&r=0",description:"very good ma8ir harisa",profile:"https://images.herb.co/wp-content/uploads/2017/06/You_Have_To_hero-1.jpg?auto=compress"},

        {title:"restaurantii",restimage:"https://th.bing.com/th/id/R.0ff4682f4dcd351db58c3b924ac80419?rik=BEiDH9vsiieLeg&pid=ImgRaw&r=0",description:"very good ma8ir harisa",profile:"https://move2turkey.com/wp-content/uploads/2021/02/Turkish-Chef-Nusret-All-you-need-to-know-about-the-Salt-Bae-Restaurants5.jpg"},

        {title:"restaurantii",restimage:"https://th.bing.com/th/id/R.81bfeecfb8d1c6ad04c171b8ad63ba40?rik=sSu6ISZl635H0Q&pid=ImgRaw&r=0",description:"very good ma8ir harisa",profile:"https://th.bing.com/th/id/OIP.6_h3MvJc0ohyL24B68yN2wHaEE?pid=ImgDet&rs=1"},

        {title:"restaurantii",restimage:"https://th.bing.com/th/id/R.3513494f8c937b8e4eb42da767da2f73?rik=ZfT4Bims43MnHQ&riu=http%3a%2f%2fdeturquia.com%2fwp-content%2fuploads%2f2018%2f02%2f2287.jpg&ehk=%2fpc009vgrCFqqE9KxQbD%2bOjhfOIuclAS3TcjWodGCUA%3d&risl=&pid=ImgRaw&r=0",description:"very good ma8ir harisa",profile:"https://th.bing.com/th/id/R.65367c23cdfcdc3ae3a2edb997596868?rik=D69xuhnzjoqSCQ&pid=ImgRaw&r=0"},

      ]
    }
    }
  }
  
   
 
  
  
</script>
// <style  lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");
  
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
.cont{
  width: 30%;
  height:50%;
}
.card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 400px;
  height:500px;
  // margin-right: -100px;
}
.card-header img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-body {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
  min-height: 250px;
  
}
.tag {
  background-color: #ccc;
  color: #fff;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  padding: 4px 50px;
  text-transform: uppercase;
}
.tag-teal {
  background-color: #92d4e4;
}
.tag-purple {
  background-color: #3d1d94;
}
.tag-pink {
  background-color: #c62bcd;
}
.card-body h4 {
  margin: 10px 0;
}
.card-body p {
  font-size: 14px;
  margin: 0 0 40px 0;
  font-weight: 500;
  color: rgb(70, 68, 68);
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
  background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
  border: 0;
  border-radius: 10px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: "Codec cold",sans-serif;
  font-size: 16px;
  font-weight: 700;
  height: 54px;
  justify-content: center;
  letter-spacing: .4px;
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
  margin-bottom:90px;
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
  transform: scale(.9);
  opacity: .75;
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
.container{
   display: grid;
grid-template-columns: repeat(3, 0.25fr);
grid-template-rows: repeat(9, 0fr);
grid-column-gap: 10px;
grid-row-gap: 10px;
    margin-left: 19%;
    margin: right 10%;
    margin-top : 8%
}


</style>