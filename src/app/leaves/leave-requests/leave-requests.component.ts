import { Component } from '@angular/core';
import { LeaveService } from '../../services/leave.service';

@Component({
  selector: 'app-leave-requests',
  templateUrl: './leave-requests.component.html',
  styleUrls: ['./leave-requests.component.css']
})
export class LeaveRequestsComponent {
  leaveHistory: any[];
  leaveRequest:any[]
  pageIndex = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 50];

  constructor(private leaveService: LeaveService) {
    this.leaveRequest= this.leaveService.getPendingLeave();
  }

  onPageChange(event: any): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  acceptLeave(index:number){
   
    const conform =confirm("Leave is Accepted")
    console.log(index)
    if(conform){
      this.leaveRequest[index].status = "Accepted"
    }
   
  }
  rejectLeave(index:number){
    const conform =confirm("Leave is rejected")
    if(conform){
      this.leaveRequest[index].status = "Rejected"
    }
    
  }
}
