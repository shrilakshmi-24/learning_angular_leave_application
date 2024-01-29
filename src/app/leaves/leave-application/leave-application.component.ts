import { Component,OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { LeaveService } from 'src/app/leave.service';
import toastr from 'toastr'
@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.css']
})
export class LeaveApplicationComponent implements OnInit{
  reactiveForm:FormGroup
  storedFormData:any
  constructor(private leaveService:LeaveService){}
  // leaveHistory:{fromdate:string, todate:string,type:string, reason:string, description:string}[]=[]
  ngOnInit(){
    this.reactiveForm = new FormGroup({
      fromdate:new FormControl(null, [Validators.required ]),
      todate:new FormControl(null, [Validators.required ]),
      type:new FormControl(null,Validators.required),
      reason:new FormControl('sick'),
      description:new FormControl(null),
    })
    // this.leaveHistory =this.leaveService.leaves

   

    }
    submitForm(){
      console.log(this.reactiveForm)
      // alert("form submitted successfully!")
      if (this.reactiveForm.valid) {
        // Store the form data in the variable
        this.storedFormData = this.reactiveForm.value;
        console.log('Form submitted with data:', this.storedFormData);
        this.leaveService.addLeave(this.storedFormData)
        this.reactiveForm.reset()
        // toastr.success('Have fun storming the castle!', 'Miracle Max Says')
        // this.leaveHistory.push(this.storedFormData)
      }

    }

  }

