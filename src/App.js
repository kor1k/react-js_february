import React, {Component} from 'react';
import Header from './components/Header'
// import logo from './logo.svg';
import './App.scss';

class App extends Component {
    state = {
        showMsg: false
    }
    showMsg = (objVal) => {
        this.setState({
            showMsg: true,
            newObj: objVal
        })
        console.log(this.state);
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                    {this.state.showMsg ? <h1>Hello, React February</h1> : null}
                    <button onClick={this.showMsg}>Show text</button>
                </header>
            </div>
        );
    }
}

export default App;
