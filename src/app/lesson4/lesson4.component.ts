import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson4',
  templateUrl: './lesson4.component.html',
  styleUrls: ['./lesson4.component.css']
})
export class Lesson4Component implements OnInit {

  public userName = 'iVaN iVaNoV';
  public numb = 1199;
  public today = new Date(2021,8,17,20,6,10,0);
  public arrNames = ['Ivan', 'Alina', 'Petro', 'Oksana', 'Iryna'];
  public field = '';

  constructor() { }

  ngOnInit(): void {
  }

}
