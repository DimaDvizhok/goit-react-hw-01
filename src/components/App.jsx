import "./App.css";

const favBooks = [
  { name: "JS for beginners" },
  { name: "React basics" },
  { name: "React Router overview" },
];

const BookList = ({ books }) => (
  <ul>
    {books.map((book, index) => {
      return <li key={index}>{book.name}</li>;
    })}
  </ul>
);

export const App = () => {
  return (
    <>
      <h1>Books of the week</h1>
      <BookList books={favBooks} />
    </>
  );
};
