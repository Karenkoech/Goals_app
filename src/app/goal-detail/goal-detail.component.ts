import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-detail',
  template: `
  <h2> Goal list</h2>
  <ul *ngFor="let goal of goals">
    <li>
      {{goal.id}} .  {{goal.name}} - {{goal.description}}
    </li>
  </ul>
  `,
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  goals: Goal[] =[
    new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',),
    new Goal(2, 'Buy Cookies','I have to buy cookies for the parrot',),
    new Goal(3, 'Get new Phone Case','Diana has her birthday coming up soon',),
    new Goal(4, 'Get Dog Food', 'Pupper likes expensive sancks',),
    new Goal(5, 'Solve math homework','Damn Math',),
    new Goal( 6, 'Plot my world domination plan','Cause I am an evil overlord',),
  ];
  @Input()
  goal!: Goal;
  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
