import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { FetchDataService } from './fetch-data.service';
import { UserComponent } from './user/user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RepositorySearchComponent } from './repository-search/repository-search.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavBarComponent,
    RepositorySearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
