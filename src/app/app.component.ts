import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poc1';
  isDisabled:boolean=true

    setvalue(event:Event) {
      console.log(event)

    if((<HTMLInputElement>event.target).value){
      this.isDisabled=false
    }else{
      this.isDisabled=true
    }
    
   }

}
