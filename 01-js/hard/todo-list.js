/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.arTodo = [] ;
  }
  add(todo){
    this.arTodo.push(todo) ;
  }
  remove(idx){
    if (idx<0 || idx>=this.arTodo.length){
      return 0;
    }else{
      this.arTodo.splice(idx,1);
    }
  }
  update(idx, updatedTodo){
    if (idx<0 || idx>=this.arTodo.length){
      return 0;
    }else{
      this.arTodo[idx] = updatedTodo ;
    }
  }
  getAll(){
    return this.arTodo ;
  }
  get(idx){
    if (idx<0 || idx>=this.arTodo.length){
      return  null;
    }else{
      return this.arTodo[idx] ;
    }
  }
  clear(){
    this.arTodo.length = [];
  }
}

module.exports = Todo;
