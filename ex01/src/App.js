import React, { Component } from 'react';
class App extends Component {
  setMyStorage = () => {
    return (
      document.cookie = "Year=2021",
      localStorage.setItem("Paragon", "yes, but Arena first"),
      sessionStorage.setItem('frontend', 'React')
    )
  }
  render() {
    return (
      <div className="App">
        <button
        type= "button"
        onClick={this.setMyStorage}>
          setMyStorage
          </button>
      </div>
    )
  }
}

export default App;