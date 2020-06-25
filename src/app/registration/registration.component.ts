import { Component, OnInit } from '@angular/core';
import { UserInputControl } from '../user-input-control';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  visibility: boolean = true;
  formCompleted: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  togglePasswordVisibility(): void {
    let inputType: string = document.getElementById("registration-password").attributes[1].textContent;

    if (inputType === "password") {
      document.getElementById("registration-password").attributes[1].textContent = "text";
      this.visibility = false;
    }
    else {
      document.getElementById("registration-password").attributes[1].textContent = "password";
      this.visibility = true;
    }
  }

  private isFulfilled(): boolean {
    return (
      document.querySelectorAll("input")[0].value !== "" &&
      document.querySelectorAll("input")[1].value !== "" &&
      document.querySelectorAll("input")[2].value !== "" &&
      document.querySelectorAll("input")[3].checked
    );
  }

  hasInput() {
    let form = new UserInputControl(this.isFulfilled());
    this.formCompleted = form.activateButton();
  }
}


