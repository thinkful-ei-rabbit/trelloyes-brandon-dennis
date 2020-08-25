import React from 'react';
import List from './components/List'



class App extends React.Component {
  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="List-cards">
        {this.props.store.lists.map(list => (
            <List
               key={list.id}
               header={list.header}
               cards={list.cardIds.map(id => this.props.store.allCards[id])}
            />
          ))}
        </div>
      </main>
    )
  }
}

export default App;