/**
 * BookList.jsx
 * 
 * a component made up of individual Book components
 */

import Book from './Book';

const BookList = (books) => {
    return (
        <div className="bookList">
            {books.books.map((book, index) => (
                <Book key={index} books={book}/>
            ))}
        </div>
    )
}

export default BookList;