var app = new Vue({
    el: '#root',
    data: {
        todoList:[
            {
                content: "comprare salmone",
                id: 1,
                completed: false,
                onModify: false
            },
            {
                content: "andare dal parrucchiere",
                id: 2,
                completed: true,
                onModify: false
            },
            {
                content: "tagliare il prato",
                id: 3,
                completed: false,
                onModify: false
            },
            {
                content: "andare a trovare nonna",
                id: 4,
                completed: false,
                onModify: false
            }
        ],
        filteredTodoList:[],
        newTodo:"",
        lastId:4,
        textTobeModified: "",
        flagModify: false,
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
            if(this.textTobeModified!=""){
                this.todoList[index].content=this.textTobeModified;
            }
            this.textTobeModified="";
            this.todoList[index].onModify=false;
            this.flagModify= false;
        },
        toggleOnmodify(index){
            if(this.flagModify!=true){
                this.todoList[index].onModify=true;
                this.flagModify=true;
            }
        },
        clearList(){
            this.todoList=this.todoList.filter((element) => element.completed==false);
            this.filteredTodoList=[...this.todoList];
        },
        filterArray(filter){
            if(filter==0){
                this.filteredTodoList=this.todoList.filter((element) => element.completed==false);
            }else if(filter==1){
                this.filteredTodoList=this.todoList.filter((element) => element.completed==true);
            }else{
                this.filteredTodoList=[...this.todoList];
            }
        }
    },
    mounted(){
        this.filteredTodoList=[...this.todoList];
    }
});