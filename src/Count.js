import React from 'react';

// function Count({ count }) {
//     return (
//         <span className="counter">{count}</span>
//     );
// }

class Count extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate: nextProp:', nextProps, 'nextState: ', nextState);

        // if (nextProps.count % 3 === 0) {
        //     return true;
        // } else {
        //     return false;
        // }
        return true;
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps: nextProps:', nextProps);
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate: nextProps:', nextProps, 'nextState: ', nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate: prevProps:', prevProps, 'prevState: ', prevState);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return(
            <span className="counter">{this.props.count}</span>
        );
    }
}

export default Count;
