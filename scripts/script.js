var app = new Vue({
    el: '#root',
    data: {
        todoList:[
            {
                content: "comprare salmone",
                id: 1,
                completed: false
            },
            {
                content: "andare dal parrucchiere",
                id: 2,
                completed: true
            },
            {
                content: "tagliare il prato",
                id: 3,
                completed: false
            },
            {
                content: "andare a trovare nonna",
                id: 4,
                completed: false
            }
        ],
        newTodo:"",
        lastId:4
    },
    methods: {
        toggleCompleted(){
            // this.completed?this.completed=false:this.completed=true;
            if(this.completed==true){
                this.completed=false;
            }else{
                this.completed=true;
            }
        },
        deleteElement(index){
            this.todoList.splice(index,1);
        },
        addItem(){
            if(this.newTodo!=""){
                this.lastId++;
                this.todoList.push({content: this.newTodo, id: this.lastId, completed: false});
                this.newTodo="";
            }
        }
    }
});