import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent implements OnInit {
  // 부모에서 자식으로
  @Input()
  name: string;

  // 자식이 부모로부터 알려주는것(나 변경됬다)
  @Output()
  voted = new EventEmitter<boolean>();

  didVote = false;

  vote(agree: boolean) {
    this.didVote = true;
    // 자식 => 부모에게 이벤트를 발생
    this.voted.emit(agree);
  }
  ngOnInit(): void {
  }
}
