import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../interfaces/contact';
import { UpdateDialogComponent } from '../dialogs/update-dialog/update-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
//import { FileUploadService } from '../services/file-upload.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  
  
})
export class ContactsComponent implements OnInit{
  dataSource=new MatTableDataSource<Contact>();
  
  contactsDataArray:Contact[]=[];
  columnsToDisplay =  [ 'firstName', 'lastName', 'phoneNumber','address','Update','Delete'] ;
Contact: any;
contact: any;
ProfileDP='';

  constructor(private contactService: ContactsService,private dialog:MatDialog){}
  ngOnInit() {
        this.contactsDataArray=this.contactService.getContacts();
        console.log(this.contactsDataArray);
        this.dataSource= new MatTableDataSource<Contact>(this.contactsDataArray);

  }
   onUpdate(contact:Contact){
    let dialogRef = this.dialog.open(UpdateDialogComponent, {
      height: '500px',
      width: '500px',
      data: contact,
    });
   }
   onDelete(contact:Contact){
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      height: '500px',
      width: '500px',
      data: contact,
   });
   dialogRef.afterClosed().subscribe(result => {
    this.updateDataSource( this.contactsDataArray );
  });
   
  
}
ImageUpload(event:any):void{

}
updateDataSource(dataArray: Contact[]){
  this.dataSource.connect().next(dataArray);
}
}
