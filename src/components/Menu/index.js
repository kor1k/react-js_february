import React, {Component, Fragment} from 'react'
import App from "../../App";

export default class Menu extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>Inbox</li>
                    <li>Drafts</li>
                    <li>Send</li>
                    <li>Spam</li>
                </ul>
            </div>
        )
    }

}
