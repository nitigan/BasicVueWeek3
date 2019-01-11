var app = new Vue({
    el: '#app',
    data: {
      message: ''
      ,age: 0
      ,food:[]
      ,showing:'Click เพื่อแสดงข้อความ'
      ,sex:''
      ,job:''
    
    },
    methods: {
        plus:function(){
            this.age = this.age+1
        }
,
        eq:function(){
            this.age = this.age-1
        }
,
        show:function(){

            if(this.showing == ''){

                this.showing = this.showing = 'Click เพื่อแสดงข้อความ'

            }
            else{
                this.showing = this.showing = ''

            }

        }
      
    }
    
  })










