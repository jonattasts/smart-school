import { Student } from './../../models/student';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.css']
})
export class GenericButtonComponent implements OnInit {
  @Input() buttonClass: string;
  @Input() iconClass: string;
  @Input() title: string;
  @Input() showActions = true;
  @Input() handleClick: (student?: Student) => void

  constructor() { }

  ngOnInit(): void {
  }

}
