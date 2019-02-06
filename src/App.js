import React, {Component, Fragment} from 'react';
import Header from './components/Header'
import Menu from './components/Menu'
import MailList from './components/MailList'
import './App.scss';

class App extends Component {
    state = {
        showModal: false
    };

    showModalToggle = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    };

    render() {
        return (
            <Fragment>
                <Header/>
                <Menu showModalWindow={this.showModalToggle}/>
                <MailList showModalWindow={this.showModalToggle}/>
            </Fragment>
        );
    }
}

export default App;
