import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageToGoTo: string;
  title = 'udemyCourse';

  goToPage(naviPage: string) {
    this.pageToGoTo = naviPage;
  }
}
