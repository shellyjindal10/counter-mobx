import React, { Component } from 'react';
import Counter from './component/counter';
import store from './store/counterStore';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter store={store}/>
      </div>
    );
  }
}

export default App;
