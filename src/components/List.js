import React from 'react';
import Card from './Card'
import './List.css';




function List(props) {

    console.log(props)
    //const lists = props.store.lists.map(i => <List cardInfo={i}/>)
    const cards = props.cardInfo.cardIds.map(i => <Card stuff={i}/>)

    return(
        <section className="List">
            <header className="List-header">
                {props.cardInfo.header}
                <div className="List-cards">
                {cards}
                </div>
            </header>
        </section>
    )
}

export default List;