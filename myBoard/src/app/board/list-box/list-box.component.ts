import { SelectionModel } from '@angular/cdk/collections';
import { AfterContentInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Observer, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { BoardContent } from '../board-content';
import { BoardMainComponent } from '../board-main/board-main.component';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css']
})
export class ListBoxComponent implements OnInit, DoCheck, OnDestroy {
  displayedColumns: string[] = ['No.', '제목', '작성일', '작성자'];
  dataSource!: MatTableDataSource<BoardContent>;
  contents!: BoardContent[];
  
  selection = new SelectionModel<BoardContent>(false, []);
  keyword!: string;
  category!: string | undefined;

  
  @ViewChild('tablePaginator') paginator!: MatPaginator;

  constructor(
    private bs: BoardService,
    private route: ActivatedRoute,
    private router: Router,
    private bm: BoardMainComponent
  ) { }
  
  ngOnInit(): void {
    this.getContents();
  }
  
  ngDoCheck(): void {
    this.category = this.bm.getCategory;
    if(this.keyword === this.route.snapshot.params['keyword']){
      return;
    } else {
      this.keyword = this.route.snapshot.params['keyword'];
      if(this.keyword != ''){
        let tmp = this.keyword;
        switch(this.category) {
          case 'title':
            this.dataSource = new MatTableDataSource<BoardContent>(
              this.contents.filter(function (item, index, arr) {
                return item.title.includes(tmp);
              })
            );
            break;
          case 'writer':
            this.dataSource = new MatTableDataSource<BoardContent>(
              this.contents.filter(function (item, index, arr) {
                return item.writer.includes(tmp);
              })
            );
            break;
          case 'content':
            this.dataSource = new MatTableDataSource<BoardContent>(
              this.contents.filter(function (item, index, arr) {
                return item.content.includes(tmp);
              })
            );
            break;
          default:
            this.dataSource = new MatTableDataSource<BoardContent>(
              this.contents.filter(function (item, index, arr) {
                return item.title.includes(tmp);
              })
            );
        }
        this.dataSource.paginator = this.paginator;
      } else {
        this.dataSource = new MatTableDataSource<BoardContent>(this.contents);
        this.dataSource.paginator = this.paginator;
      }
    }
  }
  
  ngOnDestroy(): void {
    this.bs.getContents().subscribe().unsubscribe();
  }

  getContents(): void {
    this.bs.getContents().subscribe(contents => {
        this.contents = contents;
        this.dataSource = new MatTableDataSource<BoardContent>(contents);
        this.dataSource.paginator = this.paginator;
    });
  }
  
  rowSelect(row: any): void {
    this.selection.select(row);
    this.router.navigate([`../detail/${this.selection.selected[0].no}`], { relativeTo: this.route })
  }

}
