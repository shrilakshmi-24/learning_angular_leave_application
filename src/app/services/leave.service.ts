import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  leaves =[{
    fromdate:"21-05-2023",
    todate:"22-05-2023",
    type:"sick leave",
    description:"description",
    reason:"hello reason"
}]

  constructor() { 

  }

  getLeave(){
    return this.leaves;
  }

  updateLeave(data:any){
    this.leaves=data;
  }

  addLeave(data:any){
    this.leaves.push(data)
  }

}

