import { Component, EventEmitter, Input, Output } from '@angular/core';
import { iPost } from '../../interfaces/ipost';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
})
export class SinglePostComponent {
  @Input() post!: iPost;

  formActive: boolean = false;

  formActivation() {
    this.formActive = true;
  }
}
