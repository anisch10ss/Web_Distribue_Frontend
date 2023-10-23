import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Sort } from '@angular/material/sort';
import { ApiService } from 'src/app/shared/service/api/api.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss'],
})
export class MeetingsComponent implements OnInit {
  public meetings: any = [];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['location', 'agenda', 'dateReunion', "actions"];
  searchDataValue = '';

  showAddForm: boolean = false;
  addFormDate: Date = new Date();
  addFormLocation: string = "";
  addFormAgenda: string = "";
  mode: string = "Add";
  editIndex = 0;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // Initialize static meetings
    this.api.getMeetings().subscribe((res: any) => {
      this.meetings = res;
      this.dataSource = new MatTableDataSource<any>(this.meetings);
    })
    // this.meetings = [
    //   {
    //     name: 'Service 1',
    //     enterprise_name: 'Enterprise A',
    //     service_type: 'Type A',
    //     price: 50
    //   },
    //   {
    //     name: 'Service 2',
    //     enterprise_name: 'Enterprise B',
    //     service_type: 'Type B',
    //     price: 60
    //   },
    //   {
    //     name: 'Service 3',
    //     enterprise_name: 'Enterprise C',
    //     service_type: 'Type A',
    //     price: 70
    //   },
    //   // Add more static meetings here
    // ];

    // // Initialize data source
    // this.dataSource = new MatTableDataSource<any>(this.meetings);
  }

  public sortData(sort: Sort) {
    const data = this.meetings.slice();

    if (!sort.active || sort.direction === '') {
      this.meetings = data;
    } else {
      this.meetings = data.sort((a: any, b: any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.meetings = this.dataSource.filteredData;
  }

  onAddMeeting(event:any) {
    this.showAddForm = false;
    let meet = {
      location: this.addFormLocation,
      agenda: this.addFormAgenda,
      dateReunion: this.addFormDate
    };
    if (this.mode === 'Add') {
      this.meetings.push(meet);
      this.api.postMeeting(meet).subscribe((res: any) => {
        console.log(res);
      }
      )
    } else if (this.mode === 'Edit') {
      this.api.putMeeting(this.meetings[this.editIndex].reunionId, meet).subscribe((res: any) => {
        console.log(res);
      }
      );
      this.meetings[this.editIndex] = meet
    }
    this.dataSource = new MatTableDataSource<any>(this.meetings);
  }

  cancelAdd() {
    this.showAddForm = false;
  }

  updateMeeting(index: number) {
    this.mode = "Edit";
    this.showAddForm = true;
    this.editIndex = index;
  }

  deleteMeeting(index: number) {
    this.api.deleteMeeting(this.meetings[index].reunionId).subscribe((res: any) => {
      console.log(res);
      this.meetings.splice(index, 1);
      this.dataSource = new MatTableDataSource<any>(this.meetings);
    }
    );
  }
}
