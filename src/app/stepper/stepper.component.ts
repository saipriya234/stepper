import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
accountForm!:FormGroup;
businessForm!:FormGroup;
acceptedTerms!:boolean;
submitted:boolean=false;
constructor(private fb:FormBuilder){}
ngOnInit(): void {
  this.accountForm=this.fb.group({
    organizationName:['',Validators.required],
    accountName:['',Validators.required]
  });
  this.businessForm=this.fb.group({
    industryCategory:['',Validators.required],
    businessSize:[,Validators.required]
  });
}
submit(){
  console.log('Form submitted successfully!');
    console.log('Account Form Values:', this.accountForm.value);
    console.log('Business Form Values:', this.businessForm.value);
    this.submitted = true;
}
}
