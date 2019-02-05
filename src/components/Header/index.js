import React, {Component, Fragment} from 'react'
import App from "../../App";
import SearchBar from './SearchBar'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div>
                    <a href="#">
                    <img className="logotype-nav-top"
                    src="http://www.logosvectorfree.com/wp-content/uploads/2018/02/Gmail-Logo-Design-Vector-Free-Download.png"
                    alt="logo-gmail"/>
                    </a></div>
                <div><SearchBar/></div>
                <div>User menu</div>
            </div>
        )
    }
}
