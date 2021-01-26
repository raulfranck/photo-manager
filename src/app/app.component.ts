import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  photos = [
    {
      url: 'https://images.pexels.com/photos/3952549/pexels-photo-3952549.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description: 'Montanhas'
    },
    {
      url: 'https://images.pexels.com/photos/6159755/pexels-photo-6159755.jpeg?cs=srgb&dl=pexels-eva-elijas-6159755.jpg&fm=jpg',
      description: 'Rochas'
    },
    {
      url: 'https://images.pexels.com/photos/5288214/pexels-photo-5288214.jpeg?cs=srgb&dl=pexels-mohamed-abdelsadig-5288214.jpg&fm=jpg',
      description: 'Lua'
    }
  ];
}
