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

//* Dummy data Array created for display
let array = [new Todo("Wake Up","You have to wake up early in morning", temp, false),
            new Todo("Wash your face","You have to wake up early in morning", temp, false),
            new Todo("Change Clothes","You have to wake up early in morning", temp, false)];

console.log(array);