//Applying LinkedList as data structure in this exercise Todo List:
class Node{
    constructor(task){
        this.task = task;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(task){
        const newNode = new Node(task);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    remove(task) {
        if(!this.head) {
            return; 
        }

        if(this.head.task === task){
            this.head = this.head.next;
            if(!this.head) {
                this.tail = null;
            }
            
            return ;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next.task === task) {
                currentNode.net = currentNode.next.next;
                if (!currentNode.next) {
                    this.tail = currentNode;
                }
                
                return;
            }

            currentNode = currentNode.next;
        }
    }

    print() {
        const tasks = [];
        let currentNode = this.head;
        while (currentNode) {
            tasks.push(currentNode.task);
            currentNode = currentNode.next;
        }
        console.log(tasks.join('\n'));
    }
}

//Usage

// const todoList = new LinkedList();

// todoList.append('Buy groceries');
// todoList.append('Finish homework');
// todoList.append('Go for a run');

// console.log('Initial Todo List:');
// todoList.print();

// todoList.remove('Finish homework');

// console.log('\nUpdated Todo List:');
// todoList.print();

//select the input field and the Add Task button

const taskInput =  document.getElementById('taskInput');
const addButton  = document.getElementById('addButton');

// select the task list where tasks will be displayed

const taskList = document.getElementById('taskList');

//Add an event listener to the 'Add Task' button

addButton.addEventListener('click', ()=>{
 
    //Get the input value entered by the user

    const newTask = taskInput.value.trim(); //Remove leading and trailing spaces
    
    // Check if the input value is not empty

    if(newTask !== '') {

        //Create a new list item (task) and add the input value as its text content

        const listItem = document.createElement('li');

        //Create a checkbox

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        listItem.appendChild(checkbox);

        // Add the input value as task text

        listItem.appendChild(document.createTextNode(newTask));

        // Create a Remove Button

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-button';

        //Add event listener to remove the task when the 'Remove' button is clicked

        removeButton.addEventListener('click', () => {
            listItem.remove();
        })

        // Add the Remove button to the task:

        listItem.appendChild(removeButton);

        // Append the new list item to the task list

        taskList.appendChild(listItem);

        //Clear the input field

        taskInput.value = '';
    }
});