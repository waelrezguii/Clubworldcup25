import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teams } from './models/team.model';


@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private baseUrl = 'https://api.render.com/deploy/srv-crd40f3tq21c73ct2v7g?key=nL6x1d7p1ac/api/v1/teams';

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Teams[]> {
    return this.http.get<Teams[]>(this.baseUrl);
  }
}
