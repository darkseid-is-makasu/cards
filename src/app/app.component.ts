import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [{
    title: 'Batman',
    imageUrl: './assets/images/batman.jpeg',
    username: 'The_Dark_Knight',
    content: 'Was out on patrol and thought I looked cute or whatever. Might delete later.'
  },
  {
    title: 'Superman',
    imageUrl: './assets/images/superman-lois.png',
    username: 'Man_of_Steel',
    content: "You're my laaaadddddyyyyyyy *in my D'Angelo voice*"
  },
  {
    title: 'Wonder Woman',
    imageUrl: './assets/images/wonder-woman.jpeg',
    username: 'Diana_Prince',
    content: "Your girl has always been the sugar honey ice tea!"
  }
]
}
