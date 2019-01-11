var app = new Vue({
    el: '#app',
    data: {
      message: ''
      ,age : 0
      ,foods:[]
      ,gender:''
      ,job:''
      ,showmessage :'Click เพื่อแสดงข้อความ'
      
    },
    methods:{
        plus:function(){
            this.age = this.age+1
        },
        eq: function(){
            this.age = this.age-1
        },
        show: function(){
            if(this.showmessage == ''){
                this.showmessage = this.showmessage='Click เพื่อแสดงข้อความ'
            }
            else{
                this.showmessage = this.showmessage=''
            }
            
        }
    }
})