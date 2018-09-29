import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  // 자식이 부모로 부터 데이를 받는 방법(proprty binding)
  @Input()
  selectedHero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
