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
}


module.exports = Library;
