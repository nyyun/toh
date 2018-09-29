import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import {Observable, of, Subject} from 'rxjs';
import {delay} from 'rxjs/operators';

// 1. (root 컨포넌트가 만들어질때) 해당 서비스를 컨테이너에 등록
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  refresh = new Subject<number>(); // publisher: next() 함수로 데이터 발생자
  refresh$ = this.refresh.asObservable(); // subscriber: subscribe()로 데이터 수신자

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    // 네트워크를 통해서 모델 정보를 획득
    return of(HEROES).pipe(delay(3000));
  }

  getHero(hero_id: number): Observable<Hero> {
    // 네트워크를 통해서 모델 정보를 획득
    /*
    HEROES.find(function(hero) {
      if (hero.id === hero_id) {
        return true;
      } else {
        return false;
      }
    });
    */
    const h =  HEROES.find(hero => hero.id === hero_id ? true : false);
    return of(h);

  }
}
