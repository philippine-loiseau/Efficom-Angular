import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/shared/helpers/must-match.validator';
import { TrainerService } from 'src/app/shared/services/trainer.service';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {
  
  registerForm: FormGroup;
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  returnUrl: string;
  
  
  constructor(private formBuilder: FormBuilder, private trainerService: TrainerService, private authenticationService: AuthenticationService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.createTrainer();
    this.login();
  }
  
  createTrainer() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }
  
  get f() { return this.registerForm.controls; }
  
  onRegisterSubmit() {
    this.submitted = true;
    
    if (this.registerForm.invalid) {
      return;
    }
    return this.trainerService.createTrainer(this.registerForm.value).subscribe(
      data => {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
        return true;
      },
      error => {
        console.error("Error saving user!");
        return Observable.throw(error);
      }
      );;
    }
    
    
    login() {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      })
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    
    get l() { return this.loginForm.controls; }
    
    onLoginSubmit() {
      this.submitted = true;
      
      // stop here if form is invalid
      if (this.loginForm.invalid) {
        return;
      }
      
      this.loading = true;
      this.authenticationService.login(this.l.email.value, this.l.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/team']);
        },
        error => {
          this.loading = false;
        });
      }
      
      
      
    }
