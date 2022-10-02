import React from 'react';
import './index.css'

class Countries extends React.Component {
    render() {
        const {icon, name} = this.props;

        return (
            <div className={'country-img-icon'}>
                <img className={'country-icon'} src={ icon } alt="country icon"/>
                <p>{ name }</p>
            </div>
        )
    }
}

export default Countries;