var app6 = new Vue({
    el: '#app',
    data: {
        text: '',
        num:0,
        food:[],
        gender:'',
        wokr:'' ,
        show:true
    },
    methods: {
        add: function () {
          this.num = this.num+1
        },
        del: function(){
            this.num = this.num-1
        },
        DisMessage: function () {
            this.show =!this.show
        }
    }
  })
