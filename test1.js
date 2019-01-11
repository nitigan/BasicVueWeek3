var app = new Vue({
    el: '#app',
    data: {
      message: '',
      age: 0,
      food: [],
      gender:'',
      job:'',
      dismes: 'Click เพื่อแสดงข้อความ'
    },
    methods: {
        plus: function () {
          this.age=this.age+1
        },
        eq: function () {
            this.age=this.age-1
          },
        onclickdis: function(){
            if(this.dismes == ''){
                this.dismes='Click เพื่อแสดงข้อความ'
            }
            else{
                this.dismes=''
            }

        }
      }
  })