<template>
    <!--BANNER-->
    <div class="banner" id="banner">
      <div class="slideshow" >
        <div class="overlay"></div>
        <img class="mySlides" src="https://i.ibb.co/y5P8bDW/slide-1.jpg" />
        <img class="mySlides" src="https://i.ibb.co/WHLFx3Q/slide-2.jpg" />
        <img class="mySlides" src="https://i.ibb.co/QFFxwTN/slide-3.jpg" />
      </div>
      
      <div class="btn" >
                 <button id="btn" @click="newBlog()">Create Your Blog</button>
        </div>

      <div id="ourclients">
        
          

        <div class="clients-wrap">
          <ul id="clientlogo" class="clearfix">
            

            <li>
              <h4>1Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            </li>
            <li>
              <h4>2Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            </li>
            <li>
              <h4>3Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            </li>
            <li>
              <h4>4Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            </li>
            <li>
              <h4>5Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            </li>
            <li>
              <h4>6Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>

</template>

<script>
export default {
    name: 'banner',
    data(){
        return{
          
        }
    },
    mounted(){
    //   SLIDE SHOW
    var myIndex = 0;
    carousel();
    function carousel() {
      var i;
      var x = document.getElementsByClassName('mySlides');
      for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
      }
      myIndex++;
      if (myIndex > x.length) {
        myIndex = 1;
      }
      x[myIndex - 1].style.display = 'block';
      setTimeout(carousel, 5000); // Change image every 2 seconds
    }
  
    },
    methods:{
      newBlog(){
        if(localStorage.user_info){
        this.$router.push("/newBlog");
      }
      else{
        this.$router.push('/login');
      }
      }
      }
    }

</script>

<style scoped>

#btn{
  position:absolute;
  z-index: 10;
  top: 40%;
  left: 40%;
  height: 40px;
  width: 180px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  color: orangered;
  background: lightgrey;
}

#btn:hover{
  cursor: pointer; 
  background: #666 ;
  color: #fff;
}
</style>