import { Component, OnInit } from '@angular/core';

import {
  faCog,
  faAngleRight,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.scss']
})
export class GraphicDesignComponent implements OnInit {
  faCog = faCog;
  faAngleRight = faAngleRight;
  faArrowLeft = faArrowLeft;

  constructor() { }

  ngOnInit(): void {
  }

}
