import React, {Component, Fragment} from 'react'

export default class NewMailForm extends Component {
    render() {
        return (
            <Fragment>
                <input type="text" placeholder='To...'/>
                <textarea placeholder="Your message...">

                </textarea>
                <button>Send</button>

            </Fragment>
        )
    }
}