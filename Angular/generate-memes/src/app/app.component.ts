import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'generate-memes';
  meme = "";
  meme2 ="";
  @Input() URL="https://thumbs.gfycat.com/FaroffCoarseBarnacle-poster";

  introducirTextoArriba(event) {
    console.log(event);
    this.meme = event;
  }
  introducirTextoAbajo(event) {
    console.log(event);
    this.meme2 = event;
  }
  
}
