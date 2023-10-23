import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddFeedbackRoutingModule } from './add-feedback-routing.module';
import { AddFeedbackComponent } from './add-feedback.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/shared/module/shared.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
// import { NgxFileDragDropModule } from 'ngx-file-drag-drop';

@NgModule({
  declarations: [
    AddFeedbackComponent
  ],
  imports: [
    CommonModule,
    AddFeedbackRoutingModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxDropzoneModule

  ]
})
export class AddFeedbackModule { }
