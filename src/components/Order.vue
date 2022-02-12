<script></script>

<template>
  <div class="container">
    <Sidebar />
    <h2>Order food</h2>
    <ul class="table">
      <li class="table-header">
        <div class="col col-1">Customer Name</div>
        <div class="col col-3">order</div>

        <div class="col col-4">Payment Status</div>
        <div class="col col-4">confirmation</div>
      </li>
      <li class="table-row">
        <div class="col col-2" data-label="desxription">{{order.name}}</div>
        <div v-for="data in order.orders" :key="data.food_name">
          <div class="col col-3" data-label="Order">{{data.food_name}}</div>
        </div>
        <div class="col col-3" data-label="Amount Due">{{order.total}}</div>

        <div class="col col-3" data-label="Order">{{order.phoneNumber}}</div>

        
        <button class="col col-4" id="btn"><i class="fa fa-check"></i></button>
      </li>
    </ul>
  </div>
</template>
<script>
import Sidebar from "../components/sidebar/Sidebar.vue";
export default {
  data(){
      return {
        order : []

      }
  },
  components: { Sidebar },
  created(){
    this.order= JSON.parse(localStorage.getItem("order"))
    console.log(this.order)
  }
};
</script>

<style lang="scss" scoped>
body {
  font-family: "lato", sans-serif;
}
.container {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
}

h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
  small {
    font-size: 0.5em;
  }
}

.table {
  li {
    border-radius: 3px;
    padding: 25px 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }
  .table-header {
    background-color: #95a5a6;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
  .table-row {
    background-color: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
  }
  .col-1 {
    flex-basis: 10%;
  }
  .col-2 {
    flex-basis: 40%;
  }
  .col-3 {
    flex-basis: 25%;
  }
  .col-4 {
    flex-basis: 25%;
  }

  @media all and (max-width: 767px) {
    .table-header {
      display: none;
    }

    li {
      display: block;
    }
    .col {
      flex-basis: 100%;
    }
    .col {
      display: flex;
      padding: 10px 0;
      &:before {
        color: #6c7a89;
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: right;
      }
    }
  }
}
</style>
