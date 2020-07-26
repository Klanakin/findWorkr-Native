import { Component, OnInit } from '@angular/core';
import { UserInputControl } from '../user-input-control';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginEmailComponent implements OnInit {
  formCompleted: boolean = false;
  popupVisible: boolean = false;
  credentialPlatform: string = "";

  constructor() {}

  ngOnInit(): void {}

  private verifyFormInput(): boolean {
    return (
      document.querySelectorAll("input")[0].value !== "" &&
      document.querySelectorAll("input")[1].value !== ""
    );
  }

  hasInput(): void {
    let form = new UserInputControl(this.verifyFormInput());
    this.formCompleted = form.activateButton();
  }

  openPopup(credentialPlatform: string): void {
    this.credentialPlatform = credentialPlatform;
    this.popupVisible = true;
  }

  closePopup(): void {
    this.popupVisible = false;
  }
}



