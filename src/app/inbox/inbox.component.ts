import { Component, OnInit } from '@angular/core';
import {
  faEnvelope,
  faFilter 
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  faEnvelope = faEnvelope;
  faFilter = faFilter;
  
  constructor() { }

  ngOnInit(): void {
  }

}
