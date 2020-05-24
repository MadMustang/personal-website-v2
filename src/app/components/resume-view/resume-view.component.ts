import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/common/post';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Resume } from 'src/app/common/resume';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.css']
})
export class ResumeViewComponent implements OnInit {

  posts: Post[];
  resumes: Resume[];

  constructor(private service: DataServiceService) { }

  ngOnInit(): void {
    this.listResume();
  }

  listPosts() {
    this.posts = this.service.getPosts();
  }

  listResume() {
    this.resumes = this.service.getResumeData();
  }
}
