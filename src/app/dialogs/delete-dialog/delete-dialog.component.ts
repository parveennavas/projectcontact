import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Contact } from 'src/app/interfaces/contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {
  contacttoDelete!:Contact;
 deleteForm = new FormGroup({
    firstName: new FormControl({value:'',disabled:true}),
    lastName: new FormControl({value:'',disabled:true}),
    phoneNumber: new FormControl({value:'',disabled:true}),
    address: new FormControl({value:'',disabled:true}) 
  });
  idToDelete!: number;
  updateForm: any;
  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Contact,private contactService:ContactsService){
    this. contacttoDelete=data;
 
  }
  ngOnInit(){
    this.deleteForm.controls['firstName'].setValue(this.contacttoDelete.firstName);
    this.deleteForm.controls['lastName'].setValue(this.contacttoDelete.lastName);
    this.deleteForm.controls['phoneNumber'].setValue(this.contacttoDelete.phoneNumber);
    this.deleteForm.controls['address'].setValue(this.contacttoDelete.address);

    
   }
   onSubmit(){
    let contactId=this.contacttoDelete.Id;
    this.contactService.deleteContact(contactId);
    
    this.dialogRef.close();
     
   }
   
}
