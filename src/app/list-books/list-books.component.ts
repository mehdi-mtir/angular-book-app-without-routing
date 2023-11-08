import { Component } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent {
  books : Book[] = [
    new Book(1, 'Atomic Habits', 'James Clear', 30),
    new Book(2, 'Guerre et paix', 'Tolstoi', 0),
    new Book(3, 'Problème à 3 corps', 'Liu Cixin', 20)
  ];

  action = '';
  lastId = 0;
  bookToEdit? : Book;

  showAddBook = () => {
    if(this.books.length !== 0){
      this.lastId = this.books[this.books.length - 1].id;
    }
    this.changeAction('add');
  }

  showEditBook = (book : Book) =>{
    this.bookToEdit = book;
    this.changeAction('edit');
  }

  addBook = (book : Book) => {
    this.books.push(book);
    this.changeAction('');
  }

  editBook = (book : Book)=>{
    /*this.books = this.books.map(b=>{
      if(b.id === book.id)
        return book;
      else
        return b;
    })*/
    this.books = this.books.map(b=>(b.id===book.id)?book:b);
    this.changeAction('');
  }

  deleteBook = (id : number)=>{
    if(confirm('Êtes-vous sûre de vouloir supprimer le livre?')){
      this.books = this.books.filter(b=>b.id !== id);
    }
  }

  changeAction = (action : string) => this.action = action

}
