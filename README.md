
Used technologies - Node js, mongoDb, Express Js, dotenv (used for security purpose.the ousiders cannot access the dotenv file)

application name - todo-tasks

# starting of project

clone this repository to local and type "npm install" to install packeges that i have used.Run "npm start" automatically the application will start running in the specified port number

# CRUD operations routes names

1.to create new task use below route with below payload 
 payload =  {title"user data",description:"user data"}
# POST method - http://localhost:8080/taskapp/createtask



2.to update task use below route with payload 
 payload {id:"task object id",title"user data",description:"user data"} or {id:"task object id",title"user data"} 
 or {id:"task object id"description:"user data"}
# PUT method - http://localhost:8080/taskapp/updatetask



3.to get task from the database use below route
# GET method - http://localhost:8080/taskapp/gettask/:id
the id param is should be object id



4.to get all tasks from the database use below route
# GET method - http://localhost:8080/taskapp/getalltask



5.to delete specific task use below route 
# DELETE method http://localhost:8080/taskapp/deletetask/:id
the id param is should be object id

6.to delete all tasks use below route
# DELETE method - http://localhost:8080/taskapp/deletealltask


7.to mark any task as completed use below route

# PUT method - http://localhost:8080/taskapp/updatetaskcompletion

8.to get only completed tasks use below route
# GET - http://localhost:8080/taskapp/completed/:val
where the "val" param is of type 'boolean'

I used the standard way of code structure as it follows "MVC" structure which refers to model,view,controller

# Approach

initailly we need to save our data in the database.so i connected this sever to my mongodb(I did bot used cloud database here).

1.first we need to define schema for our data so that only spacified fields will be updated otherwise the db is not gonna updated.
#schema is 

 <!-- const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
}) -->

2.the spacified fields are "title" and "description"  and "isCompleted".

3.we can get specified task using object id(mongodb creates a unique id for every document in the database).

4.object id is unique for every document.

5.to update the task i sent title,id and description to the backend but titile and one of the fiels are mandatory to update the document.

6.using object id we can specific task by passing object id as param in the url.

7.making the task status is done by passing object id as a param to the backend