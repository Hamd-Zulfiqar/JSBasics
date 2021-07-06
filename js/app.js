//* Todo Model Class
class Todo {
    constructor(title, description, date, status){
        this.title = title;
        this.description = description;
        this.date = date;
        this.status = status;
    }
}

let temp = new Date();
temp = temp.getDay() + "-" + temp.getMonth() + "-" + temp.getFullYear();

//* Dummy data Array created for display
let array = [new Todo("Wake Up","You have to wake up early in morning", temp, false),
            new Todo("Wash your face","You have to wake up early in morning", temp, false),
            new Todo("Change Clothes","You have to wake up early in morning", temp, false)];

console.log(array);

//* Todo onclick handler
function taskCompleted(index){
    $("#" + index).addClass("list-group-item-success");
}

//* Appending the Dummy data to Unordered List with id "list"
array.map((todo,index) => {
    if(todo.status) {
        $("#list").append
            (`<li class="list-group-item list-group-item-success" id="${index}">
                <div class="row">
                    <div class="col-sm-9"><h2>${todo.title}</h2></div>
                    <div class="col-sm-3 text-center">${todo.date}</div>
                </div>
                <div class="row">
                    <div class="col-sm-9">${todo.description}</div>
                    <div class="col-sm-3 text-center">
                        <input id="click" class="btn" type="button" onclick="taskCompleted(${index})" value="Completed">
                    </div>
                </div>
            </li>`)
        }
    else{
        $("#list").append
            (`<li class="list-group-item " id="${index}">
                <div class="row">
                    <div class="col-sm-9"><h2>${todo.title}</h2></div>
                    <div class="col-sm-3 text-center">${todo.date}</div>
                </div>
                <div class="row">
                    <div class="col-sm-9">${todo.description}</div>
                    <div class="col-sm-3 text-center">
                        <input id="click" class="btn" type="button" onclick="taskCompleted(${index})" value="Completed">
                    </div>
                </div>
            </li>`)
    }});
