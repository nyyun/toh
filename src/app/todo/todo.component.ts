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
   newTodo = new TodoVo();
   // 수정버튼 클릭시 현재 값을 TodoVO 객체를 todo_id 키 값에 저장
   tempMap = new Map<number, TodoVo>();

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

  addTodo() {
    this.heroService.addTodo(this.newTodo).subscribe(body => {
      console.log(body);
      // 데이터를 todoList에 추가하고 렌더링
      this.todoList.unshift(body);
      // inputbox 초기화
      this.newTodo.todo = null;
    });
  }
  // 수정 템플릿으로 변경
  save(todo: TodoVo) {
    todo.isEdited = true;
    // 현재 값을 저장(이렇게 하면 안됩니다! 왜냐면 얇은 복사 이기 때문에 메모리 주소를 참조 하는 구조이므로 , 전부 다 변경이 됩니다.)
    // this.tempMap.set(todo.todo_id, todo);
    // 값을 복사하는 방법을 사용 :deep Copy

    const tempTodo = {...todo}; // ES6 : Spread 연산자 이용
    console.log(tempTodo === todo);
    this.tempMap.set(todo.todo_id, tempTodo);
  }

  restore(todo: TodoVo) {
    // 기존값 복원
    const tempTodo = this.tempMap.get(todo.todo_id);
    // todo 객체에 tempTodo 객체 속성을 overwrite
    // Object.assign(src, ...target);
    Object.assign(todo, tempTodo);
    todo.isEdited = false;
  }

  modify(todo: TodoVo) {
    this.heroService.modifyTodo(todo).subscribe(body => {
      // 기존 데이터에 서버에서 넘어온 객체를 복사
      Object.assign(todo, body);

      // 원복
      todo.isEdited = false;
    });
  }
  delete(todo: TodoVo, index: number) {
    if (confirm('삭제하시겠습니까?')) {
      this.heroService.deleteTodo(todo.todo_id).subscribe(body => {
        // 원복
        // body.result 가 0이면 todoList 에서 해당 todo_id 삭제
        // todo_id 의 인덱스를 찾은 후 splice 를 이용해서 삭제한다.
        // const index = this.todoList.findIndex(item => item.todo_id === todo.todo_id ? true : false);
        this.todoList.splice(index, 1);
        todo.isEdited = false;
    });
    }
  }
}
