import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  id:number = Math.floor((Math.random() * 100) + 1);
  title: string = "";
  date: string = "";
  hour: string = "";
  reminder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.title.length===0) {
      alert("Please add a task!");
      return;
    }
    const {id, title, date, hour, reminder } = this
    const newTask = {id, title, date, hour, reminder }
    this.onAddTask.emit(newTask);
  }
  
}


