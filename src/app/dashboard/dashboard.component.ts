import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public titulo = 'Dashboard';

  public options: AnimationOptions = {
    path: '../assets/lottie/school-animation.json',
  };

  constructor() { }

  ngOnInit(): void {
  }

  public onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
