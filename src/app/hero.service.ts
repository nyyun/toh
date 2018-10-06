import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import {Observable, of, Subject} from 'rxjs';
import {delay} from 'rxjs/operators';
import {HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {TodoVo} from './domain/todo.vo';

// 1. (root 컴포넌트가 만들어질때) 해당 서비스를 컨테이너에 등록
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  refresh = new Subject<number>(); // publisher: next() 함수로 데이터 발생
  refresh$ = this.refresh.asObservable(); // subscriber: subscribe()로 데이터 수신

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    // /api/heroes 통해서 모델 정보 획득
    return this.http.get<Hero[]>(environment.HOST + '/api/heroes');
    // return of(HEROES);
  }

  getHero(hero_id: number): Observable<Hero> {
    // /api/hero/:hero_id 통해서 모델 정보 획득
    // const h = HEROES.find(hero => hero.hero_id === hero_id ? true : false);
    // return of(h);
    // template string 문법 : `${변수}`
    return this.http.get<Hero>(`${environment.HOST}/api/hero/${hero_id}`);
  }

  getTodoList(): Observable<TodoVo[]> {
    return this.http.get<TodoVo[]>(`${environment.HOST}/api/todo`);
  }

  addTodo(todo: TodoVo): Observable<TodoVo> {
    const headers = new HttpHeaders(); // headers 부분은 415 에러가 나기 때문에 반드시!! 넣어주어야 합니다.
    headers.append('Content-Type', 'application/json');

    const tempTodo = {...todo};
    delete  tempTodo.isFinished; // boolean은 기본값으로 false로 가기 때문에 이 값을 빼줌

   return this.http.post<TodoVo>(`${environment.HOST}/api/todo`, todo, {headers: headers });
  }
}
