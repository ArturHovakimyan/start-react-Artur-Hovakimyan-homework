import React from 'react';
import Card from './component/card';
import Count from './component/card/count';

class App2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            isReported: false
        }
    }
    countCounter = (id) => {
        const cards = this.state.cards.map(count => {
            if (count.id === id) {
                count.count++;
            }

            return count;
        })

        this.setState({
            cards
        })
    }
    componentDidMount() {
        fetch('/data/cards.json')
            .then(res => res.json())
            .then(cards => this.setState({ cards }))
    }
    getReport = () => {
        this.setState({
            isReported: !this.state.isReported
        })
    }
    render() {
        return (
            <>
            <div className={'cards-container'}>
                {this.state.cards.map(card => <Card
                        handleRemoveCard = {this.handleRemoveCard}
                        countCounter={this.countCounter}
                        key = { card.id }
                        id = { card.id }
                        image = { card.image }
                    />)
                }
            </div>
            <button className={'get-report'} onClick = { this.getReport }>Get report</button>
                {this.state.isReported 
                ? 
                <div className={'cards-count-container'}>
                    <Count cards={this.state.cards} className={"container-icon"}/>
                </div>
                : '' }
                </>
    );
  }
}

export default App2;