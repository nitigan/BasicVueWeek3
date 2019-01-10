var app = new Vue({
    el: '#app',
    data: {
      text: '' ,
      age:10,
      food: [],
      gender : '',
      a : '',
      status:true
    },
    methods: {
      show: function () {
        this.status=!this.status
      }
    }
    
  
  
  })