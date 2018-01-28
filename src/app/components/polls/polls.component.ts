import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { PollService } from '../../services/poll.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit, AfterViewInit {
  private displayedColumns = ['id', 'title', 'description', 'actions'];
  private dataSource: MatTableDataSource<any>;
  private polls: Array<any>;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {

  }
  constructor(private pollService: PollService) { }

  ngOnInit() {
    this.pollService.getPolls()
      .subscribe(polls => {
        if (polls) {
          this.polls = polls.json();
          this.dataSource = new MatTableDataSource(this.polls);
          this.dataSource.sort = this.sort;
        }
      });
  }

}
