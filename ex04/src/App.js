import React, { Component } from 'react';
class App extends Component {
  setLocalStorage = () => {
    return (
      localStorage.setItem("Arena", "Selection Month")
    )
  }
  getLocalStorage = () => {
    var myLocalStorageData = localStorage.getItem("Arena")
    return ( myLocalStorageData
    )
  }
  render() {
    return (
      <div className="App">
        <button
        type="button"
        onClick={this.setLocalStorage}>
          setLocalStorage
        </button>
        <button
        type="button"
        onClick={this.getLocalStorage}>
          getLocalStorage
        </button>
      </div>

    )
  }
}
export default App;