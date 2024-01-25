import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.css']
})
export class LeaveApplicationComponent {
  reactiveForm:FormGroup
  ngOnInit(){
    this.reactiveForm = new FormGroup({
      firstname:new FormControl(null, [Validators.required,CustomValidators.noSpaceAllowed ]),
      lastname:new FormControl(null,Validators.required),
      dob:new FormControl(null,),
      gender:new FormControl(null),
      address:new FormControl(null),
      phone:new FormControl(null),
      email:new FormControl(null, [Validators.required,Validators.email]),
      password:new FormControl(null),
      skill: new FormArray([ new FormControl(null,Validators.required)]
       
      )

    })
  }
}
