import React from 'react';
import './App.css';
import Header from './components/Header.jsx'
import Store from './components/Store'
import Button from './components/Button.jsx'
class App extends  React.Component{
  constructor(props) {
    super(props);
    this.fetchapi = this.fetchapi.bind(this);
  }
  state = {
    start : null,
    end: null,
    startSave: undefined,
    endSave: undefined,
    error: null,
      isLoaded: false,
      items: []
}
fetchapi() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          items: result
         
        });      
      },
      
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
    const navigationEntries = performance.getEntriesByType("navigation")
    this.setState({
      start: navigationEntries[0]?.requestStart,
      end:navigationEntries[0]?.responseEnd ,
      startSave:navigationEntries[0].domContentLoadedEventStart,
      endSave:navigationEntries[0].domContentLoadedEventEnd
    });
  
}
  render (){   
    return (
      <>
        <Header />
        <Store data={this.state} />
        
         <Button clickButton={this.fetchapi} />
     </>
    )
    
  }
}
export default App;
