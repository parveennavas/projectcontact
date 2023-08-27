import { Injectable, OnInit } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService  {
  contacts:Contact[]=[
    {
      Id:1,
      firstName: "Emily",
      lastName: "Johnson",
      phoneNumber: "(555) 123-4567",
      address: "123 Maple Street, Anytown, USA",
    },
    {
      Id:2,
      firstName: "David",
      lastName: "Williams",
      phoneNumber: "(555) 987-6543",
      address: "456 Oak Avenue, Somewhere City, USA",
    },
    {
      Id:3,
      firstName: "Sophia",
      lastName: "Martinez",
      phoneNumber: "(555) 555-7890",
      address: "789 Pine Road, Anotherville, USA",
    },
    {
      Id:4,
      firstName: "James",
      lastName: "Davis",
      phoneNumber: "(555) 222-3333",
      address: "234 Elm Lane, Townsville, USA",
    },
    {
      Id:5,
      firstName: "Olivia",
      lastName: "Anderson",
      phoneNumber: "(555) 444-7777",
      address: "567 Cedar Street, Yourtown, USA",
    },
  ];
  session: any;
  newContact: any;
  constructor(){}
  getContacts(){
    
      let data:any=localStorage.getItem('UserDataList');
      this.newContact=JSON.parse(data);
      let highestId=0;
      this.contacts.forEach(contactObject =>{
        if(contactObject.Id>highestId){
          highestId=contactObject.Id;
        }
      })
  
      //adding new contact
      this.contacts.push(
        {
            Id:highestId+1,
            firstName:this.newContact.firstName,
           lastName:this.newContact.lastName,
            phoneNumber:this.newContact.phoneNumber,
            address:this.newContact.address
            
        }
      );
      console.log(this.contacts)
  
    
       return this.contacts;
  }
 
  updateContact(updateContact:Contact){
    const index=this.contacts.findIndex(contact=>contact.Id==updateContact.Id)
    this.contacts[index].firstName=updateContact.firstName;
    this.contacts[index].lastName=updateContact.lastName;
    this.contacts[index].phoneNumber=updateContact.phoneNumber;
    this.contacts[index].address=updateContact.address;


  }
  deleteContact(id:number){
      const index=this.contacts.findIndex(contact=>contact.Id==id);
      this.contacts.splice(index,1);
  }
}



