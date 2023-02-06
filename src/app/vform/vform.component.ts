import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vform',
  templateUrl: './vform.component.html',
  styleUrls: ['./vform.component.css']
})
export class VformComponent {
  
//   saveform: any;
// //usermodel: any;
//   save(data: object): void {
//     console.warn(data)
//     this.saveform()
//   }
//   getvalue(val:any){
//       console.warn(val);
//   }
//   vform:FormGroup;
  
//   name = 'Angular';
//   listData:any;

//   constructor(private fb:FormBuilder) { 
//     this.listData=[{
//       method:[''],
//       end:[''],
//       buyer:[''],
//       width:[''],
//       height:[''],
//       domain:[''],

//     }]
//   }
//   resetform(){       
//     this.vform.reset();
//   }
name = 'Angular';  

  constructor(private http:HttpClient){}

  ngOnInit():void{
    this.callapi()
  }

//call json through httpclient
  callapi(){
    this.http.get("./assets/data.json").subscribe(res=>{
      console.log(res)
    })

   
  }

}
