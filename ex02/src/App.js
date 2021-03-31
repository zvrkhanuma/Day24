import React, { Component } from 'react';
class App extends Component {
  setMyStorage = () => {
    return (
      document.cookie = "Year=2021",
      localStorage.setItem("Paragon", "yes, but Arena first"),
      sessionStorage.setItem('frontend', 'React')
    )
  }
  getMyStorage = () => {
    
      var myCookieData = document.cookie
      var myLocalStorageData = localStorage.getItem("Paragon")
      var mySessionStoragrData = sessionStorage.getItem('frontend')
      
    return (myCookieData, myLocalStorageData, mySessionStoragrData);
  }
  render() {
    return (
      <div className="App">
        <button
        type= "button"
        onClick={this.setMyStorage}>
          setMyStorage
          </button>
          <button
        type= "button"
        onClick={this.getMyStorage}>
          getMyStorage
          </button>
      </div>
    )
  }
}

export default App;
