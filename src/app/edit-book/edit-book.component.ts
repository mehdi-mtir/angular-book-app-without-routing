import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {
  @Input() bookToEdit! : Book;
  @Output() editBookEvent = new EventEmitter<Book>();

  editBook = (titre : string, auteur : string, prix : number) => {
    const editedBook = new Book(this.bookToEdit.id, titre, auteur, prix);
    this.editBookEvent.emit(editedBook);
  }

}
