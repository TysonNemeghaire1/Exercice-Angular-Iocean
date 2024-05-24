import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Title} from '../../interfaces/title';

@Injectable({
  providedIn: 'root'
})
export class TitleServiceApiService {

  constructor(private httpService: HttpClient) { }

  getTitles(): Observable<Title[]> {
    return this.httpService.get<Title[]>('https://reseau-mirabel.info/api/titres');
  }
}
