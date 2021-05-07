import React from 'react'
import './App.css'
import {Route } from 'react-router-dom'

/* Importing Components Needed */
import Main from './components/Main'     
import Search from './components/Search'

class BooksApp extends React.Component {
  

  render() {
    return(
      <div>
        <Route exact path="/search" component={Search}/>     {/* Making url path = '/search' to the search page */}
        {/* as required in the rubric */}
        <Route exact path="/" component={Main}/>             {/* Making url path = '/' to the home page */}
        
      </div>
    )
    
  }
}

export default BooksApp
