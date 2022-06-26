import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator2',
  templateUrl: './calculator2.component.html',
  styleUrls: ['./calculator2.component.css']
})
export class Calculator2Component implements OnInit {
  
  constructor() { }

  public num1!: number;
  public num2!: number;
  public result!: number;


  add():any{
    this.result = this.num1 + this.num2;
  }
  

  sub(){
    this.result = this.num1 - this.num2;
  }

 mul(){
  this.result = this.num1 * this.num2;
 }

 div(){
  this.result = this.num1 / this.num2
 }

  ngOnInit(): void {

    
  }

}