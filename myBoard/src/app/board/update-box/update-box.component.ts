import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-update-box',
  templateUrl: './update-box.component.html',
  styleUrls: ['./update-box.component.css']
})
export class UpdateBoxComponent implements OnInit {
  noFromRoute!: number;

  form = this.fb.group({
    title: [ '', Validators.required],
    writer: ['', Validators.required],
    registDate: ['', Validators.required],
    content: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private bs: BoardService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.noFromRoute = Number(routeParams.get('no'));
    this.getContent(this.noFromRoute);
  }

  getContent(noFromRoute: number): void {
    this.bs.getContent(noFromRoute).subscribe(
      content => {
        this.form.patchValue({
          title: content.title,
          writer: content.writer,
          registDate: formatDate(content.registDate, 'yyyy-MM-dd','en'),
          content: content.content,
        });
      }
    );
  }

  onSubmit(): void {
    this.bs.updateContent(this.noFromRoute ,this.form.value);
    alert('수정 되었습니다.');
    this.router.navigate([`/board/detail/${this.noFromRoute}`]);
  }

}
