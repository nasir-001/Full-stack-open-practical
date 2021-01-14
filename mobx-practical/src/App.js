import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

// @inject('BirdStore')
@inject('TodoStore')
@observer
class App extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const bird = this.bird.value;
    this.props.BirdStore.addBird(bird);
    this.bird.value = '';
  }

  render() {
    // const {BirdStore} = this.props;
    const TodoStore = this.props.TodoStore;

    return (
      <div>
        {TodoStore.todos.map((todo, index) => 
          <li 
            key={todo.id}
            checkTodo={this.checkTodo}
            editTodo={this.editTodo}
            doneTodo={this.doneTodo}
            calcelEdit={this.cancelEdit}
            deleteTodo={this.deleteTodo}
          >
            {todo.title}
          </li>
        )}
        {/* <h2>You have {BirdStore.birdCount} birds</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" placeholder="Enter bird" ref={input => this.bird = input} />
          <button>Add bird</button>
        </form>

        <ul>
          {BirdStore.birds.map(bird => (
            <li key={bird}>
              {bird}
            </li>
          ))}
        </ul> */}
      </div>
    )
  }
}

export default App;
