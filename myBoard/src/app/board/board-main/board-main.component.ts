import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-main',
  templateUrl: './board-main.component.html',
  styleUrls: ['./board-main.component.css']
})
export class BoardMainComponent implements OnInit {
  getKeyword?: string;
  getCategory?: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sendKeyword(value: string): void {
    let arr: string[] = value.split('.');
    this.getCategory = arr[0];
    this.getKeyword = arr[1];
    this.router.navigate(['/board', this.getKeyword]);
  }
}
