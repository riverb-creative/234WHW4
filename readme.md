# CS 234W - Book App with React
## Author: River
### Date: 02/18/2026

**Description:** CS 234W HW5 | Working with Events, State, and Controlled Components

> [!NOTE]
> How { useState } is implemented in this application:
> - _App.jsx_: used to have direct access to object of array
> - _Book.jsx_: 
>       - access all the information of book object to update book
>       - handle the change of radio button for if it is an ebook or not
>       - handle the "Save Changes" button when clicked after updating book information
> - _AddBookForm.jsx_: 
>       - access all the information of book object to add book
>       - handle the change of radio button for if it is an ebook or not
>       - handle the submitBook form when clicked to show the added book

> [!NOTE]
> How the addBookForm is a controlled component:
> - The addBookForm qualifies as a controlled component because it is using React's { useState } which helps us to have a consisten and predictable way to manage the user's input.
>       - the _submitBook_ function handles the form submission 
>       - the _theBookTitle_, _theBookAuthor_, _theBookDate_, _theBookAvgStar_, _theBookGenre_, and _theBookEbookOption_ are all used as the value of the input fields where they respectively belong.
>       - the _onChange_ function in the input areas to detect when a user typing

> [!NOTE]
> How context and reducers could be applied to this application:
> - Reducers: very similar to useState, but it lets you move the state update logic from event  handlers into a single function outside of your component.
>       - reducers could be used in _App.jsx_ for the deleteBook, addBook, and updateBook
> - Context: used to share the data through the React Components without passing the props manually for every level of the component tree
>       - I don't think think we would need to use context in this application because there are no similar props that are being used. Unless if passing the props _deleteBook_, _updateBook_, and _addBook_ from App.jsx and BookList.jsx could be more simplified with the use of context since it is repeating information.
