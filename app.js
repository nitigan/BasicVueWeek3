var app = new Vue({
    el: '#app',
    data: {
      text: '',
      check:[],
      age: 20,
      gender:'',
      work:'',
      show:false
    },
    methods: {
        addAge: function () {
            this.age++
           
        },
        delAge: function () {
            this.age--
        },
        dis: function(){
            this.show = !this.show
        }
        
      }
    
  })