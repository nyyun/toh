import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterHeroComponent } from './register-hero/register-hero.component';
import { ManageHeroComponent } from './manage-hero/manage-hero.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IndexComponent, DashboardComponent, RegisterHeroComponent, ManageHeroComponent]
})
export class AdminModule { }
