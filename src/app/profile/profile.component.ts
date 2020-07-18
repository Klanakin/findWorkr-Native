import { Component, OnInit } from '@angular/core';

import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  faCog = faCog;
  faBars = faBars;
  status: boolean;

  constructor() {}

  ngOnInit(): void {}

  enterFullScreen(): void {
    document.documentElement.requestFullscreen();
  }

  exitFullScreen(): void {
    document.exitFullscreen();
  }

}
