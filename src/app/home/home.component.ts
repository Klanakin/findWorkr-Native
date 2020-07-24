import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faSearch = faSearch;
  wholeContentSection1 = false;
  wholeContentSection2 = false;

  constructor() { }

  ngOnInit(): void {
  }

  seeAll(sectionId: string): void {
    if (sectionId == 'section-1') {
      this.wholeContentSection1 = true;
    }
    else if (sectionId == 'section-2') {
      this.wholeContentSection2 = true;
    }
  }

  seeLess(sectionId: string): void {
    if (sectionId == 'section-1') {
      this.wholeContentSection1 = false;
    }
    else if (sectionId == 'section-2') {
      this.wholeContentSection2 = false;
    }
  }
}
