import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { ShrinkHeaderComponent } from './shrink-header/shrink-header.component';



@NgModule({
  declarations: [SlidesComponent, StartComponent, LogoComponent, ShrinkHeaderComponent],
  exports: [SlidesComponent, StartComponent, LogoComponent, ShrinkHeaderComponent],
  imports: [CommonModule, IonicModule]
})
export class ComponentsModule { }
