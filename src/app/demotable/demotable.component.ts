import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-demotable',
  templateUrl: './demotable.component.html',
  styleUrls: ['./demotable.component.css']
})
export class DemotableComponent implements OnInit {

  save(data:object):void // save function for the save the data of form into console.
  {
    console.warn(data)
    this.resetform();
  
  }
    getvalue(val:any)
    {
      console.warn(val);
    }
  
    userForm: FormGroup;
    listData:any;
    constructor(private fb:FormBuilder) { 
    this.listData = [{
       startdate:[''],
       enddate:[''],
       lineitemid:[''],
       camp:[''],
       impr:[''],
       duration:[''],
       range:[''],
       adtype:[''],
       dspid:[''],
       adfee:[''],
  }];
  //for validation
      this.userForm = this.fb.group({
          startdate:['', Validators.required],
          enddate:['', Validators.required],
          lineitemid:['', Validators.required],
          camp:['',Validators.required],
          impr:['',Validators.required],
          duration:['',Validators.required],
          range:['',Validators.required],
          adtype:['',Validators.required],
          dspid:['',Validators.required],
          adfee:['',Validators.required],
      })
    }
  
    public addItem():void{  //function for the add table row
      this.listData.push(this.userForm.value)
    }
     remove(element:any) {   //function for remove additional row
      if(element==1)
      {
        return;
      }
      else{
    this.listData.forEach((value:any , index:any) => {
      
        if(value==element)
        this.listData.pop(index,1);
       });
      }
        for(let i in this.listData){
        if(i==element)
        this.listData.pop(element);
      }
    }
      resetform(){        //function for the reset the value of input fields after save the info
      this.userForm.reset();
    }
  
    ngOnInit(): void {
    }
  
  }
  