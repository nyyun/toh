import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { VotetakerComponent } from './votetaker/votetaker.component';
import { VoterComponent } from './voter/voter.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { JqueryComponent } from './jquery/jquery.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [ // 루트를 정해준다.
  {path: '', component: HomeComponent}, // root url 이면
  {path: 'heroes', component: HeroesComponent, children: [
      {path: ':hero_id' , component: HeroDetailComponent}
    ]},
  {path: 'todo', component: TodoComponent},
  {path: 'jquery', component: JqueryComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    VotetakerComponent,
    VoterComponent,
    HomeComponent,
    TodoComponent,
    JqueryComponent
  ],
  imports: [ // angular 모듈
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
