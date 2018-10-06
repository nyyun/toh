import { Component, OnInit } from '@angular/core';
import {TodoVo} from '../domain/todo.vo';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
   todoList: TodoVo[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
     this.heroService.getTodoList().subscribe(body => {
       // console.log((body);
       this.todoList = body;
     });
  }
}
