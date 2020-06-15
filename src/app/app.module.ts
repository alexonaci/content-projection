import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BallComponent } from './target-shooting/ball/ball.component';
import { BullsEyeComponent } from './target-shooting/bulls-eye/bulls-eye.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WallComponent } from './target-shooting/wall/wall.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BallComponent,
    BullsEyeComponent,
    WallComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
      { path: 'target', component: WallComponent },
    ])
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
