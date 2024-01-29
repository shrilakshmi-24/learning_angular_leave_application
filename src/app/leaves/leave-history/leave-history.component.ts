import { Component } from '@angular/core';
import { LeaveService } from 'src/app/leave.service';

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent {
  leaveHistory:any;

  constructor(private leaveService:LeaveService){
    this.leaveHistory=this.leaveService.getLeave();
  }
}
