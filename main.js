var app = new Vue({
    el: ".app",

    data(){
        return{
            is: {
                stupid: "",
            }
        }
    },

    methods: {
        isStupid(){
            var choice = Math.floor(Math.random() * 2)
            switch(choice){
                case 0:
                this.is.stupid = "Yeaaaah, you stupid as FUCK";
                break;

                case 1:
                this.is.stupid = "nahh, you not stupid";
                break;
            }
        }
    },
    mounted(){
        this.isStupid()
    }
})