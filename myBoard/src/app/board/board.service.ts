import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BoardContent } from './board-content';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  
  private boardContentsUrl = 'api/contents'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getContents(): Observable<BoardContent[]> {
    return this.http.get<BoardContent[]>(this.boardContentsUrl);
  }

  getContent(no: number): Observable<BoardContent> {
    const url = `${this.boardContentsUrl}/?no=${no}`;
    return this.http.get<BoardContent[]>(url).pipe(
      map(contents => contents[0])
    );
  }

  addContents(param: BoardContent): void {
    param.registDate = new Date();
    this.http.post<BoardContent>(this.boardContentsUrl, param, this.httpOptions);
  }

  updateContent(no:number, param: BoardContent): void {
    const url = `${this.boardContentsUrl}/?no=${no}`;
    param.no = no;
    this.http.put(url, param, this.httpOptions);
  }
  
  deleteContent(no: number): void {
    const url = `${this.boardContentsUrl}/?no=${no}`;
    this.http.delete(url, this.httpOptions);
  }

}
