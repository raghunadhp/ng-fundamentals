import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './profile.component.html',
    styles: [`
     em { float:right; color:E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5 }
    .error ::-webkit-input-plcaeholder {color: #999}
    .error ::-moz-plcaeholder {color: #999; }
    .error :-moz-plcaeholder {color: #999; }
    .error :ms-input-plcaeholder {color: #999; }
    `]
})
export class ProfileComponent implements OnInit {

    profileForm;
    private firstName: FormControl;
    private lastName: FormControl;
    constructor(private authService: AuthService, private router: Router) {}
    ngOnInit() {
        this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
        this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }

    cancel() {
        this.router.navigate(['events']);
    }

    saveProfile(formsValue) {
        if (this.profileForm.valid) {
        this.authService.udateCurrentUser(formsValue.firstName, formsValue.lastName);
        this.router.navigate(['events']);
        }
    }


    validateLastName() {
        return this.lastName.valid || this.lastName.untouched;
    }

    validateFirstName() {
        return this.firstName.valid || this.firstName.untouched;
    }
    // profileForm.controls.lastName.invalid && profileForm.controls.lastName.touched
    // profileForm.controls.firstName.invalid && profileForm.controls.firstName.touched

}
