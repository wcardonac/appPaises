import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  // https://restcountries.com/v3.1/name/unite
  private apiUrl:string = 'https://restcountries.com/v3.1'
  //inyectamos el httpclient
  constructor(private http: HttpClient) { }
  
  buscarPais(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url); 
  }


  buscarCapital(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url); 
  }

  buscarCodigopais(id:string):Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country[]>(url); 
  }

  buscarporRegion(region:string):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`
    return this.http.get<Country[]>(url); 
  }




}
