import React from "react";
import Countries from "./component/countries";

class App3 extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            countries: [],
            searchedCountries: [],
            isSearched: false
        }
    }

    componentDidMount() {
        fetch('/data/countries.json')
            .then(res => res.json())
            .then(countries => {
                this.setState({countries:countries})
            })
    }

    searchInput = (event) => {
        this.setState({
            isSearched: true,
            searchedCountries: this.state.countries.filter(country =>
                country.name.toLowerCase().includes((event.target.value).toLowerCase()
            ))
        })
    }

    render() {
        return (
            <div>
                <header>
                    <div className="search-bar">
                        <div className="search-category">
                            <p className="search-header">Search Countries</p>
                        </div>
                        <label className="input-search">
                            <input onChange={(event) => this.searchInput(event)} type="text" placeholder="Search For Country..." />
                            <div className="search-menu">
                                {
                                    this.state.isSearched
                                    ?
                                        <div className="search-related">
                                            {
                                                this.state.searchedCountries.map(country =>
                                                    <Countries
                                                        name = {country.name}
                                                        key = {country.code}
                                                        icon = {country.image}
                                                    />
                                                )
                                            }
                                        </div>
                                        :
                                        <div className="search-related">
                                            {
                                                this.state.countries.map(country =>
                                                    <Countries
                                                        name = {country.name}
                                                        key = {country.code}
                                                        icon = {country.image}
                                                    />
                                                )
                                            }
                                        </div>
                                }
                            </div>
                        </label>
                    </div>
                </header>

            </div>
        );
    }
}

export default App3