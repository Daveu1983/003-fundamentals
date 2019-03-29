class Library {
  constructor(books) {
    this.books = books;
  }

  add(name, author, ISBN) {
    const book1 = {name:name, author:author, ISBN:ISBN, available:true};
    this.books.push(book1);
  }
  remove(ISBN){

    const filtered_book = this.books.filter(function(book){
      if (book.ISBN != ISBN){
        return true;
      }else{
        return false
      }
    });
    this.books = filtered_book;
  }

  withdraw(ISBN){

    const checkOut = this.books.map(function(book){
      if (book.ISBN === ISBN){
        book.available = false;
        return book;
      }else {
        return book;
      }
    });
    this.books = checkOut;
  }

  returnBook(ISBN){

    const checkOut = this.books.map(function(book){
      if (book.ISBN === ISBN){
        book.available = true;
        return book;
      }else {
        return book;
      }
    });
    this.books = checkOut;
  }

  canBookBeCheckedOut(ISBN){
    this.books.forEach(book => {
      if (book.ISBN === ISBN){
        if (book.available === false){
          throw new Error("Book is already checked out")
        }
      }
    });
  }
}


module.exports = Library;
