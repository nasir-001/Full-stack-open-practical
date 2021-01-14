import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('ObservableTodoStore')
@observer
class App extends Component {

  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

export default App;
