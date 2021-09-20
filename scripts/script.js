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
        lastId:4,
        listStatus:"all" // all or active or completed
    },
    methods: {
        toggleCompleted(index){
            this.todoList[index].completed?this.todoList[index].completed=false:this.todoList[index].completed=true;
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
        },
        modifyItem(index){
            this.todoList[index].content=prompt("insert the modifiex text: ");
        },
        clearList(){
            this.todoList=[];
        }
    }
});