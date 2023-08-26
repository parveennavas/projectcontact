import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../interfaces/contact';
@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.scss']
})
export class NewcontactComponent implements OnInit  {
  newContact!: Contact;
  contactForm = new FormGroup({
    firstName: new FormControl('', [Validators.required,Validators.maxLength(50)]),
    lastName: new FormControl('', [Validators.required,Validators.maxLength(50)]),
    phoneNumber: new FormControl('', [Validators.required,Validators.maxLength(20)]),
    address: new FormControl('', [Validators.required,Validators.maxLength(250)]),
    photo: new FormControl('', [Validators.required,Validators.maxLength(250)]),
  dob:new FormControl('', [Validators.required,Validators.maxLength(250)]),
  email:new FormControl('', [Validators.required,Validators.maxLength(250)])
   
  });
minDate: any;
maxDate: any;
  session: any;

  
   
  constructor(private router: Router,private contactService:ContactsService){
     this.minDate="2022-10-01"
     this.maxDate="2022-10-25"
  }
  ngOnInit() {}
    url="./assets/img.jpg"
  onselectFile(e:any)
  {
    if(e.target.files){
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }
  
 
  onCancel(){
    this.router.navigate(['./contacts']);
  }
  onSubmit(){
    this.newContact={
      Id:0,
      firstName:this.contactForm.controls['firstName'].value as string,
      lastName:this.contactForm.controls['lastName'].value as string,
      phoneNumber:this.contactForm.controls['phoneNumber'].value as string,
      address:this.contactForm.controls['address'].value as string,
      dob:this.contactForm.controls['dob'].value as string,
      email:this.contactForm.controls['email'].value as string,
      photo:this.contactForm.controls['photo'].value as string
      
    }
    let UserDataList:Contact;
    localStorage.setItem('UserDataList',JSON.stringify(this.newContact));
    //let userDataList:Contact[]=[] ;
    //const storedData=localStorage.getItem('userDataList');
   // if(storedData){
     // this.newContact=JSON.parse(storedData);
    //}
   //userDataList.push(this.newContact);
    //let session:Contact;
     
   
    this.router.navigate(['/contacts']);
  }
  handlePhotoUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      //this.newContact.photo = file;
    }
  }
}