new Vue({
    el: '#app',
    data: {
        name: '',
        food:[],
        sex: '',
        job: '',
        message: false,
        age: 20
    },
    computed: {
        setName: function(name){
            return this.name=name;
        }
    },
})