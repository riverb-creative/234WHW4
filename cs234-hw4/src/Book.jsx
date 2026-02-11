/**
 * Book.jsx
 *  a component describing an individual book object
 */


const Book = (books) => {
    return(
        <section className="book">
            <header>
                <h3>{books.books.title}</h3>
                <h4>{books.books.author}</h4>
            </header>
            <div className="bookDetails">
                <p>Released: {books.books.releaseDate.toLocaleDateString()}</p>
                <p>Rating: {books.books.aveStars}</p>
                <ul class="genreList">
                   {books.books.genre.map((genre, index) => (
                    <li key={index}>{genre}</li>
                   ))}  
                </ul>
                <br />
                {
                    books.books.eBook ? (
                      <img src="/image/ebook.png" alt="available as an eBook" /> 
                    ) : (
                        <p>no eBook available</p>
                    )
                }
                <br />
            </div>
        </section>
    )
}

export default Book;