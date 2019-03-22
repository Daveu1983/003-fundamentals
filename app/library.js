class Library {
  constructor(books) {
    this.books = books;
  }

  add(name, author, ISBN) {
    const book1 = {name:name, author:author, ISBN:ISBN, available:true};
    this.books.push(book1);
  }
  withdraw(library,ISBN){

    library.filter(bok => bok.ISBN != ISBN);
  }
}


module.exports = Library;
