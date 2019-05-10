import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GeneralDataService } from './services/general.service';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AdminPostNewComponent } from './admin/admin-post-new/admin-post-new.component';
import { AdminPostEditComponent } from './admin/admin-post-edit/admin-post-edit.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { AdminPostReadComponent } from './admin/admin-post-read/admin-post-read.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    HeaderComponent,
    FooterComponent,
    ArticleDetailComponent,
    SpinnerComponent,
    AdminListComponent,
    AdminPostNewComponent,
    AdminPostEditComponent,
    PaginationComponent,
    AdminPostReadComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [GeneralDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
