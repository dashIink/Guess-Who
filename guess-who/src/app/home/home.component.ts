import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public numImages: number = 1;


  constructor() { }

  increaseNum() {
    if(this.numImages === 20) return;
    this.numImages++;
    console.log(this.numImages);
  }

  decreaseNum() {
    if(this.numImages === 1) return;
    this.numImages--;
  }

}
