import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BallComponent } from './target-shooting/ball/ball.component';
import { BullsEyeComponent } from './target-shooting/bulls-eye/bulls-eye.component';
import { WallComponent } from './target-shooting/wall/wall.component';
import { ShootingRoomComponent } from './target-shooting/shooting-room/shooting-room.component';
import { CardComponent } from './dashboard/components/card/card.component';
import { DashboardComponent } from './dashboard/pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BallComponent,
    BullsEyeComponent,
    WallComponent,
    ShootingRoomComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
      { path: 'target', component: ShootingRoomComponent },
    ])
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
