import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardContent } from '../board-content';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-detail-box',
  templateUrl: './detail-box.component.html',
  styleUrls: ['./detail-box.component.css']
})
export class DetailBoxComponent implements OnInit {
  content!: BoardContent;

  constructor(
    private bs: BoardService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const noFromRoute = Number(routeParams.get('no'));
    this.getContent(noFromRoute);
  }

  getContent(noFromRoute: number): void {
    this.bs.getContent(noFromRoute).subscribe(
      content => this.content = content
    );
  }

  toUpdatePage(): void {
    this.router.navigate([`board/update/${this.content.no}`])
  }

  deleteContent(): void {
    let deleteConfirm = confirm("정말 삭제하시겠습니까?");
    if(!deleteConfirm){
      return;
    }
    this.bs.deleteContent(this.content.no);
    alert("삭제되었습니다.");
    this.router.navigate(['../board']);
  }
}
