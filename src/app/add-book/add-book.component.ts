import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../model/book';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  @Input() id! : number;
  @Output() bookAddedEvent = new EventEmitter<Book>();

  /*addBook = (titre : string, auteur : string, prix : number) => {
    const newBook = new Book(this.id+1, titre, auteur, prix);
    //console.log(JSON.stringify(newBook));
    this.bookAddedEvent.emit(newBook);
  }*/

  addBook = (f : NgForm)=>{
    console.log(f);
  }

}
