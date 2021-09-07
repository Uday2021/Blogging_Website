<template>
  <!-- <div class="editorWrapper">
    <vue-editor v-model="content" class="editor"></vue-editor>
  </div> -->
  <div class="editor-wrapper">
    <div class="title">
      <label for="title" style="font-weight: 500;">Title: </label>
      <input type="text" id="title" autocomplete="off" v-model="title" />
      <span style="color:tomato" v-if="!title"
            ><h5>*Please Enter Title</h5></span
          >
    </div>
    <div class="editor">
      <vue-editor v-model="content" style="height: 62vh; margin-left: 10px;"></vue-editor>
      <div class="category_wrapper">
        <div class="category">
          <label for="category">Category: </label>
          <select
            name="category"
            id="category"
            @change="change(val)"
            v-model="val"
          >
            <option value="">Choose category</option>
            <option
              :value="product"
              v-for="product in blogCategory"
              :key="product.id"
              >{{ product }}</option
            >
          </select>
          <span style="color:tomato" v-if="categoryNull"
            ><h5>*Please select Category</h5></span
          >
        </div>

      </div>
    </div>
    <div class="btn">
      <button id="btn" @click="post">Publish Blog</button>
    </div>
    <div id="snackbar" v-if="success">Your blog Published successfully...</div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';
import axios from 'axios';

export default {
  components: {
    VueEditor,
  },

  data() {
    return {
      content: '',
      success: false,
      categoryNull: false,
      val: '',
      title: '',
      author: 'uday',
      res: '',
      blogCategory: [
        'Fashion',
        'Food',
        'Travel',
        'Music',
        'Lifestyle',
        'Fitness',
        'DIY',
        'Sports',
      ],
    };
  },
  created() {
    this.author = JSON.parse(sessionStorage.user_info).data.newUser.firstName;
    //  this.res = this.author.data.newUser.firstName;
    //  console.log(res);
    console.log(this.author);
  },
  methods: {
    change(val) {
      console.log(val);
      if (val) {
        this.categoryNull = false;
      } else {
        this.categoryNull = true;
      }
    },
    post() {
      if (this.val) {
        let a = this;
        this.categoryNull = false;
        axios
          .post('http://localhost:3001/blogs', {
            title: this.title,
            description: this.content,
            author: this.author,
            blogCategory: this.val,
          })
          .then((res) => {
            //      var x = document.getElementById("snackbar");
            // x.className = "show";
            a.success = true;
            setTimeout(function() {
              a.success = false;
            }, 3000);

            console.log(res.data.data.blog);
          });
      } else {
        
        this.categoryNull = true;
        let st = this.content.split('<');
        console.log('string:', st[0]);
        console.log('image:', st[1].split(','));

      }
      // console.log(this.myHTML);
    },
  },
};
</script>

<style scoped>
#snackbar {
  /* visibility: hidden; */
  min-width: 250px;
  margin-left: -125px;
  background-color: rgb(79, 223, 79);
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 17px;
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

#title {
  height: 20px;
  width: 500px;
  border: none;
  border-bottom: 2px solid #888;
  border-radius: 3px;
  font-size: 18px;
  /* border:0; */
  /* outline:0; */
}
#title:focus{
    outline: none !important;
}

.title {
  padding: 20px 10px;
}

#btn {
  color: #fff;
  background-color: teal;
  border: 1.5px solid #61dafb;
  border-radius: 2em;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  cursor: pointer;
}

#btn:hover {
  color: teal;
  background-color: transparent;
  border: 1.5px solid #98bec9;
  transition: all ease-in-out 350ms;
}

.btn {
  padding: 20px 10px;
}

@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

.editor {
  /* max-width: 70%; */
  max-width: 100%;
  /* padding: 25px; */
  min-height: 70vh;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
}
#btn {
  cursor: pointer;
}

.editor-wrapper {
  width: 100vw;
  height: 100vh;
  /* display: flex;
justify-content: center;
align-items: center; */
}
.category {
  margin-left: 30px;
  font-weight: bold;
  /* margin-bottom: 20px; */
  margin-top: 50px;
}
.category_wrapper {
  border: 1px solid lightgray;
  height: 70vh;
  width: 20%;
  margin-left: 10%;
  background: #eee;
  display: flex;
  flex-direction: column;
}
</style>
