import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  // 자식이 부모로 부터 데이를 받는 방법(proprty binding)
  @Input()
  selectedHero: Hero;
  constructor(private route: ActivatedRoute, private heroService: HeroService) {
    console.log('hero detail(created)');
    // heroes/:hero_id 의 hero_id가 바뀔때마다 생성자는 한번만 호출 되며
    // subscribe 콜백은 데이터가 들어올때마다 호출
    this.route.params.subscribe(param => {
        console.log(param);
        this.getHero(+param.hero_id); // + 는 스트링을 숫자로 변환

        this.heroService.refresh.next(+param.hero_id); // Observable 데이터 발생;

      }
    );
    // hero_id를 획득 후 서비스를 통해서 데이터를 얻는다.
    // selectedHero에 대입


  }

  getHero(hero_id: number) {
    this.heroService.getHero(hero_id)
    .subscribe(data => this.selectedHero = data);
  }

  ngOnInit() {
  }

}
