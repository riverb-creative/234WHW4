import { useState } from 'react'
import './App.css'
import PageHeader from './PageHeader'
import BookList from './BookList'
import AddBookForm from './AddBookForm'



function App() {

  const [BOOKS, setBOOKS] = useState([
      {
      id: 1,
      title: "The Siren's Kiss",
      author: "Leslie Vedder",
      genre: ["Young Adult", "Romance", "Fantasy"],
      releaseDate: "2027-01-11",
      aveStars: 0,
      eBook: true
      },
      {
      id: 2,
      title: "Spells to Mend Broken Hearts",
      author: "Marissa Macy",
      genre: ["Young Adult", "Romance"],
      releaseDate: "2024-12-20",
      aveStars: 4,
      eBook: true
      },
      {
      id: 3,
      title: "How to Lose a Goblin in 10 Days",
      author: "Jessie Sylva",
      genre: ["Fantasy", "Romance"],
      releaseDate:"2023-03-01",
      aveStars: 8.5,
      eBook: false
      }
]);

  const addBook = (newBook) => {
    setBOOKS([...BOOKS, newBook]);
  }

  const deleteBook = (id) => {
    setBOOKS(BOOKS.filter((book) => book.id !== id));
  }

    const updateBook = (updatedBook) => {
    setBOOKS(BOOKS.map((book) =>
      book.id !== updatedBook.id ? book : updatedBook ));
  }

  return (
    <>
      <PageHeader projectName="Introduction to React" 
                  projectAuthor="River B"
                  projectDesc="displays book information with React"/>
      <BookList books={BOOKS}
                deleteBook={deleteBook}
                updateBook={updateBook}
      />
      <AddBookForm 
        addBook={addBook}
      />
    </>
  )
}

export default App
