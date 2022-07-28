import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    
    `
      button{
        margin-rigth: 5px;
      }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  regionActiva:string = '';

  paises : Country[] = [];


  constructor(private paisService: PaisService) { }

  activarRegion(region:string){
    if (region === this.regionActiva) { return}
    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarporRegion(region)
      .subscribe( paises => {
        console.log(paises);
        
        this.paises = paises})
      
      
    //todo: hacer el servicio para el llamado

  }

  clasecss(region:string):string{
    return (region === this.regionActiva)? 'btn btn-primary': 'btn btn-outline-primary'

  }

}
