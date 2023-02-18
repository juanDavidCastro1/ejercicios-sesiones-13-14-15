import PRIORITY from "./priority.enum";


export default class classTask{
    name = '';
    description = '';
    priority = PRIORITY.NORMAL;

    constructor (name, description, priority){
        this.name = name;
        this.description = description;
        this.priority = priority;
    }
}