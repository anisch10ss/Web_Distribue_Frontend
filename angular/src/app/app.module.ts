import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ServicesComponent } from './components/enterprises/services/services.component'; // Adjust the path as needed

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { MyHammerConfig } from '../hammer.config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/module/shared.module';
import { MeetingsComponent } from './components/enterprises/meetings/meetings.component';
import { ForumsComponent } from './components/forum/forum.component';
import { AddFeedbackComponent } from './components/add-feedback/add-feedback.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent,ServicesComponent,MeetingsComponent,ForumsComponent,AddFeedbackComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,

  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
