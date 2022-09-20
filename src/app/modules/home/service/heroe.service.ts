import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Heroe } from '../models/heroe';

@Injectable({
  providedIn: 'root',
})
export class HeroeService {

  private readonly API = environment.api;
  constructor(private readonly http: HttpClient) {}

  getAllMarvel(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(this.API + '/superheroes?tipo=heroes-marvel');
  }

  getAllDc(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(this.API + '/superheroes?tipo=heroes-dc');
  }

  detailsHeroe(id: string | null): Observable<Heroe>{
    return this.http.get<Heroe>(this.API+'/superheroes/'+id);
  }

}
