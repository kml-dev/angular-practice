import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardMainComponent } from './board/board-main/board-main.component';
import { DetailBoxComponent } from './board/detail-box/detail-box.component';
import { InsertBoxComponent } from './board/insert-box/insert-box.component';
import { ListBoxComponent } from './board/list-box/list-box.component';
import { UpdateBoxComponent } from './board/update-box/update-box.component';
import { HomeMainComponent } from './home/home-main/home-main.component';

const routes: Routes = [
  { path: '', component: HomeMainComponent },
  {
    path: 'board',
    component: BoardMainComponent,
    children: [
      { path: '', redirectTo: '/board/', pathMatch: 'full'},
      { path: ':keyword', component: ListBoxComponent },
      { path: 'insert/', component: InsertBoxComponent },
      { path: 'detail/:no', component: DetailBoxComponent },
      { path: 'update/:no', component: UpdateBoxComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
