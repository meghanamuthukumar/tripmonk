import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  hotelCheckForm: FormGroup;
  constructor(public fb: FormBuilder,) {
    this.mainForm();
   }

  ngOnInit(): void {

  }
  mainForm() {
    this.hotelCheckForm = this.fb.group({
      hotel_name: ['']
    });
  }
  get myForm() {
    return this.hotelCheckForm.controls;
  }
}
