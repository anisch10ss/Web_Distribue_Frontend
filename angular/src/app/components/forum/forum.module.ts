import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumsComponent } from './forum.component';
import { ForumsRoutingModule } from './forum-routing.module';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { MatTableModule } from '@angular/material/table'; // Import MatTableModule

@NgModule({
  declarations: [ForumsComponent],
  imports: [
    CommonModule,
    ForumsRoutingModule,
    FeatherIconModule,
    SharedModule,
    MatInputModule, // Include MatInputModule
    MatFormFieldModule, // Include MatFormFieldModule
    FormsModule, // Include FormsModule
    MatTableModule, // Include MatTableModule
  ],
})
export class ForumsModule {}
