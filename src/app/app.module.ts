import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { SearchRepoComponent } from './search-repo/search-repo.component';
import { DisplayResultsComponent } from './display-results/display-results.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SearchUserComponent,
    SearchRepoComponent,
    DisplayResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
