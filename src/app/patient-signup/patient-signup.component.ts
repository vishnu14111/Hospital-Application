import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css']
})
export class PatientSignupComponent implements OnInit {

  public signupForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname: [''],
      email: [''],
      password: [''],
      mobile: ['']
    })
  }
  signUp() {
    this.http.post<any>("http://localhost:3000/signupUser", this.signupForm.value)
      .subscribe(res => {
        alert("Signup successfull");
        this.signupForm.reset();
        this.router.navigate(['patient-login']);
      }, err => {
        alert("something went wrong")
      })
  }

}
