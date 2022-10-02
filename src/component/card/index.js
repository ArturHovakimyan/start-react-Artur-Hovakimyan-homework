import React from 'react';
import './style.css'

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isClosed: false,
        }
    }

    handleCardToggle = (id) => {
        this.props.countCounter(id)
        this.setState({
            isClosed: !this.state.isClosed,
        })
    }

    render() {
        const { id, image } =this.props;

        return (
                <>
                    {
                        this.state.isClosed
                        ?
                        <div className={'container'}>
                            <button onClick={() => this.handleCardToggle(id)} className={'container-button'}>Show</button>
                        </div>
                            :
                            <div className={'container'}>
                                <p className={'container-text'}>{image}</p>
                                <img
                                    onClick={()=> this.handleCardToggle(id) }
                                    className={'container-icon'}
                                    src="/image/32178.png"
                                    alt="unmount card"/>
                            </div>
                    }

                </>

        );
    }
}

export default Card;