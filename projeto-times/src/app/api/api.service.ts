import { Trophie } from './../models/trophie';
import { Http, Response } from "@angular/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import { Team } from "../models/team";
import { API } from "./api";

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  teams(): Observable<Team[]> {
    return this.http.get(`${API}/teams`).map(response => response.json());
  }

  team(id:number): Observable<Team> {
    return this.http.get(`${API}/teams/${id}?_embed=achievements`).map(response => response.json());
  }

  trophie(id:number): Observable<Trophie> {
    return this.http.get(`${API}/trophies/${id}`).map(response => response.json());
  }

  items(id:number): Observable<any> {
    return this.http.get(`${API}/items?teamId=${id}`).map(response => response.json());
  }
}
