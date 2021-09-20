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
        filteredTodoList:[],
        newTodo:"",
        lastId:4,
        listStatus:2 // 2=all, 1=completed, 0=active
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
            let temp=prompt("insert the modifiex text: ");
            if(temp!=""){
                this.todoList[index].content=temp;
            }
        },
        clearList(){
            this.todoList=[];
        },
        filterArray(filter){
            if(filter==0){
                this.filteredTodoList=this.todoList.filter((element) => element.completed==false)
            }else if(filter==1){
                this.filteredTodoList=this.todoList.filter((element) => element.completed==true)
            }else{
                this.filteredTodoList=[...this.todoList];
            }
        }
    },
    mounted(){
        this.filteredTodoList=[...this.todoList];
    }
});