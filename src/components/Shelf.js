import React,{ Component } from "react";
import Book from './Book'  //import book component needed

                /* Shelf Component I got from App.js*/
export default class Shelf extends Component{
    render(){
        return(
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.name}</h2> {/* making shelved from static to dynamic */}
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                          this.props.books.map((book,key) =>  //map function to display books 
                          <Book moveBookShelf={this.props.moveBookShelf} //calling shelves updating function
                          book={book} 
                          key = {key} //each book has a key
                          /> )
                      }
                    </ol>
                  </div>
                </div>

        )
    }

}