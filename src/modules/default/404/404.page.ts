import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  standalone: true,
  templateUrl: './404.page.html',
  imports: [
    RouterLink
  ]
})
export class NotFoundPage {}
