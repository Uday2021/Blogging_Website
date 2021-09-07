<template>
     <!--CONTAINER-->
    <div class="container" id="container">
      <table>
        <tr>
          <td>
            <div class="cards">
              <h2>RECENT POSTS</h2>
              <!--CARD BEGINING-->
              <div class="card" v-for="(product, index) in products" :key="index">
                <section class="author" >
                  <img src="https://i.ibb.co/V216nQZ/01.webp" alt="" />
                  <span class="tag">{{product.blogCategory}}</span>
                </section>
                <section class="content">
                  <h4>{{product.title}}</h4>
                  <div class="line-1">
                    <span><i class="fa fa-user"></i> {{ product.author }}</span>
                    <span><i class="fa fa-clock-o"></i> {{product.createdDate}}</span>
                  </div>
                  <p v-html="product.description" style="margin-top: 10px;">

                  </p>
                  <span class="btn1" @click="blogDetail(product._id)">READ MORE</span>
                </section>
              </div>
              <!--CARD ENDS-->
             
              <button class="btn2" @click="moreLoad" style="cursor: pointer;"> <i v-if="success" class="fa fa-circle-o-notch fa-spin"></i> Load More</button>
            
            </div>
          </td>

          <td>
            <div class="cards right_cards">
              <h2>POPULAR POSTS</h2>
              <!--CARD BEGINING-->
              <div class="card right_card">
                <section class="author">
                  <img src="https://i.ibb.co/V216nQZ/01.webp" alt="" />
                </section>
                <section class="content">
                  <a href="#"
                    >What is Language Translator and its Types? Differences
                    between Compiler and Interpreter</a
                  >
                  <div class="line-1">
                    <span><i class="fa fa-clock-o"></i> OCTOBER 15, 2021</span>
                  </div>
                </section>
              </div>
              <!--CARD ENDS-->
              <!--CARD BEGINING-->
              <div class="card right_card">
                <section class="author">
                  <img src="https://i.ibb.co/V216nQZ/01.webp" alt="" />
                </section>
                <section class="content">
                  <a href="#"
                    >What is Language Translator and its Types? Differences
                    between Compiler and Interpreter</a
                  >
                  <div class="line-1">
                    <span><i class="fa fa-clock-o"></i> OCTOBER 15, 2021</span>
                  </div>
                </section>
              </div>
              <!--CARD ENDS-->
              <!--CARD BEGINING-->
              <div class="card right_card">
                <section class="author">
                  <img src="https://i.ibb.co/V216nQZ/01.webp" alt="" />
                </section>
                <section class="content">
                  <a href="#"
                    >What is Language Translator and its Types? Differences
                    between Compiler and Interpreter</a
                  >
                  <div class="line-1">
                    <span><i class="fa fa-clock-o"></i> OCTOBER 15, 2021</span>
                  </div>
                </section>
              </div>
              <!--CARD ENDS-->
              <!--CARD BEGINING-->
              <div class="card right_card">
                <section class="author">
                  <img src="https://i.ibb.co/V216nQZ/01.webp" alt="" />
                </section>
                <section class="content">
                  <a href="#"
                    >What is Language Translator and its Types? Differences
                    between Compiler and Interpreter</a
                  >
                  <div class="line-1">
                    <span><i class="fa fa-clock-o"></i> OCTOBER 15, 2021</span>
                  </div>
                </section>
              </div>
              <!--CARD ENDS-->
            </div>
          </td>
        </tr>
      </table>
    </div>

</template>

<script>
import axios from 'axios'
import moment from 'moment';

export default {
  data(){
      return{
         products: [],
         nextPage:0,
         success:false,
      }
  },
  mounted(){
     axios.get("http://localhost:3001/blogs?page=1").then(res =>{
       console.log(res.data.data.blogs);
              this.nextPage = res.data.page
       this.products = res.data.data.blogs;
          this.products.forEach(data =>{
data.createdDate = moment(data.createdDate).format('MMMM Do YYYY, h:mm:ss a');
          })

     })
  },
  methods:{
      blogDetail(id){
        // alert('ok')
        this.$router.push({path: '/blogs', query: { userId: id }})
        console.log(this.products._id);
      },
      moreLoad(){
        this.success = true
        this.nextPage++
        axios.get("http://localhost:3001/blogs?page=" + this.nextPage).then(res =>{
       console.log(res.data.data.blogs);
       this.nextPage = res.data.page
       this.products = [...this.products,...res.data.data.blogs];
       this.success = false
     })     
      }
  }
}
</script>