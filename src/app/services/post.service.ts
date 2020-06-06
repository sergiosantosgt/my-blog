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
    private generalService: GeneralDataService,
    ) { }
  
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(
      this.apiUrl+'/posts?_sort=id&_order=desc', 
      { headers: this.generalService.getHeaders() }
    );
  }

  filterPosts(page, limit, search): Observable<Post[]> {
    search = (search && typeof search != "undefined") ? '&q=' + search : '';
    return this.http.get<Post[]>(
      this.apiUrl+'/posts?_sort=id&_order=desc&_page=' + page + '&_limit=' + limit + search, 
      { headers: this.generalService.getHeaders() }
    );
  } 

  getPost(id): Observable<Post[]> {
    return this.http.get<Post[]>(
      this.apiUrl+'/posts/' + id, 
      { headers: this.generalService.getHeaders() }
    );
  }

  getTotalPosts(): Observable<any> {
    return this.http.get(
      this.apiUrl+'/posts', 
      { headers: this.generalService.getHeaders() }
    );
  }

  newPost(data): Observable<Post[]> {
    return this.http.post<Post[]>(
      this.apiUrl+'/posts',
      {
        publication_date: this.generalService.yyyymmdd(),
        title: data.title.toUpperCase(),
        subtitle: data.subtitle,
        content: this.generalService.formatTextArea(data.content),
        postCategorias: data.postCategorias
      },
      { headers: this.generalService.getHeaders() }
    );
  }

  editPost(id, data): Observable<Post[]> {
    return this.http.put<Post[]>(
      this.apiUrl+'/posts/' + id,
      {
        publication_date: data.publication_date,
        title: data.title.toUpperCase(),
        subtitle: data.subtitle,
        content: this.generalService.formatTextArea(data.content),
        postCategorias: data.postCategorias
      },
      { headers: this.generalService.getHeaders() }
    );
  }

  deletePost(id): Observable<Post[]> {
    return this.http.delete<Post[]>(
      this.apiUrl+'/posts/' + id,
      { headers: this.generalService.getHeaders() }
    );
  }
}
