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
  faExpand,
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
  faExpand = faExpand;
  faExpandAlt = faExpandAlt;

  isActive: boolean = true;
  isFullscreen: boolean;

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

  toggleFullscreen(): void {
    window.addEventListener("resize", ()=> {
      this.isFullscreen = (window.innerHeight == screen.height);
    });

    if (!this.isFullscreen) {
      document.documentElement.requestFullscreen();
    }
    else {
      document.exitFullscreen();
    }
  }
}
