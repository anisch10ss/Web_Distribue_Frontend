import { Component, OnInit, ViewChild } from '@angular/core';
import { toHTML } from 'ngx-editor';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { routes } from 'src/app/shared/service/routes/routes';
import { ApiService } from 'src/app/shared/service/api/api.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.scss'],
})
export class AddFeedbackComponent {
  public routes = routes;
  selected = 'feedback';
  title = '';
  description = '';
  submit: boolean = false;
  error: boolean = false;
  showTitle:boolean = true;

  constructor(private api: ApiService) {}

  onClick(event: any) {
    this.submit = false;
    this.error = false;
    if (this.selected === 'feedback') {
      this.api
        .postFeedback({
          subject: this.title,
          description: this.description,
          type: this.selected,
        })
        .subscribe((res: any) => {
          console.log(res);
          this.submit = true;
          this.description = "";
          this.title = "";
          this.selected = "feedback";
        });
    } else {
      this.api.postComplaint({ contenu: this.description }).subscribe((res: any) => {
        console.log(res);
        this.submit = true;
        this.description = "";
        this.title = "";
        this.selected = "feedback";
      });
    }
  }

  onChange(event: any) {
    console.log(this.selected);
    this.submit = false;
    this.error = false;
    if (this.selected === 'feedback') {
      this.showTitle = true;
    } else {
      this.showTitle = false;
    }
  }
}
