import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective | any;
  formGroup: FormGroup | any;
  post: any = '';
  titleAlert: string = 'This field is required';
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.pattern(emailregex)]],
      'domainName': [null, Validators.required],
      'firstName': [null, Validators.required],
      'LastName': [null, Validators.required],
      'nationality': [null, Validators.required],
      'mobile': [null, Validators.required],
      'joinDate': [null, Validators.required],
      'domain': [null, Validators.required],
      'hosting': [null, Validators.required],
      'ssl': [null, Validators.required],
      'status': [null, Validators.required],
      'type': [null, Validators.required],
      'address': [null, Validators.required],
      'cPanel': [null, Validators.required],
    });
  }

  getErrorEmail() {
    return this.formGroup.get('email').hasError('required') ? 'Field is required' :
      this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
        this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }

  onSubmit(post: any) {
    this.post = post;
  }
  clear() {
    this.formGroupDirective.resetForm()
  }

}
