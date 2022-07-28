import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{

  // para emitir el termino usamos el output() con el eventemiter
  //el onEnter es el evento que voy a crear para despues emitirlo
  // usuamente usamos en on antes para definir y saber que es un evento y asi saber que vamos a emitir ese evento
  @Output() onEnter : EventEmitter<string> = new EventEmitter()
  // vamos a craar otro evento para hacer un debauncetime
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();

  @Input() placeholder : string = '';

  debouncer : Subject<string> = new Subject();

  termino:string = '';

  // el ngoninit se dispara una unica vez cuando el componante es creado
  ngOnInit(){
    this.debouncer
    .pipe(
      debounceTime(300))
    .subscribe(valor=> {
    this.onDebounce.emit(valor)
    })
  }
  //  vanos a emitir el termino esto lo hacemos 
  buscar(){
    this.onEnter.emit(this.termino)
  }

  teclaPresionada(){
 
    this.debouncer.next(this.termino)
  }
}
