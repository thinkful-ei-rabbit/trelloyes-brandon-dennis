import React from 'react';
import List from './components/List'

function App(props) {
  
  const lists = props.store.lists.map(i => <List cardInfo={i}/>)
 


  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className='List-cards'>
      </div>
      {lists}


    </main>
  );
}

export default App