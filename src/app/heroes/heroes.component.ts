import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Winstorm'
  };

  isSpecial = true;

  heroes = HEROES;
  selectedHero: Hero;

  // 생성자로 이미 등록된 hero service 인스턴스를 주입 받는다.
  //  => DI(dependancy Injection)
  constructor(private heroService: HeroService) { // 선언만 하면 주입을 받는다.
    // 의존성 있게 코딩하는 경우 (초보...ㅋㅋ)
    // const heroService = new HeroService();
    // this.heroes = heroService.getHeroes(); // 직접 호출!! 의존성 !!!
   // private을 넣어주면 local 변수로 되기 때문에 this를 붙여줘도 된다.
    // this.heroes = this.heroService.getHeroes();
    // this.heroService.getHeroes().subscribe(data => {this.heroes = data; });

    this.heroService.getHeroes()
      .subscribe(data => {
        this.heroes = data;
      });
  }

  ngOnInit() {
  }

  onSave(e: any) { // onSave:function(e:any){} -- es5
    console.log(e);
    this.isSpecial = !this.isSpecial;
  }

    onSelected(hero: Hero) {
    console.log(hero);
     this.selectedHero = hero;
    }
}
