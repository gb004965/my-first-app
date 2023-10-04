import {Component} from "@angular/core";

@Component({
  selector: 'app-warning-alert',
  // templateUrl: './warning-alert.component.html'
   template: `
        <div>
               <h3>Some Warning Text</h3>
        </div>`,
   styles: [
     `
       h3 {
         padding: 20px;
         background-color : limegreen;
         text-align: center;
         border: 1px solid green;
       }
     `
   ]

})



export class WarningAlertComponent {

}
