import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleListComponent }  from './article-list/article-list.component';
import { ArticleDetailComponent }  from './article-detail/article-detail.component';
import { AdminListComponent }  from './admin/admin-list/admin-list.component';
import { AdminPostNewComponent }  from './admin/admin-post-new/admin-post-new.component';

const routes: Routes = [
  { path: '', redirectTo: '/article-list', pathMatch: 'full' },
  { path: 'article-list', component: ArticleListComponent },
  { path: 'article-detail/:article_id', component: ArticleDetailComponent },
  { path: 'admin-list', component: AdminListComponent },
  { path: 'admin-post-new', component: AdminPostNewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
