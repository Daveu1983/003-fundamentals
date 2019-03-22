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
  library.withdraw(456);
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
