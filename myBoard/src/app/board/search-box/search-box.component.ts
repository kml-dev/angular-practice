import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  keyword!: string;
  selectedVal!: string;
  category = [
    { viewValue: '제목', value: "title"},
    { viewValue: '작성자', value: "writer"},
    { viewValue: '내용', value: "content"},
  ];

  @Output() sendKeyword: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  keywordChange(): void {
    this.sendKeyword.emit(`${this.selectedVal}.${this.keyword}`);
  }
}
