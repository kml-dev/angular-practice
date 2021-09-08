import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { BoardContent } from './board-content';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  
  createDb() {
    const contents: BoardContent[] = [
      { no: 1, title: '1번째 글', writer: '이경민1', registDate: new Date('2021-09-01'), content: '첫 번째 글입니다.'},
      { no: 2, title: '2번째 글', writer: '이경민2', registDate: new Date('2021-09-02'), content: '두 번째 글입니다.'},
      { no: 3, title: '3번째 글', writer: '이경민3', registDate: new Date('2021-09-03'), content: '세 번째 글입니다.'},
      { no: 4, title: '4번째 글', writer: '이경민4', registDate: new Date('2021-09-04'), content: '네 번째 글입니다.'},
      { no: 5, title: '5번째 글', writer: '이경민5', registDate: new Date('2021-09-05'), content: '다섯 번째 글입니다.'},
      { no: 6, title: '6번째 글', writer: '이경민6', registDate: new Date('2021-09-06'), content: '여섯 번째 글입니다.'},
      { no: 7, title: '7번째 글', writer: '이경민7', registDate: new Date('2021-09-07'), content: '일곱 번째 글입니다.'},
      { no: 8, title: '8번째 글', writer: '이경민8', registDate: new Date('2021-09-08'), content: '여덟 번째 글입니다.'},
      { no: 9, title: '9번째 글', writer: '이경민9', registDate: new Date('2021-09-09'), content: '아홉 번째 글입니다.'},
      { no: 10, title: '10번째 글', writer: '이경민10', registDate: new Date('2021-09-10'), content: '열 번째 글입니다.'},
    ]
    return {contents}
  }
  
  genNo(contents: BoardContent[]): number {
    return contents.length > 0 ? Math.max(...contents.map(content => content.no)) + 1 : 1;
  }
}
