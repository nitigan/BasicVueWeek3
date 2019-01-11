var app = new Vue({
    el:'#app',
    data:{
        name:'',
        age: 20,
        food: [],
        gender:'',
        job:'',
        status:true
    },
    methods:{
        addAge:function()
        {
            this.age = this.age + 1
        },
        desAge:function()
        {
            this.age = this.age - 1
        },
        changStatus:function()
        {
            this.status = !this.status
        }
    }
})