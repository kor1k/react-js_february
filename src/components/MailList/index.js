import React, {Component} from 'react'
import NewMailForm from '../NewMailForm'
import App from "../../App";

export default class MailList extends Component {
    render() {
        return (
            <div className="mail-list-holder">
                MailList
                {this.props.showModal ? <NewMailForm/> : null}
            </div>
        )
    }
}
