var app = new Vue({
    el: '#app',
    data: {
      message: '',
      num:0,
      checkedNames: [],
      picked: '',
      selected: '',
      show:false
      
    },
    methods: {
        add: function(){
            this.num = this.num+1
        },
        del: function(){
            this.num = this.num-1
        },
        DisMessage: function(){
            this.show =! this.show
        }
    }
  })