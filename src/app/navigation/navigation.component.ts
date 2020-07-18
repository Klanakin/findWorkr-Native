import { Component, OnInit} from '@angular/core';
// import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import {
  faBell,
  faEnvelope,
  faHome,
  faSearch,
  faUser,
  faCaretRight,
  faBars,
  faAngleDoubleDown,
  faCompressAlt,
  faExpandAlt
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  faBell = faBell;
  faEnvelope = faEnvelope;
  faHome = faHome;
  faSearch = faSearch;
  faUser = faUser;
  faCaretRight = faCaretRight;
  faBars = faBars;
  faAngleDoubleDown = faAngleDoubleDown;
  faCompressAlt = faCompressAlt;
  faExpandAlt = faExpandAlt;

  isActive: boolean = true;
  isVisible: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  // closeMenu() {
  //   (<HTMLInputElement>document.getElementById("nav-toggle")).checked = false;
  // }

  toggleMenu(): void {
    if (!this.isActive) {
      (<HTMLInputElement>document.getElementById("nav-bar")).className = "navigation__bar navigation__bar--active";
    }
    else {
      (<HTMLInputElement>document.getElementById("nav-bar")).className = "navigation__bar";
    }
    this.isActive = !this.isActive;
  }

  enterFullScreen(): void {
    document.documentElement.requestFullscreen();
    this.isVisible = !this.isVisible;
  }

  exitFullScreen(): void {
    document.exitFullscreen();
    this.isVisible = !this.isVisible;
  }
}
