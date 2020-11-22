import { Router } from '@angular/router';
import { ApiService } from './../../api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { faRedo, faAddressBook, faMoneyCheck, faInfo, faHashtag } from '@fortawesome/free-solid-svg-icons';
import {ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.scss']
})
export class AddHotelComponent implements OnInit {
  faRedo = faRedo;
  faMoneyCheck= faMoneyCheck;
  faAddressBook = faAddressBook;
  faInfo = faInfo
  faHashtag = faHashtag;
  hotelCreateForm: FormGroup;
  submitted = false;
  displayFiled = true;
  returnUrl: "";
  Option: any[] = [0, 1];
  successMsg:string;
  Hotel: any = [];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }

  create() {
    this.router.navigateByUrl('/create-employee');
  }
  readEmployee() {
    this.apiService.getHotels().subscribe((data) => {
      this.Hotel = data;
    });
  }
  ngOnInit() {
    this.displayFiled = true;
  }
  
  mainForm() {
    this.hotelCreateForm = this.fb.group({
      hotel_name: [''],
      address: [''],
      city: [''],      
      nearest_airport: [''],
      distance_from_airport: [],
      manager_name: [''],
      manager_number1: [],
      manager_number2: [],
      wifi: [],
      swimming_pool: [],
      breakfast: [],
      spa: [],
      indoor_games: [],
      laundry: [],
      cab_services: [],
      restaurant: [],
      room_service: []
    });
  }
  resetForm() {
    Swal.fire({
      text: 'Are you sure you want to reset ?',
      width: 300,
      showCancelButton: true,
      cancelButtonText: 'No',
      cancelButtonColor: '#ff0000',
      confirmButtonText: 'Yes',
      confirmButtonColor: '#008000',
    }).then((result) => {
      if (result.value) {
        window.location.reload();
      }
    });
  }
  redirect() {
    // this.router.navigate("/patients");
    Swal.fire({
      text: 'Are you sure you want to cancel it ?',
      width: 300,
      showCancelButton: true,
      cancelButtonText: 'No',
      cancelButtonColor: '#ff0000',
      confirmButtonText: 'Yes',
      confirmButtonColor: '#008000',
    }).then((result) => {
      if (result.value) {
        this.router.navigateByUrl('/add-hotel');
      }
    });
  }
  get myForm() {
    return this.hotelCreateForm.controls;
  }

  onSubmit() {
    console.log("submit pressed")
    if (!this.hotelCreateForm.valid) {
      console.log("problem!!!!")
      return false;
    } else {
      console.log("before apiService")
      this.apiService.addHotel(this.hotelCreateForm.value).subscribe(
        (res) => {
          this.successMsg="Registration successful for"+" "+this.hotelCreateForm.get("hotel_name").value+"!";
          console.log('Hotel successfully created!');
          Swal.fire({
            text: this.successMsg,
            width: 300,
            showCancelButton: false,
            cancelButtonText: 'Cancel',
            cancelButtonColor: '#ff0000',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#008000',
          }).then((result) => {
            if (result.value) {
              window.location.reload();
            }
          });
          this.ngZone.run(() => this.router.navigateByUrl('/employees-list'))
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
