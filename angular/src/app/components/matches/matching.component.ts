import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.scss']
})
export class MatchingComponent implements OnInit {
  // You can add logic and data here
  liked = [false, false, false, false, false, false];
  disliked = [false, false, false, false, false, false];

  ngOnInit() {
    console.log('MatchingComponent initialized:');
  }

  public like(event: any, item: any) {
    if (this.liked[item] == true) {
      this.liked[item] = false;
      this.disliked[item] = false;
    } else {
      this.liked[item] = true;
      this.disliked[item] = false;
    }
  }
  public dislike(event: any, item: any) {
    if (this.disliked[item] == true) {
      this.liked[item] = false;
      this.disliked[item] = false;
    } else {
      this.disliked[item] = true;
      this.liked[item] = false;
    }
  }

  
}
