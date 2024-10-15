import { Component, OnInit } from '@angular/core';
import { iPost } from '../../interfaces/ipost';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  //implements OnInit implementa l'interfaccia che ha come metodo ngOnInit così non si sbaglia a scriverlo!
  posts: iPost[] = [];
  indexRandom: number = 0;
  shuffledPosts: iPost[] = [];
  tags: string[] = [];
  // postTagged: boolean = false;

  constructor(private postSvc: PostService) {}

  ngOnInit() {
    this.posts = this.postSvc.posts;
    this.tags = [...new Set(this.postSvc.posts.flatMap((post) => post.tags))];

    this.indexRandom = Math.floor(Math.random() * this.posts.length); // indice random per avere un post casuale!

    //Fisher-Yates Sorting Algorithm // algoritmo per fare lo shuffle di un array!
    const shuffle = (array: iPost[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    this.shuffledPosts = structuredClone(this.posts); //creo una deep copy dell'array posts e poi faccio lo shuffle sull'array shuffledPosts!
    this.shuffledPosts = shuffle(this.shuffledPosts);
  }

  // showPosts() {
  //   this.postTagged = true;
  // }
}
