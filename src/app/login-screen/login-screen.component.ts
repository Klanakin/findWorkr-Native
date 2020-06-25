import { Component, OnInit } from '@angular/core';
import { UserInputControl } from '../user-input-control';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginEmailComponent implements OnInit {
  formCompleted: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  private isFulfilled(): boolean {
    return (
      document.querySelectorAll("input")[0].value !== "" &&
      document.querySelectorAll("input")[1].value !== ""
    );
  }

  hasInput() {
    let form = new UserInputControl(this.isFulfilled());
    this.formCompleted = form.activateButton();
  }
}



