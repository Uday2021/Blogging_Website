<template>
  <!--TOP NAVIGATION-->
  <header id="header">
    <div class="topnav" id="myTopnav">
      <a href="#"
        ><img class="logo" src="https://i.ibb.co/ZH11dmd/logo.png" alt=""
      /></a>
      <a id="active">Blogger</a>
      <a href="#">HOME</a>
      <div class="dropdown">
        <button class="dropbtn">
          CATEGORY
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content animate">
          <a href="#">Food</a>
          <a href="#">Fashion</a>
          <a href="#">Travel</a>
          <a href="#">Music</a>
          <a href="#">Lifestyle</a>
          <a href="#">Fitness</a>
          <a href="#">Technology</a>
        </div>
      </div>
      <a href="#about">CONTACT</a>
      <a href="#about">ABOUT</a>
      <a v-if="user" href="/login">LOGIN/REGISTER</a>

      <a href="#about"  style="float:right;padding: 24px 2px;"
        ><i class="fa fa-search" style="font-size: 20px;"></i
      > </a>
      <a href="#about" v-if="!user" style="float:right;padding: 24px 2px;"
        ><i class="fa fa-user-circle-o" style="font-size: 20px;"></i
      >{{userName}}</a>
      <a
        href="javascript:void(0);"
        style="font-size:15px;"
        class="icon"
        v-on:click="NavBar()"
        >&#9776;</a
      >
    </div>
  </header>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
       user: true,
       userName: "",
    };
  },
  methods: {
    NavBar() {
      var x = document.getElementById('myTopnav');
      if (x.className === 'topnav') {
        x.className += ' responsive';
      } else {
        x.className = 'topnav';
      }
    },
  },
  mounted() {
    window.onscroll = function() {
      scrollFunction();
    };
    function scrollFunction() {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        document.getElementById('myTopnav').style.width = '100%';
        document.getElementById('header').style.position = 'fixed';
        document.getElementById('header').style.top = '0%';
        document.getElementById('roll_back').style.display = 'block';
      } else {
        document.getElementById('myTopnav').style.width = '80%';
        document.getElementById('header').style.position = 'fixed';
        document.getElementById('header').style.top = '2rem';
        document.getElementById('roll_back').style.display = 'none';
      }
    }
    if(localStorage.user_info){
       this.user = false;
       this.userName =JSON.parse(localStorage.user_info).data.data.user.firstName;
       console.log(this.userName);
    }
  },
};
</script>
