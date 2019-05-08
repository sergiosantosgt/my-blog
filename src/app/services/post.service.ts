import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from '../model/post';
import { environment } from '../../environments/environment';
import { GeneralDataService } from './general.service';

@Injectable({ providedIn: 'root' })
export class PostService {

  private readonly apiUrl = environment.apiUrl;
  private readonly baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private generalDataService: GeneralDataService,
    ) { }
  
  getArticles(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl+'/posts', { headers: this.generalDataService.getHeaders() });
  } 

  getArticle(id): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl+'/posts/' + id, { headers: this.generalDataService.getHeaders() });
  }

  newPost(data): Observable<Post[]> {
    console.log(data);
    return this.http.post<Post[]>(
      this.apiUrl+'/posts',
      {
        // title: data.title,
        // subtitle: data.subtitle,
        // content: data.content
      },
      { headers: this.generalDataService.getHeaders() }
    );
  } 

  // search(term: string): Observable<Post[]> {
  //   // let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
  //   return this.http.get(this.apiUrl+'/posts').pipe(
  //     map(res => {
  //       return res.results.map(item => {
  //         return new Post(
  //         );
  //       });
  //     })
  //   );
  // }
}
