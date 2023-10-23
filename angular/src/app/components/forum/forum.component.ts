import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Sort } from '@angular/material/sort';
import { ApiService } from 'src/app/shared/service/api/api.service';

@Component({
  selector: 'app-forums',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss'],
})
export class ForumsComponent implements OnInit {
  public forums: any = [];
  public typedComments: any = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getPosts().subscribe((res: any) => {
      this.forums = res;
      this.typedComments = new Array(this.forums.length).fill('');
    });
    // this.forums = [
    //   {
    //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas pretium feugiat tellus eget vitae sagittis id in. In in tempor ac dignissim at. Scelerisque sociis consequat sit dolor.",
    //     comments: [
    //       {
    //         content: "Comment 1"
    //       },
    //       {
    //         content: "Comment 2"
    //       },
    //     ],
    //     liked: true,
    //     disliked: false
    //   },
    //   {
    //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas pretium feugiat tellus eget vitae sagittis id in. In in tempor ac dignissim at. Scelerisque sociis consequat sit dolor.",
    //     comments: [
    //       {
    //         content: "Comment 1"
    //       },
    //       {
    //         content: "Comment 2"
    //       },
    //     ],
    //     liked: false,
    //     disliked: true
    //   },
    //   {
    //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas pretium feugiat tellus eget vitae sagittis id in. In in tempor ac dignissim at. Scelerisque sociis consequat sit dolor.",
    //     comments: [
    //       {
    //         content: "Comment 1"
    //       },
    //       {
    //         content: "Comment 2"
    //       },
    //     ],
    //     liked: false,
    //     disliked: false
    //   },
    // ];

    // // initializse typed comments as empty strings with the same length as the forums array
    // this.typedComments = new Array(this.forums.length).fill('');
  }

  // Add a comment to a forum
  addComment(index: number) {
    if (!this.typedComments[index] || this.typedComments[index] === '') {
      return;
    }
    this.forums[index].comments.push({
      content: this.typedComments[index],
    });
    this.typedComments[index] = '';
  }

  sendLike(index: number) {
    this.forums[index].liked = true;
    this.forums[index].disliked = false;
  }

  sendDislike(index: number) {
    this.forums[index].liked = false;
    this.forums[index].disliked = true;
  }
}
