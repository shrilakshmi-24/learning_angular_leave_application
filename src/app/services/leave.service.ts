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
    reason:"hello reason",
    status:"pending"
},
{
  fromdate:"21-05-2023",
  todate:"22-05-2023",
  type:"sick leave",
  description:"description",
  reason:"hello reason",
  status:"pending"
},
{
  fromdate:"21-05-2023",
  todate:"22-05-2023",
  type:"sick leave",
  description:"description",
  reason:"hello reason",
  status:"Accepted"
},
{
  fromdate:"21-05-2023",
  todate:"22-05-2023",
  type:"sick leave",
  description:"description",
  reason:"hello reason",
  status:"pending"
}]
  LeaveHistory = [{
    fromdate:"21-05-2023",
  todate:"22-05-2023",
  type:"sick leave",
  description:"description",
  reason:"hello reason",
  status:"Accepted"
  }]
  // getLeave(){
  //   return this.leaves;
  // }

  getPendingLeave(){
    return this.leaves.filter((entry)=>entry.status==="pending")
  }

  updateLeave(data:any){
    this.leaves=data;
  }

  addLeave(data:any){
    data.status = "pending"
    this.leaves.push(data)
  }

  getLeaveHistory(){
    return this.leaves.filter((entry)=>entry.status!="pending")
  }

}

