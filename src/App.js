import React from 'react';
import Count from './Count';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            counterValue: 0,
            showCount: true,
        };
        this.increment = this.increment.bind(this);
        this.toggleDestroy = this.toggleDestroy.bind(this);
    }

    increment() {
        this.setState(state => ({ counterValue: state.counterValue + 1 }));
    }

    toggleDestroy() {
        this.setState(state => ({
            showCount: !state.showCount,
        }));
    }

    render() {
        const { showCount, counterValue } = this.state;
        return (
            <div className="App">
                <button onClick={this.increment}>
                    Increment
                </button>
                <button onClick={this.toggleDestroy}>
                    {showCount ? 'Destroy' : 'Restore'}
                </button>
                <br />
                {showCount ? <Count
                    count={counterValue}
                    ref={(component) => { this.component = component; }}
                /> : null}
            </div>
        );
    }
}

export default App;
