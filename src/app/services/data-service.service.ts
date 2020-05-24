import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../common/post';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Resume } from '../common/resume';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  //private targetUrl = "https://jsonplaceholder.typicode.com/posts";
  private targetUrl = "https://boring-bhabha-d40eef.netlify.app/.netlify/functions/getjsondata";

  private posts: Post[];
  private resumes: Resume[];

  constructor(private httpClient: HttpClient) { }

  // First function to be called
  loadData(): Promise<any> {
    
    const promise = new Promise((resolve, reject) => {
      this.getAPI(this.targetUrl).subscribe((response: any)=> {
        console.log('Response from server:', response);
        this.resumes = response;
        resolve(true);
      });
    });

    return promise;
  }

  getAPI(url: string): Observable<Resume[]> {
    return this.httpClient.get(url)
        .pipe(map((response: any) => response.resume.work));
  }

  getPosts(): Post[] {
    return this.posts;
  }

  getResumeData(): Resume[] {
    return this.resumes;
  }
}

interface GetResponse {
  _embedded: {
    posts: Post[];
  }
}