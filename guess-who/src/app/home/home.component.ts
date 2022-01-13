import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public numImages: number = 1;


  constructor() { }

  ngOnInit(): void {

  }

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
