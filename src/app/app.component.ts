import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // styles: [`
  //   h1 {
  //     color: dodgerblue
  //   }
  // `]
})
export class AppComponent {
  // title: string = 'angular-study'
  // username: string = ''
  // disableButton: boolean = true
  // displayText = false
  // num = 0
  // logs: any = []

  onBtnClick() {
    // this.displayText = !this.displayText
    // this.logs.push(this.logs.length + 1)

    // this.logs.push(new Date())
  }
}
