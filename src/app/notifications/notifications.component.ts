import { Component, OnInit } from '@angular/core';
import { faBellSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  faBellSlash = faBellSlash;
  
  constructor() { }

  ngOnInit(): void {
  }

}
