import React,{ Component } from "react";


      /* Book Component that I got from App.js*/
export default class Book extends Component{

    render(){
      let appThumpnails = this.props.book.imageLinks? this.props.book.imageLinks.thumbnail:''; //to avoid
      // error that may happens to the books that have not thumbnail
  
        return(
            <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${appThumpnails})` }}></div>
                            <div className="book-shelf-changer">
                              <select value={this.props.book.shelf ||"none"} /* the value to determine the book state from the 4 states */
                              onChange={(event) => {  
                                this.props.moveBookShelf(   //calling the shelf changer function
                                  this.props.book,event.target.value //that takes the book and shelf as arguments
                                  )}} > 
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select >
                            </div>
                          </div>
                          <div className="book-title">{this.props.book.title}</div>
                          <div className="book-authors">{this.props.book.authors}</div>
                        </div>
                      </li>

        )
    }

}