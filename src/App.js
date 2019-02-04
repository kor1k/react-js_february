import React, {Component, Fragment} from 'react';
import Header from './components/Header'
import Menu from './components/Menu'
import MailList from './components/MailList'
// import logo from './logo.svg';
import './App.scss';

class App extends Component {

    render() {
        return (
            <Fragment>
                <Header/>
                <Menu/>
                <MailList/>
            </Fragment>
        );
    }
}

export default App;
