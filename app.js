var app = new Vue({
    el: '#app',
    data: {
      name: '',
      age: 0,
      food:[],
      gender:'',
      work:'',
      show:''
    },
      methods: {
        addAge: function () {
          this.age = this.age+1
        },
        delAge: function () {
            this.age = this.age-1
        },
        DisMessage: function () {
            this.show = 'Click เพื่อแสดงข้อความ'
        }
      }
  })
 