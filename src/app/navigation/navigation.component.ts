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
  faAngleDoubleRight,
  faAngleDoubleDown
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

  constructor() {}

  ngOnInit(): void {}

  closeMenu() {
    (<HTMLInputElement>document.getElementById("nav-toggle")).checked = false;
  }
}
