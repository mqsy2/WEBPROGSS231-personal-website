const app = Vue.createApp({
    data() {
     return {
       manyFoods: [
         {name: 'image1', url: 'https://raw.githubusercontent.com/mqsy2/WEBPROGSS231-personal-website/refs/heads/main/images/image1.jpg'},
         {name: 'image2', url: 'https://raw.githubusercontent.com/mqsy2/WEBPROGSS231-personal-website/refs/heads/main/images/image2.jpg'},
         {name: 'image3', url: 'https://github.com/mqsy2/WEBPROGSS231-personal-website/blob/feature/1_MJQS_customize_my_website/images/image3.jpg?raw=true'},
       ]
     }
    }
   })
   
   app.mount('#app')
