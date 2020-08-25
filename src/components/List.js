import React from 'react';
import Card from './Card'
import './List.css';

class List extends React.Component {
    render() {
        console.log(this.props.cards)
        return (
            <section className="List">
                <header className="List-header">
                    <h2>{this.props.header}</h2>
                </header>
                <div className="List-cards">
                {this.props.cards.map(cards => (
                    <Card
                        title={cards.title}
                        content={cards.content}
                    />
                    ))}
                </div>
            </section>
        )
    }
}

export default List;