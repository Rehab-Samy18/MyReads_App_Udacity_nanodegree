import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import * as BooksAPI from '../BooksAPI'

/* Main Page Component */
export default class Main extends Component{
   
       state={
            books:[]  //empty array for books
        }
    
    componentDidMount(){
      BooksAPI.getAll().then((books) => {  //get books information from the backend server
        console.log(books)  //displaying the no. and info. of books to console
        this.setState({books}) //displaying books on the main page
      })
    }
      moveBookShelf=(book,shelf)=>{  //the function responsibe for changing the shelf
        BooksAPI.update(book,shelf)  //using update function from the BooksAPI file
        .then(res => {
              book.shelf = shelf; 
              this.setState(state =>({
                  books: state.books.filter(newBook=>
                    newBook.id!==book.id) //if condition to compare between the books id
                  .concat([book]) //concatenating two strings and returning the result
              }));
         
        });
      }
    render(){
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {/* Displaying the shelves three times depending on the name the name */}
                  <Shelf moveBookShelf={this.moveBookShelf}  //Displaying currently to read shelf
                  name="Currently Reading"                   //name of the shelf
                  books={this.state.books.filter(book=>book.shelf === "currentlyReading"
                  )}/>

                  <Shelf moveBookShelf={this.moveBookShelf}  //Displaying want to read shelf
                  name="Want To Read"                        //name of the shelf
                  books={this.state.books.filter(book=>book.shelf === "wantToRead" 
                  )}/>

                  <Shelf moveBookShelf={this.moveBookShelf} //Dispalying the read shelf
                   name="Read"                              ////name of the shelf
                   books={this.state.books.filter(book=>book.shelf === "read"
                   )}/>
                
            </div>
            </div>
            <div className="open-search">
            <Link to="/search"><h2>Press to Search </h2></Link> {/* using link attribute for the search option */}
            </div>
          </div>
        )
    }
}