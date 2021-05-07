import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
/* Search Page Component */
export default class Main extends Component{
    state={
            books:[],   //empty array for books   
            results:[],  //empty array for results
            query : ""  //empty string for query
        }
      
    updateQuery = (query) => { 
        this.setState({   //update query function
            query:query
        }
        ,this.displaySearchResult);
        
    }

    displaySearchResult(){
        if(this.state.query==='' ){
            return this.setState({results:[]}) //if we entered an empty ,it'll return empty array
        }
        BooksAPI.search(this.state.query.trim()).then(res => { 
            if(res.error){
                return this.setState({results:[]}) //if we entered an errornous string, it'll return empty array
            }
            else{
                return this.setState({results:res})  //if we entered an existed book name,it'll return the result
            }
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
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link> {/* using link attribute for the search option */}
              <div className="search-books-input-wrapper">
                
                <input type="text" placeholder="Search by title or author" 
                value={this.state.query}     /* input query value */
                onChange={(event) =>this.updateQuery(event.target.value)} /> {/* updating the query with the new value  */}

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">

                  {
                      this.state.results.map((book,key) => //updating results using map function
                      <Book moveBookShelf={this.moveBookShelf} //call the shelf changer function
                      book={book} 
                      key={key} />) //each book should have an id
                  }
              </ol>
            </div>
          </div>
        )
    }
}