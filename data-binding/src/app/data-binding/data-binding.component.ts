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

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  getvalor(){
    return 1;
  }
  botaoClicado(){
    alert('Botão clicado');
  }


  onKeyUp(evento:KeyboardEvent){
    this.valorAtual=((<HTMLInputElement>evento.target).value);
  }

  salvarValor(valor:any){
    this.valorSalvo = valor;
  }
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  getCurtiCurso(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
