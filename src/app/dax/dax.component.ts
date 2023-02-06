import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IgxRowDragGhostDirective } from 'igniteui-angular';

@Component({
  selector: 'app-dax',
  templateUrl: './dax.component.html',
  styleUrls: ['./dax.component.css']
})
export class DaxComponent {
  constructor(private http:HttpClient){}

  ngOnInit():void{
    this.callapi()
  }


  callapi(){
    this.http.get("./assets/dax.json").subscribe(res=>{
      console.log(res)
    })
// this.callapi();{
//   this.http.get("https://smartexchange-content.viooh.com/api/v1/creative").subscribe(res=>{
//     console.log(res)
//   })
// }
     

  
}
}
