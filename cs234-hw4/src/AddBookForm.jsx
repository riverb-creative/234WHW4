/**
 * AddBookForm.jsx
 * 
 * a component that allows users to add a new book element
 */
import './AddBookForm.css'

const AddBookForm = () => {
    return (
        <div>
            <h3>Add a Book</h3>
            <fieldset>
                <form>
                    <label for="bookId">Book Id:</label>
                    <br />
                    <input type="text" id="bookId" name="bookId" size="50"
                        placeholder='Enter Book ID'/>
                    <br />
                    <br />
                    <label for="bookTitle">Book Title:</label>
                    <br />
                    <input type="text" id="bookTitle" name="bookTitle" size="50"
                        placeholder='Enter Book Title'/>
                    <br />  
                    <br />
                    <label for="bookAuthor">Book Author:</label>
                    <br />
                    <input type="text" id="bookAuthor" name="bookAuthor" 
                        placeholder="Enter both first and last name" size="50"/>
                    <br />
                    <br />
                     <label for="bookReleaseDate">Book Release Date:</label>
                     <br />
                    <input type="date" id="bookReleaseDate" name="bookReleaseDate" size="50"/>
                    <br />
                    <br />
                    <label for="bookAvgStar">Book Rating:</label>
                    <br />
                    <input type="number" id="bookAvgStar" name="bookAvgStar"
                        step="0.1" min="0" max="5" size="90"
                        placeholder="Enter a book rating 0 to 5"/>
                    <br />
                    <br />
                    <label for="bookGenre">Book Genre:</label>
                    <br />
                    <input type="text" id="bookGenre" name="bookGenre"
                            placeholder="Enter up to 3 genres (seperate with genres comma)"
                            size="50"/>
                    <br />
                    <br />
                    <p>Is this book available as an eBook?:</p>
                        <input type="radio" id="yesEbook" name="yesEbook" value="Yes" />
                            <label for="yesEbook">Yes</label>
                        <br/>
                        <input type="radio" id="noEbook" name="noEbook" value="No" />
                            <label for="noEbook">No</label>
                        <br/> 
                        <br />
                    <button type="submit">Submit</button> 
                </form>
            </fieldset>
        </div>
    )
}

export default AddBookForm;