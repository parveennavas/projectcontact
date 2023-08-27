import { Component, OnInit,Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ContactsService } from '../services/contacts.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Contact } from '../interfaces/contact';
interface CardData {
  firstName: string;
  lastName: string;
  email: string;
  imageUrl: string;
  
}

@Component({
  selector: 'app-home',
  template: `
    <div class="card-container">
      <mat-card *ngFor="let card of cards" class="example-card">
        <mat-card-header>
          <mat-card-title-group>
            <mat-card-title>{{ card.firstName }} {{ card.lastName }}</mat-card-title>
            <mat-card-subtitle>{{ card.email }}</mat-card-subtitle>
            <img mat-card-md-image [src]="card.imageUrl" alt="Image of {{ card.firstName }} {{ card.lastName }}">
          </mat-card-title-group>
        </mat-card-header>
        <mat-card-content>
          
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styleUrls: [ './home.component.scss'],
  
  
})
export class HomeComponent {
  @Input() contact: Contact | undefined; 
  cards: CardData[] = [
    {
      firstName: 'David',
      lastName: 'Williams',
      email: 'davidwilliams@gmail.com',
      imageUrl: "https://makepassportphoto.com/id_photo/65.png",
      
    },
    {
      firstName: 'Emily',
      lastName: 'Johnson',
      email: 'emilyjohnson@gmail.com ',
      imageUrl: "https://i.pinimg.com/originals/bf/72/d2/bf72d27f95b86eaefd51502d82ed6a77.jpg",
      
    },
    // Repeat the above structure for each card...
    {
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alice.johnson@gmail.com',
      imageUrl:  "https://th.bing.com/th/id/OIP.NKYKXCEuCkq9lt437n5wfgHaHa?pid=ImgDet&w=900&h=900&rs=1",
   
    },
    {
      firstName: 'James',
      lastName: 'Davis',
      email: 'bob.williams@gmail.com',
      imageUrl: "https://th.bing.com/th/id/OIP.9XkaSyay7Zed0c0eyYZTiQHaLr?pid=ImgDet&rs=1",
      
    },
    {
      firstName: 'Sophia',
      lastName: 'Martinez',
      email: 'sophia@gmail.com',
      imageUrl:  "https://i.etsystatic.com/22408734/r/il/8a2479/2989747409/il_300x300.2989747409_k7vz.jpg",
      
    },
    
  ];
  
 }
