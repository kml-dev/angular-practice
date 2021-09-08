import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-insert-box',
  templateUrl: './insert-box.component.html',
  styleUrls: ['./insert-box.component.css']
})
export class InsertBoxComponent implements OnInit {
  today: Date = new Date();

  form = this.fb.group({
    title: ['', Validators.required],
    writer: ['', Validators.required],
    registDate: ['', Validators.required],
    content: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private bs: BoardService
  ) { }

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    this.trimForm(this.form);
    this.bs.addContents(this.form.value);
    alert("정상적으로 등록되었습니다.");
    location.href="/board"
  }

  trimForm(form: any): void {
    Object.keys(form.controls).forEach(
      (key) => form.get(key).setValue(form.get(key).value.trim())
    );
  } 
}
