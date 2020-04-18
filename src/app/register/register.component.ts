import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  form:FormGroup;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService) {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.form.valid)
    {
      this.authService.register(this.form.controls.username.value,
        this.form.controls.password.value)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate(['/login']);
          },
          error => {
            this.error = error;
          }
        )
    }
  }

}
