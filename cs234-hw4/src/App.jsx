import './App.css'
import PageHeader from './PageHeader'
import BookList from './BookList'
import AddBookForm from './AddBookForm'

function App(books) {

  return (
    <>
      <PageHeader projectName="Introduction to React" 
                  projectAuthor="River B"
                  projectDesc="displays book information with React"/>
      <BookList books={books.books}/>
      <AddBookForm />
    </>
  )
}

export default App
