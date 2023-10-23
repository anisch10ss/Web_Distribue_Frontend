import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/shared/module/shared.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
// import { NgxFileDragDropModule } from 'ngx-file-drag-drop';

@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule,

  ]
})
export class PortfolioModule { }
