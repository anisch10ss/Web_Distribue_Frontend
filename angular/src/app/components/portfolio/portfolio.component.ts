import { Component, OnInit, ViewChild } from '@angular/core';
import { toHTML } from 'ngx-editor';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { routes } from 'src/app/shared/service/routes/routes';
import { ApiService } from 'src/app/shared/service/api/api.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  public routes: any = routes;
  public all: any = [];
  public software: any = [];
  public datascience: any = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getPortfolios().subscribe((res: any) => {
      res.forEach((portfolio: any) => {
        portfolio.photo = `https://picsum.photos/307/204`;
        this.all.push(portfolio);
        if (portfolio.category === 'software') {
          this.software.push(portfolio);
        } else if (portfolio.category === 'datascience') {
          this.datascience.push(portfolio);
        }
      });
      console.log(res);
    }
    );

  }

}
