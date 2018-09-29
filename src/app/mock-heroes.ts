import {Hero} from './hero';

// const 변경 못함, let 은 변경할 수 있음 es6 규칙 var는 사용하지 않습니다.
// es5 의 경우 글로벌 영역을 건드리기 때문에 엉망이 된다. 그렇기 때문에 es6에서는 모듈단위로만 영향을 받기 위해서 , let const 를 사용한다.
export const HEROES: Hero[] = [
  { hero_id: 11, name: 'Mr. Nice' },
  { hero_id: 12, name: 'Narco' },
  { hero_id: 13, name: 'Bombasto' },
  { hero_id: 14, name: 'Celeritas' },
  { hero_id: 15, name: 'Magneta' },
  { hero_id: 16, name: 'RubberMan' },
  { hero_id: 17, name: 'Dynama' },
  { hero_id: 18, name: 'Dr IQ' },
  { hero_id: 19, name: 'Magma' },
  { hero_id: 20, name: 'Tornado' }
];
