import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap} from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

pais!: Country 

  constructor(
    private activateRoute: ActivatedRoute,
    private paisService : PaisService
     ) { }

  ngOnInit():void {
// el activateRoute viene con todo lo necesario para poder suscribirme a los cambios de la Url
    this.activateRoute.params
        .pipe(
          switchMap(({id}) => this.paisService.buscarCodigopais(id) ),
          tap(console.log)

        )
        .subscribe(pais =>{
          console.log(pais);
          
          this.pais = pais[0]})

    // this.activateRoute.params
    //   .subscribe(({id}) =>{
    //   console.log(id);

    // this.paisService.buscarCodigopais(id)
    //   .subscribe(pais =>{
    //     console.log(pais);
        
    //     this.pais = pais})
  
    // })
  }


}
