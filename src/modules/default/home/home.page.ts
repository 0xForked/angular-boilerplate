import {Component} from '@angular/core';
import {SharedPipesModule} from '../../../shared/pipes/shared-pipes.module';

@Component({
  standalone: true,
  templateUrl: './home.page.html',
  imports: [
    SharedPipesModule
  ]
})
export class HomePage {}
