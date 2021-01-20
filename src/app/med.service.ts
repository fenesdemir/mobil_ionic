import { Injectable } from '@angular/core';
import { Med } from "./med";
import { MEDS } from "./mock-meds";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MedService {

  constructor() { }

  getMeds(): Observable <Med[]> {
    return of(MEDS);
  }
}
