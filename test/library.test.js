const Library = require("../app/library");

test("Check that a library can be instantiated with some books", () => {
  const library = new Library([
    {name:"Don't Make Me Think", author:"Steve Krug", ISBN: 123, available: true},
    {name:"Site Reliability Engineering", 
    author: "Niall Richard Murphy", ISBN:456, available: true},
    {name:"Fantastic Mr Fox", author:"Roald Dahl", ISBN:789, available:true}
  ]);
  expect(library.books).toEqual([
    {name:"Don't Make Me Think", author:"Steve Krug", ISBN: 123, available: true},
    {name:"Site Reliability Engineering", 
    author: "Niall Richard Murphy", ISBN:456, available: true},
    {name:"Fantastic Mr Fox", author:"Roald Dahl", ISBN:789, available:true}
  ]);
});

test("Check that a book has been removed", () => {
  const library = new Library([
    {name:"Don't Make Me Think", author:"Steve Krug", ISBN: 123, available: true},
    {name:"Site Reliability Engineering", 
    author: "Niall Richard Murphy", ISBN:456, available: true},
    {name:"Fantastic Mr Fox", author:"Roald Dahl", ISBN:789, available:true}
  ]);
  library.remove(456);
  expect(library.books).toEqual([
    {name:"Don't Make Me Think", author:"Steve Krug", ISBN: 123, available: true},
    {name:"Fantastic Mr Fox", author:"Roald Dahl", ISBN:789, available:true}
  ]);
});

test("Check that a book can be added to the library", () => {
  const library = new Library([]);
  library.add("Growth Mindset", "Carol Dweck", 992);
  expect(library.books).toEqual([
    {name:"Growth Mindset", author:"Carol Dweck", ISBN:992, available:true}
  ]);
});

test("Check that a book has been checked out", () => {
  const library = new Library([
    {name:"Don't Make Me Think", author:"Steve Krug", ISBN: 123, available: true},
    {name:"Site Reliability Engineering", 
    author: "Niall Richard Murphy", ISBN:456, available: true},
    {name:"Fantastic Mr Fox", author:"Roald Dahl", ISBN:789, available:true}
  ]);
  
  library.withdraw(789);
  expect(library.books).toEqual([
    {name:"Don't Make Me Think", author:"Steve Krug", ISBN: 123, available: true},
    {name:"Site Reliability Engineering", 
    author: "Niall Richard Murphy", ISBN:456, available: true},
    {name:"Fantastic Mr Fox", author:"Roald Dahl", ISBN:789, available:false}
  ]);
});

test("check book that is already checked out can't be borrowed", () =>{
  const library = new Library ([
  {name:"Don't Make Me Think", author:"Steve Krug", ISBN: 123, available: true},
  {name:"Site Reliability Engineering", 
  author: "Niall Richard Murphy", ISBN:456, available: false},
  {name:"Fantastic Mr Fox", author:"Roald Dahl", ISBN:789, available:true}
]);
expect(() => {
  library.withdraw(456);
  }).toThrowError( new Error("Book is already checked out"));
});

  test("Check that a book has been checked returned", () => {
    const library = new Library([
      {name:"Don't Make Me Think", author:"Steve Krug", ISBN: 123, available: false},
      {name:"Site Reliability Engineering", 
      author: "Niall Richard Murphy", ISBN:456, available: true},
      {name:"Fantastic Mr Fox", author:"Roald Dahl", ISBN:789, available:true}
    ]);
    
    library.returnBook(123);
    expect(library.books).toEqual([
      {name:"Don't Make Me Think", author:"Steve Krug", ISBN: 123, available: true},
      {name:"Site Reliability Engineering", 
      author: "Niall Richard Murphy", ISBN:456, available: true},
      {name:"Fantastic Mr Fox", author:"Roald Dahl", ISBN:789, available:true}
    ]);
});

  test("check book that is already checked out can't be borrowed", () =>{
    const library = new Library ([
    {name:"Don't Make Me Think", author:"Steve Krug", ISBN: 123, available: true},
    {name:"Site Reliability Engineering", 
    author: "Niall Richard Murphy", ISBN:456, available: false},
    {name:"Fantastic Mr Fox", author:"Roald Dahl", ISBN:789, available:true}
  ]);
  expect(() => {
    library.canBookBeCheckedOut(456);
    }).toThrowError( new Error("Book is already checked out"));
});
