var app = new Vue({
    el: '#app',
    data: {
      name: '',
      age: 0,
      food:[],
      gender:'',
      work:'',
      show:true
    },
      methods: {
        addAge: function () {
          this.age = this.age+1
        },
        delAge: function () {
            this.age = this.age-1
        },
        DisMessage: function () {
            this.show =!this.show
        }
      }
  })
 