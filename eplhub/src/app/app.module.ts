import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { PagecontrollerComponent } from './pagecontroller/pagecontroller.component';
import { NavComponent } from './nav/nav.component';
import { TabsComponent } from './tabs/tabs.component';
import { NewsComponent } from './news/news.component';
import { LatestnewsComponent } from './latestnews/latestnews.component';
import { MatchesComponent } from './matches/matches.component';

const routes: Routes = [];
@NgModule({
  declarations: [
    AppComponent,
    PagecontrollerComponent,
    NavComponent,
    TabsComponent,
    NewsComponent,
    LatestnewsComponent,
    MatchesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes,
    ),
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
