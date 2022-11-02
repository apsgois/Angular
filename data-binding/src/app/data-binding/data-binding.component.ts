import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url:string = 'http://loiane.training';
  cursoAngular: boolean = true ;
  urlImage  = 'http://lorempixel.com.br/500/400/?1'

  getvalor(){
    return 1;
  }

  getCurtiCurso(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
