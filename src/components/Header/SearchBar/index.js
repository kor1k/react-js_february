import React, {Component, Fragment} from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <Fragment>
                <input type="text" className="search-inp"/>
                <button>Search</button>
            </Fragment>
        )
    }
}